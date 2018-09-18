export const selectSection = (num) => {
  return {
    type: 'SELECT_SECTION',
    section_number: num
  }
}