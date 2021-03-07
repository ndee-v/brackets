module.exports = function check(str, bracketsConfig) {
  // your solution


  let arr = str.split('');

  let stack = [];
  let i = 0;
  let config = [];

  
  let fstI = 0;
  let lstI = 0;
  while (i < arr.length) {


    config = bracketsConfig.filter((elem) => elem.includes(arr[i]))[0]
    fstI = config.indexOf(arr[i])
    lstI = config.lastIndexOf(arr[i])

    if (fstI === lstI) {
      if (fstI === 0) {
        stack.push(arr[i])      
      } else {
        if (stack.length === 0) {
          return false
        }
        if (stack[stack.length - 1] !== config[0]) {
          return false
        }
        stack.pop()
      }
    } else {
        if ((stack.length === 0) || (stack[stack.length - 1] !== config[0])) {
          stack.push(arr[i]) 
        } else {
          stack.pop()
        }
    }
    i++
  }

  return (stack.length === 0)
}
