export function manageFriends(state = {friends: []}, action) {
  
  
    swtich(action.type){
        
          case "ADD_FRIEND":
      return (
        {...state,
            friends: [
              ...state.friends,
              action.friend
            ]
        }
    )


        // case 'REMOVE_FRIEND':

        // default: return state
  };
}


//  switch(action.type) {

//     case "ADD_FRIEND":
//       return (
//         {...state,
//             friends: [
//               ...state.friends,
//               action.friend
//             ]
//         }
//     )
//  }

let action = {
    type: "ADD_FRIEND",
    friend: {
      name: "Chrome Boi"
      homewtown: "NYC",
      id: 1
    }
  }

  manageFriends({friends: []}, action )