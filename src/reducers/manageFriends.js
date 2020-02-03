export function manageFriends(state = {friends: []}, action){

    switch (action.type){
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let newFriends = state.friends.map(friend => {
                if (friend.id !== action.id && friend )
                return friend 
            // To remove undefined from array (implemented in return below)
            // arr.filter(n => n)
            })
            return { friends: newFriends.filter(n => n) }
        default:
            return state 
    }

}


// Alternative way to remove friend with slice shown below:

//     case "REMOVE_FRIEND":
//         const i = state.friends.findIndex(friend => friend.id === action.id);
//         return {...state, friends: [...state.friends.slice(0, i), ...state.friends.slice(i+1)]}
        