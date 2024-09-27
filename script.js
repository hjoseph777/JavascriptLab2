//Step 1: If-else Condition************************************************

let number = 11; // Assign any number here
if (number > 0) {
  // Output for positive numbers
  console.log("Positive");
} else if (number < 0) {
  // Output for negative numbers
  console.log("Negative");
} else {
  // Output for zero
  console.log("Zero");
}

// Step 2: Switch case*************************************************************
let day = 3;
switch (day) {
  case 1:
    // Output Sunday
    console.log("Sunday");
    break;
  case 2:
    // Output Monday
    console.log("Monday");
    break;
  case 3:
    // Output Tuesday
    console.log("Tuesday");
    break;
  case 4:
    // Output Wednesday
    console.log("Wednesday");
    break;
  case 5:
    // Output Thursday
    console.log("Thursday");
    break;
  case 6:
    // Output Friday
    console.log("Friday");
    break;
  case 7:
    // Output Saturday
    console.log("Saturday");
    break;
  // end cases
  default:
    // Output Invalid day
    console.log("Invalid day");
}

//Step 3: for loop break*************************************************************
for (let i = 0; i < 5; i++) {
  // Print i
  console.log(i);
  if (i == 3) {
    // Break the loop
    break;
  }
}

// while loop
let v = 0;
while (v <= 5) {
  // Print i
  console.log(v);
  v++;
  if (v == 3) {
    // break  the loop
    break;
  }
}

//Do...While Loop

let k = 1;
do {
  // Print i i+;
  console.log(k);
  k++;
  if (k == 3) {
    // break  the loop
    break;
  }
} while (k <= 5);




//Step 4: Loops continue******************************************************
// for loop
for (let i = 0; i < 5; i++) {
    //if i is equal to 3, skip it 
    if (i == 3) {
      
      continue;
    }
    console.log(i);
  }
  
  // while loop
  let l = 0;
  while (l <= 5) {
      l++;
      //if l is equal to 3, skip it
      if (l == 3) {
        continue;
      }
      // Print l
    console.log(l);
  }
  

    //Do...While Loop
    let n = 0;
    do {
      n++;
      if (n == 3) {
        //if n is equal to 3, skip it
        continue;
      }
      // Print n
      console.log(n);
    } while (n <= 5);
  



//Step 5: Scope***************************************************************

let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
    // Access globalVar and localVar inside the function
}
  
scopeExample();
console.log(globalVar);
console.log(localVar); //will result na error outside the scope of the function





function scopeExample2() {
    let localVar = "I'm local!";
    // Access globalVar and localVar inside the function
    return localVar;
}
  


let localVarReturnValue=scopeExample2();
console.log(globalVar);
console.log(localVarReturnValue);