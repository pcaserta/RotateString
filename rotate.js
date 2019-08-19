function rotate(str, input) {
  if (str.length > 1) {
    return str.slice(-input) + str.slice(0, -input);
  }

  return str;
}
console.log(rotate("MyString", 2));
