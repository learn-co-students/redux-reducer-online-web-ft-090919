// use `case` to switch action based on the action's type
export function managePresents(state, action){
    switch(action.type) {
        case "INCREASE":
            // return Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1});
            return {...state, numberOfPresents: state.numberOfPresents + 1};
        default:
            return state;
    }
}

// Check if below works the same
// export function managePresents(state, action){
//     switch(action.type) {
//         case "INCREASE":
//             return {...state, action.change}
//         default:
//             return state;
//     }
// }