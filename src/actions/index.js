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