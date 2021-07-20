import {userActionType} from './User.types'
export const setCurrentUser = user => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user
});