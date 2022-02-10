const operators = ["+", "-", "/", "*", "^", "!", "."];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
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
  const numbers = nums.split(/[+-\/*^!]/)
  const opts = [...nums].filter( value => operators.includes(value))
 	
  const operation = numbers.map( (num, i) => {
    if(opts[i] !== undefined) {
      return [num, opts[i]]
    } else {
      return num
    }
	}).flat().filter( value => value !== "");

	const newArray = operation.map( (value, i, array )=> {
  	if(!(operators.includes(value))) {
    	return parseFloat(value);
    } else if ( value === array[i-1] && value === "-") {
    	return parseFloat(value+array[i+1])
    } else {
    	return value;
    }
  }).filter( (value, i, array) => {
  	if((typeof(value) === "number" && typeof(array[i-1]) === "string") || array[i-1] === undefined || typeof value === "string") {
    	return value;
    }
  })
  
  while (newArray.length > 1) {
  	if(newArray[1] === "+") {
      newArray.splice(0, 3, add(newArray[0], newArray[2]));
  	}
    if(newArray[1] === "-") {
      newArray.splice(0, 3, substract(newArray[0], newArray[2]));
  	}
    if(newArray[1] === "*") {
      newArray.splice(0, 3, multiply(newArray[0], newArray[2]));
  	}
    if(newArray[1] === "/") {
      newArray.splice(0, 3, divide(newArray[0], newArray[2]));
  	}
    if(newArray[1] === "^") {
      newArray.splice(0, 3, power(newArray[0], newArray[2]));
  	}
    if(newArray[1] === "!") {
      newArray.splice(0, 3, factorial(newArray[0]));
  	}
  }
  
  return newArray.toString();

}


export {add, substract, divide, multiply, power, factorial, evaluate, operators, digits};