let n = 5;


// right-angle trinagle
// *            row = 1, column = 1 
// * *          row = 2, column = 2
// * * *        row = 3, column = 3
// * * * * *    row = 4, column = 4
// * * * * * *  row = 5, column = 5
for(let i=0;i<n;i++){
    let bag = "";
    for(let j=0;j<=i;j++){  // j<=i  ; important
        bag += "* "
    }
    console.log(bag);
}

// =================================

// decreasing right-angle trinalge
// * * * * *
// * * * *
// * * *
// * *
// *
for(let i=0;i<n;i++){
    let bag = "";
    for(let j=i;j<n;j++){  // here we need to decrease by one row, 
        bag += "* "        // so if i change start condition j = i,
    }                      // it will decrease one on each row
    console.log(bag);
}

// =============================
// joining both trinagle and decrease one row for the second triangle
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for(let i=0;i<n;i++){
    let bag = "";
    for(let j=0;j<=i;j++){
        bag += "* "
    }
    console.log(bag);
}
for(let i=0;i<n-1;i++){
    let bag = "";
    for(let j=i;j<n-1;j++){
        bag += "* "        
    }                      
    console.log(bag);
}