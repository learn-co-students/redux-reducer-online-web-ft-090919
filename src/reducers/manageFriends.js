// export function manageFriends(state = {friends: []}, action){

//   switch (action.type){
//     case 'ADD_FREIND':
//       return {...state,friends: [...state.friends, action.friend]}
//     case 'REMOVE_FREIND':
//       return {...state, friends: state.friends.filter(friend =>friend.id === action.id)}  
//     default: 
//       return state  
//   } 
// }

export function manageFriends(state = {friends:[]}, action) {

  switch(action.type){
    case "ADD_FRIEND":
      return {...state,friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":

      return {...state, friends: state.friends.filter(friend => {return friend.id !== action.id})}

    default:
        return state
  }
}