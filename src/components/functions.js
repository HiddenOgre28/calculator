const add = (a, b) => {
  return a + b;
};

// const substract = (...numbers) => {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result -= numbers[i];
//   }
//   return result;
// };

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// Takes the first number and calculates it's power to the rest of the numbers inputed.
const power = (...numbers) => {
  // Takes the first number off the list and stores it in a new variable.
  const firstNumber = numbers.splice(0, 1);
  let multiplyTheRest = 1;
  let result = 1;
  // Takes the numbers array and multiplies each one times the next.
  for (let i = 0; i < numbers.length; i++) {
    multiplyTheRest *= numbers[i];
  }
  // Multiplies the first number inside firstNumber by itself as many times whatever value was outputed in the previous loop.
  for (let i = 1; i <= multiplyTheRest; i++) {
    result *= firstNumber;
  }
  return result;
};

const factorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
};




const evaluate = (nums) => {
	const operators = ["+", "-", "/", "*", "^", "!"];
  const numbers = nums.split(/[\+\-\/\*\^\!\(\)]/)
  const opts = [...nums].filter( value => operators.includes(value))
 	
  const operation = numbers.map( (num, index) => {
    if(opts[index] !== undefined) {
      return [num, opts[index]]
    } else {
      return num
    }
	}).flat().filter( value => value !== "");

	const newArray = operation.map( value => {
  	if(!(operators.includes(value))) {
    	return parseFloat(value);
    } else {
    	return value;
    }
  })
  
  while (newArray.length > 1) {
  	if(newArray.includes("+")) {
      const sum = newArray[0] + newArray[2];
      newArray.splice(0, 3, sum);
  	}
    if(newArray.includes("-")) {
      const subs = newArray[0] - newArray[2];
      newArray.splice(0, 3, subs);
  	}
    if(newArray.includes("*")) {
      const mult = newArray[0] * newArray[2];
      newArray.splice(0, 3, mult);
  	}
    if(newArray.includes("/")) {
      const div = newArray[0] / newArray[2];
      newArray.splice(0, 3, div);
  	}
    if(newArray.includes("^")) {
      const div = newArray[0] ** newArray[2];
      newArray.splice(0, 3, div);
  	}
    if(newArray.includes("!")) {
      const fact = (number) => {
      	let result = 1;
  			for (let i = 1; i <= number; i++) {
    			result = result * i;
  			}
  			return result;
      };
      newArray.splice(0, 3, fact(newArray[0]));
  	}
  }
  
  return newArray.toString();

}






export {add, divide, multiply, power, factorial, evaluate}