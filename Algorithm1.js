// Instructions:

// Write a for loop that looks at each index of the array to see if it matches the random value

// If it does match the random value display an alert box with the index of the array and the value

var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

for (let i = 0; i < stuff.length; i++) {
    if(stuff[i] === random_value){
        console.log("==================");
        console.log ("It matches! " + random_value + " found in " + (i+1) + " tries!");
        console.log("==================");
    } 
}