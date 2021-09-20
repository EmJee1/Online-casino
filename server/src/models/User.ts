import { HasOptionalPrimaryId, HasPrimaryId } from './abstracts/HasPrimaryId'
import { HasOptionalTimestamps, HasTimestamps } from './abstracts/HasTimestamps'

export interface IDBUser extends HasTimestamps, HasPrimaryId {
	email: string
	username: string
}

export interface IUser extends HasOptionalTimestamps, HasOptionalPrimaryId {
	email: string
	username: string
}
