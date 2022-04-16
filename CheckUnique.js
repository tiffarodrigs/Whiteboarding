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
  else{
    return "Enter a String";
  }
}
checkUnique("hello");
checkUnique("copyright");

function checkUnique(input)
{
  let output="true";
  if(isNaN(input))
  {
    for (i=0;i<input.length;i++)
    {
      for(j=0;j<input.length;j++)
      {
        if(i!=j)
        {
          if(input[i]==input[j])
          {
            output="false";
          }
        }
      }
    }
    return output;
  }
}