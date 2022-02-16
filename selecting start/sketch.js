var numArray = [];

function setup()
{
   for(var i = 0; i < 100; i++)
   {
      numArray.push(round(random(0, 1000)));
   }

   var highestValue = 0;
   var highestIndex = 0;

   var smallestValue = null;
   var smallestIndex = 0;

   for(var i = 0; i < numArray.length; i++)
   {
      if(numArray[i] > highestValue)
      {
         highestValue = numArray[i];
         highestValue = i;
      }

      if(smallestValue = null || numArray[i] < smallestValue)
      {
         smallestValue = numArray[i];
         smallestIndex = i;
      }
   }

   console.log("the highest value in numArray is " + highestValue + "it is index " + highestIndex);

   console.log("the smallest value in numArray is " + smallestValue + "it is index " + smallestIndex);

}





