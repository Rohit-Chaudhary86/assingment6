function outerFunction(param) {
    // Declare a variable within outerFunction
    let localVar = "I am a local variable in outerFunction";
  
    // Define the inner function
    function innerFunction() {
      // Access both the parameter of outerFunction and the local variable
      console.log(`Parameter of outerFunction: ${param}`);
      console.log(`Local variable in outerFunction: ${localVar}`);
    }
  
    // Return the inner function
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction with a parameter
  let closure = outerFunction("Hello, World!");
  
  // Call the inner function
  closure();
  