
function capitalizeFirstLetters(text) {
  return text.split(/([.!?]\s*)/).map((segment, index) => {
    if (index % 2 === 0) {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
    return segment;
  }).join('');
};


  export default capitalizeFirstLetters;