import { IFriends } from '../tables/Friends'
import { IUser } from '../tables/User'

declare module 'knex/types/tables' {
	interface Tables {
		users: IUser
		friends: IFriends
	}
}
