export const selectSection = (num) => {
  return {
    type: 'SELECT_SECTION',
    section_number: num
  }
}

export const selectProgram = (program) => {
  return {
    type: 'SELECT_PROGRAM',
    program
  }
}

export const unselectProgram = () => {
  return {
    type: 'UNSELECT_PROGRAM',
    program: null
  }
}

export const hoverProgram = (program) => {
  return {
    type: 'HOVER_PROGRAM',
    hover_program: program
  }
}

export const setProgramImage = (imgSrc) => {
  return {
    type: 'SET_PROGRAM_IMAGE',
    imgSrc
  }
}

export const unsetProgramImage = () => {
  return {
    type: 'UNSET_PROGRAM_IMAGE',
    imgSrc: 'Images/ProgramFront.jpg'
  }
}