//       *    
//     *   * 
//   *   *   *
// *   *   *   *


// 1) decreasing triangle of spaces 
// 2) increasing triangle of *'s
// 3) increasing triangle of *'s
// 4) decreasing triangle of spaces


let n = 5;

for(let i=1;i<=n;i++){

    let bag = "";

    // loop to print decreasing triangle of spaces
    for(let j=i;j<n;j++){  // decreament in one of row increase i=1,j(1-4), i=2,j(2-4)....
        bag += "  ";
    }
    // loop to print increasing *'s pattern
    for(let j=1;j<=i;j++){
        bag += "* ";
    }
    // loop to print increasing *'s pattern
    for(let j=1;j<i;j++){
        bag += "* ";
    }

    console.log(bag);
}

