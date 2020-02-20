export function manageFriends(state = { friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {...state, friends: [state.friends[0], action.friend]}
        case 'REMOVE_FRIEND':
            const friendIndex = (e) => e.id === action.id
            const newList = {...state}
            const i = newList.friends.findIndex(friendIndex)
            const friends = newList.friends.slice(0, i).concat(newList.friends.slice(-i))
            return {friends: friends}
        default:
            return state
    }
}
