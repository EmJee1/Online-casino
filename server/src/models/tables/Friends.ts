import { HasPrimaryId } from '../abstracts/HasPrimaryId'
import { HasTimestamps } from '../abstracts/HasTimestamps'

export enum FriendStatus {
	Invited = 'INVITED',
	Accepted = 'ACCEPTED',
	Blocked = 'BLOCKED',
	Ignored = 'IGNORED',
}

export interface IFriends extends HasTimestamps, HasPrimaryId {
	requester: number
	requested: number
	status: FriendStatus
}
