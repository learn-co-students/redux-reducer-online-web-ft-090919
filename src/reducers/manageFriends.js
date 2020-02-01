export function manageFriends(state = {friends: []}, action){

  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: state.friends.concat(action.friend)}
    case 'REMOVE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id != action.id)
      }
    default:
      return state
  }


}
