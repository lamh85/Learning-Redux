// Store all exported values into an object called "types"
import * as types from '../constants/ActionTypes';

// FriendListApp imports these functions
// Then uses a Redux function to convert them into actions

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
