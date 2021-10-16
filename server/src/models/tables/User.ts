import { HasPrimaryId } from '../abstracts/HasPrimaryId'
import { HasTimestamps } from '../abstracts/HasTimestamps'

export interface IUser extends HasTimestamps, HasPrimaryId {
	email: string
	username: string
}
