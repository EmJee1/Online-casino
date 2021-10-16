import { HasPrimaryId } from '../abstracts/HasPrimaryId'
import { HasTimestamps } from '../abstracts/HasTimestamps'

export enum FriendStatus {
	Invited = 'INVITED',
	Accepted = 'ACCEPTED',
	Blocked = 'BLOCKED',
}

export interface IFriends extends HasTimestamps, HasPrimaryId {
	first_user: number
	second_user: number
	status: FriendStatus
}
