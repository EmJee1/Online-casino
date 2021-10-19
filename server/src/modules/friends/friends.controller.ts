import { Request, Response } from 'express'
import { FriendStatus } from '../../models/tables/Friends'
import db from '../../config/knex.conf'

export const request = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { userId } = req.body

	if (userId === req.user.id) {
		return res.clientError(400, 'You cannot send yourself a friend request')
	}

	let friendRelation
	try {
		friendRelation = await db
			.table('friends')
			.whereRaw(
				'(requester = ? AND requested = ?) OR (requester = ? AND requested = ?)',
				[req.user.id, userId, userId, req.user.id]
			)
			.first()
	} catch {
		return res.serverError()
	}

	if (friendRelation) {
		return res.clientError(409, 'Already a relation with that user')
	}

	try {
		await db.table('friends').insert({
			requester: req.user.id,
			requested: userId,
			status: FriendStatus.Invited,
		})
	} catch {
		return res.serverError()
	}

	return res.success(204)
}

export const accept = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { userId } = req.body

	let updated
	try {
		updated = await db
			.table('friends')
			.where({
				requester: userId,
				requested: req.user.id,
				status: FriendStatus.Invited,
			})
			.update({ status: FriendStatus.Accepted })
	} catch {
		return res.serverError()
	}

	if (!updated) {
		return res.clientError(404, 'You do not have a invite to accept')
	}

	return res.success(204)
}
