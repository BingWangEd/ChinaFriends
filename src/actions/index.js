export const selectSection = (num) => {
  console.log(num)
  return {
    type: 'SELECT_SECTION',
    section_number: num
  }
}