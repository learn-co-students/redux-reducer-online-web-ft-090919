export function managePresents(state = { numberOfPresents: 0 }, action) {
  if (action.type === "INCREASE") {
    return { numberOfPresents: state.numberOfPresents + 1 }
  } else if (action.type === "DECREASE") {
    return { numberOfPresents: state.numberOfPresents - 1 }
  }
  return { numberOfPresents: 0 }
}
