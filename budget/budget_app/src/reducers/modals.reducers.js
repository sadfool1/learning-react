
const reducer = (state = {isOpen: false}, action) => {
let newState;
  switch (action.type) {
    case "OPEN_EDIT_ENTRY":
      newState = {...state, isOpen: true, id: action.payload.id}
      return newState

    case "CLOSE_EDIT_ENTRY":
      return {...state, isOpen: false}

    default:
      return state;
  }

}

export default reducer;
