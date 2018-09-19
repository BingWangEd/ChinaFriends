let reducer = function (state, action){
  switch (action.type){
    case 'SELECT_SECTION':
      return Object.assign({}, state, {
        selected_section: action.section_number
      })
    case 'SELECT_PROGRAM':
      return Object.assign({}, state, {
        selected_program: action.program
      })
    default:
      return state;
  }
}

export default reducer;