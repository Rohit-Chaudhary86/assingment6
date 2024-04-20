function testRegex(pattern, str) {
   
    let regex = new RegExp(pattern);
  
    return regex.test(str);
  }
  
  // Test the function with various patterns and strings
  console.log(testRegex('hello', 'hello world'));      // true
  console.log(testRegex('hello', 'Hello world'));      // false (case-sensitive)
  console.log(testRegex('\\d+', '12345'));             // true (matches one or more digits)
  console.log(testRegex('\\w+', 'Hello123'));          // true (matches one or more word characters)
  console.log(testRegex('^[a-zA-Z0-9]+$', 'Hello123')); 
  console.log(testRegex('^\\d{5}$', '12345'));        
  console.log(testRegex('^\\d{5}$', '123456'));