const validation = (numberString) => {
  const regex = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
  const invalid = !regex.test(numberString);

  if (invalid) {
    return false;
  }

  return true;
};

export default validation;
