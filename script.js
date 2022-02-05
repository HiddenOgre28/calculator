// Function operations
const add = (...numbers) => {
	
    let result = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    
    return result;
};

const subtract = (...numbers) => {
	
    let result = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        result -= numbers[i];
    }
    
    return result;
  
};

const multiply = (...numbers) => {
	
    let result = 1;
    
    for(let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    
    return result;
    
};

// Takes the first number and calculates it's power to the rest of the numbers inputed.
const power = (...numbers) => { 
	// Takes the first number off the list and stores it in a new variable.
    const firstNumber = numbers.splice(0, 1);
    let multiplyTheRest = 1;
    let result = 1;
    
    // Takes the numbers array and multiplies each one times the next.
    for(let i = 0; i < numbers.length; i++) {
        multiplyTheRest *= numbers[i];
    }
    

    // Multiplies the first number inside firstNumber by itself as many times whatever value was outputed in the previous loop.
    for(let i = 1; i <= multiplyTheRest; i++) {
        result *= firstNumber;
    }
    
    return result;
};

const factorial = (number) => {
	let result = 1;
  
  for(let i = 1; i <= number; i++) {
  	result = result * i;
  }
  
  return result;
};