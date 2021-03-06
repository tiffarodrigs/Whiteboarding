// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

//Try implementing reduce-WIP

function CompString(input)
{
  let charArray = input.split("");
  console.log("charArray : ",charArray);
  let counter=0;
  charArray.reduce((prevVal,curVal)=>
  {
    console.log("prevVal : "+prevVal);
    console.log("curVal : "+curVal);
    let output="";
    if (prevVal!=curVal)
    {
      console.log("1counter : ",counter);
      console.log("prevVal : ",prevVal);
      console.log("curVal : ",curVal);
      counter++
      if ((counter>1)&&(prevVal!=curVal))
      {
        console.log("2counter : ",counter);
        console.log("prevVal : ",prevVal);
        console.log("curVal : ",curVal);
        output= output.concat(counter+prevVal);
        counter=0;

        console.log("if : ",output)

      }
      if((counter<1)&&(prevVal!=curVal))
      {
        output= output.concat(prevVal);
        console.log("2if : ",output)
      }
      console.log("output : ",output)
    }
    
    return output;
  });
}

CompString("caabccdddda");
/*//implementing using for
function CompString(input)
{
  let charArray = input.split("");
  console.log("charArray : ",charArray);
  let counter =1;
  let output="";
  for (let i=0;i< charArray.length;i++)
  {
    if (i>0)
    {
      if(charArray[i] == charArray[i-1])
      {
        counter++;
        if((i==((charArray.length)-1)))
        {
          output = `${output}${counter}${charArray[i-1]}`;
        }
      }
      if(charArray[i] != charArray[i-1])
      {
        if(counter > 1)
        {
        output = `${output}${counter}${charArray[i-1]}`;
        }
        
        if((counter == 1))
        {
          output = `${output}${charArray[i-1]}`;
        }
        counter=1;
        if((i==((charArray.length)-1)))
        {
          output = `${output}${charArray[i]}`;
        }
        
      }
      console.log("output : ",output);
    }
  }
}
CompString("aaabccdddda");
*/
