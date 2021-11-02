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


