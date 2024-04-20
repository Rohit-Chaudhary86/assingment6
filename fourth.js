// Function to test a regex pattern and extract specific parts of the matched text using groups
function testAndExtract(pattern, str) {
    // Create a new RegExp object with the provided pattern
    let regex = new RegExp(pattern);
  
    // Use the exec method of the RegExp object to test if the string matches the pattern
    let match = regex.exec(str);
  
    // Check if there is a match
    if (match) {
      // Extract specific parts of the matched text using groups
      let groups = {};
      for (let i = 1; i < match.length; i++) {
        groups[`group${i}`] = match[i];
      }
      return groups;
    } else {
      return null;
    }
  }
  
  // Test the function with patterns to capture different parts of a date (day, month, and year)
  const dateStr = 'Today is 19-04-2024';
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
  
  const result = testAndExtract(datePattern, dateStr);
  
  if (result) {
    console.log('Full match:', result.group0);
    console.log('Day:', result.group1);
    console.log('Month:', result.group2);
    console.log('Year:', result.group3);
  } else {
    console.log('No match found');
  }
  
  // Test the function with another pattern
  const timeStr = 'The time is 12:34 PM';
  const timePattern = /(\d{1,2}):(\d{2}) (AM|PM)/;
  
  const timeResult = testAndExtract(timePattern, timeStr);
  
  if (timeResult) {
    console.log('Full match:', timeResult.group0);
    console.log('Hour:', timeResult.group1);
    console.log('Minute:', timeResult.group2);
    console.log('Period:', timeResult.group3);
  } else {
    console.log('No match found');
  }
  