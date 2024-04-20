function findMatches(str) {
    const digitPattern = /\d/g;          
    const uppercasePattern = /[A-Z]/g;   
    const lowercasePattern = /[a-z]/g;   
    const specialCharPattern = /[^a-zA-Z0-9\s]/g;  
  
    // Find matches using the regular expressions
    const digits = str.match(digitPattern) || [];
    const uppercaseLetters = str.match(uppercasePattern) || [];
    const lowercaseLetters = str.match(lowercasePattern) || [];
    const specialChars = str.match(specialCharPattern) || [];
  
    // Return the matches
    return {
      digits: digits,
      uppercaseLetters: uppercaseLetters,
      lowercaseLetters: lowercaseLetters,
      specialChars: specialChars
    };
  }
  
  // Test the function with a sample string
  const sampleString = 'Hello, World! 123';
  
  const matches = findMatches(sampleString);
  
  console.log('Digits:', matches.digits);                     // ['1', '2', '3']
  console.log('Uppercase Letters:', matches.uppercaseLetters); // ['H', 'W']
  console.log('Lowercase Letters:', matches.lowercaseLetters); // ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']
  console.log('Special Characters:', matches.specialChars); 