export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let newFriends = state.friends
            newFriends.push(action.friend)
            return {friends: newFriends};
        case 'REMOVE_FRIEND':
            let updatedFriends = [...state.friends]
            let foundFriend = updatedFriends.find(friend => friend.id === action.id)
            let friendIndex = updatedFriends.indexOf(foundFriend)
            updatedFriends.splice(friendIndex, 1)
            return {friends: updatedFriends}
        default:
            return state
    }
}
