export function manageFriends(state = { friends: [] }, action) {
  if (action.type === "ADD_FRIEND") {
    return { ...state, friends: [...state.friends, action.friend] };
  } else if (action.type === "REMOVE_FRIEND") {

    const friendIndex = state.friends.findIndex(
      friend => friend.id === action.id
    );

    return {
      ...state,
      friends: [
        ...state.friends.slice(0, friendIndex),
        ...state.friends.slice(friendIndex + 1)
      ]
    };
  }

  return { ...state }
}


