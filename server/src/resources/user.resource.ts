/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import generateAvatar from '../utils/avatar-generator'
import { IUser } from '../models/tables/User'

export class UserResource {
	private user: IUser

	constructor(user: IUser) {
		this.user = user
	}

	public get full() {
		return {
			id: this.user.id,
			email: this.user.email,
			username: this.user.username,
			avatar: generateAvatar(this.user.username),
			completedRegistration: !!this.user.username,
		}
	}
}
