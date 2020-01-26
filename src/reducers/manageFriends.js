export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let friendsArray = state.friends
      friendsArray.push(action.friend)
      return {friends: friendsArray}
    case 'REMOVE_FRIEND':
      let deleteIndex
      let newArray = []
      
      for (let i = 0; i < state.friends.length; i++) {
        if (action.id == state.friends[i].id) {
          deleteIndex = i
        }
        newArray.push(state.friends[i])
      }

      newArray.splice(deleteIndex,deleteIndex)

      return {friends: newArray}
    default:
      return state;
  }
}
