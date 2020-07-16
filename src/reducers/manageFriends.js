export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]};
        case "REMOVE_FRIEND":
            let rIndex = state.friends.findIndex(x => x.id === action.id);
            return {friends: [...state.friends.slice(0, rIndex), ...state.friends.slice(rIndex + 1)]};
        default:
            return state;
    }
}
