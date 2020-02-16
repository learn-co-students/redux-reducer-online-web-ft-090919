// What would params look like?
// state = {friends: [ 
//     {name: 'Avi', hometown: 'NYC', id: 100}, 
//     {name: 'Steven', hometown: 'Philadephia', id: 102} 
// ]}
// action = {
//   type: "ADD_FRIEND",
//   friend: {
//     name: 'Joe',
//     hometown: 'Boston',
//     id: 101
//   }

export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            // action.friend
            return {...state, friends: [...state.friends, action.friend]};
            // find prop by id and remove it from the array
            case "REMOVE_FRIEND": 
                const rmIndex = state.friends.findIndex(friend => friend.id === action.id);
                return (
                    {...state, friends: [...state.friends.slice(0, rmIndex), ...state.friends.slice(rmIndex + 1)]}
                );
            default:
                    return state;
        }
};