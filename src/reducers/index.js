let reducer = function (state, action){
  switch (action.type){
    case 'SELECT_SECTION':
      if (action.section === 'Programs'){
        return Object.assign({}, state, {
          selected_section: action.section
        })
      } else {
        return Object.assign({}, state, {
          selected_section: action.section
        })
      }
    case 'SELECT_PROGRAM':
    case 'UNSELECT_PROGRAM':
      return Object.assign({}, state, {
        selected_program: action.program
      })
    case 'SET_PROGRAM_IMAGE':
    case 'UNSET_PROGRAM_IMAGE':
      return Object.assign({}, state, {
        program_image: action.imgSrc
      })
    case 'ADD_SCHEDULE_INTRO_DISPLAY':
      return Object.assign({}, state, {
        schedule_intro_display: state.schedule_intro_display ? state.schedule_intro_display.push(action.index) : [action.index]
      })
    case 'REMOVE_SCHEDULE_INTRO_DISPLAY':
      return Object.assign({}, state, {
        schedule_intro_display: state.schedule_intro_display.splice(state.schedule_intro_display.indexOf(action.index), 1)
      })
    default:
      return state;
  }
}

export default reducer;