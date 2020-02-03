export function manageFriends(state, action) {
  
  
    swtich(action.type){
        
        case 'ADD_FRIEND':

        return {friends: state.friends.push(action.friend)}


        case 'REMOVE_FRIEND':

        default: return state
  };
}
