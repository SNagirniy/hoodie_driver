

const idRegex = /^(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^0-9]*[0-9]){4})[A-Z0-9]{6}$/;

const isId =(id)=> idRegex.test(id);

export default isId;