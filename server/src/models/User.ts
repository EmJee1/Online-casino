import { HasOptionalPrimaryId, HasPrimaryId } from './abstracts/HasPrimaryId'
import { HasOptionalTimestamps, HasTimestamps } from './abstracts/HasTimestamps'

export interface IDBUser extends HasTimestamps, HasPrimaryId {
	id: number
	email: string
	username: string
}

export interface IUser extends HasOptionalTimestamps, HasOptionalPrimaryId {
	id: number
	email: string
	username: string
}
