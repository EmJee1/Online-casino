import { IUser } from '../models/tables/User'

export class UserResource {
	private user: IUser

	constructor(user: IUser) {
		this.user = user
	}

	public get full(): Partial<IUser> {
		return {
			id: this.user.id,
			email: this.user.email,
			username: this.user.username,
		}
	}
}
