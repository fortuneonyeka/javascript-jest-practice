export const stringLength = (string) => {
  const char = string.split('');
  let count = 0
  char.forEach(() => {
    count += 1;
  });
  if (count < 1 || count > 10) throw new Error(`string length is outside range`)
  return count
}


export const reverseString = (string) =>{
  return string.split("").reverse().join("");
}
//  reverseString("Hello");


export const calculator = {
  add: (x,y) => x + y,
  multiply: (x,y) => x * y,
  subtract: (x,y) => x - y,
  divide: (x,y) => x / y,
}

export const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
