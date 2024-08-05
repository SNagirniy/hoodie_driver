

function processString(input) {
  const cleanedString = input.replace(/[^\p{L}\s]/gu, '');
  const words = cleanedString.split(/\s+/);
  const longWords = words.filter(word => word.length > 2);
  
  return longWords;
  }

  export default processString;