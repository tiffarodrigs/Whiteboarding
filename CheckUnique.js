// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

function checkUnique(input)
{
  let output="true";
  if(isNaN(input))
  {
    for(let eachChar of input)
    {
      //use includes(searchstring,postionFromWhichToSeach)
      if(input.includes(eachChar,(input.indexOf(eachChar))+1))
      {
        output = "false";  
      }
    }
    return output;
  }
}
checkUnique("hello");
checkUnique("copyright");