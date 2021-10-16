import { HasPrimaryId } from '../abstracts/HasPrimaryId'
import { HasTimestamps } from '../abstracts/HasTimestamps'

export interface IFriends extends HasTimestamps, HasPrimaryId {
	first_user: number
	second_user: number
}
