import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/big-smile'

const generateAvatar = (seed: string): string => createAvatar(style, { seed })

export default generateAvatar
