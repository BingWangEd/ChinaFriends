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