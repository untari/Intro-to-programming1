var numArray = [];

function setup()
{
   for(var i = 0; i < 100; i++)
   {
      numArray.push(round(random(0, 1000)));
   }

   var highestValue = 0;
   var nighestIndex = 0;

   for(var i = 0; i < numArray.length; i++)
   {
      if(numArray[i] > highestValue)
      {
         highestValue = numArray[i];
         highestValue = i
      }
   }

   console.log("the highest value in numArray is " + highestValue + "it is index " + highestValue);
}




