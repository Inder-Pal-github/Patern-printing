//       *
//    *  *  *
//  *  *  *  *
// *  *  *  *  *
//  *  *  *  *
//    *  *  *
//      *  *
//        *

// to print diamond pattern combine HILL pattern and REVERSE HILL patterns

// up-hill pattern
let n = 5;

for(let i=1;i<n;i++){ // decrease one row to avoid two rows with same no. of stars,
                        //  so change i<=n to i<n
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
// reverse-hill pattern

for(let i=1;i<=n;i++){
    let bag = "";

    // increasing spaces triangle
    for(let j=1;j<i;j++){
        bag += "  ";
    } 
    // decreasing spaces triangle
    for(let j=i;j<=n;j++){
        bag += "* ";
    }
    // decreasing spaces triangle
    for(let j=i;j<n;j++){
        bag += "* ";
    }
    console.log(bag);
}