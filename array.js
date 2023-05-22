const fruits = ["apple", "oranges", "", "mango", "", "lemon"];
console.log(fruits.map((element) => {
  if (element === '') {
    return 'empty string';
  }
  return element;
}));
