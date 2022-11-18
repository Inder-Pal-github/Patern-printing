let n = 5;

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// here spaces are decreasing  and * are increasing

for(let i=0;i<n;i++){
    let bag = "";
    // we need to add spaces and then * REVERSE THE LOOP
    for(let j=n-1;j>=0;j--){
        // we need to add * when i >= j;
        // console.log(i,j);
        if( i>=j) bag += "* ";
        else bag += "  ";
    }
    // console.log(bag);
}

// * * * * *
// * * * *
// * * *
// * *
// *

for(let i=0;i<n;i++){
    let bag = "";
    for(let j=0;j<n;j++){
        if(i<=j) bag += "* ";
        else bag += "  ";
    }
    // console.log(bag);
}
// JOINING both of above given this output
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *


//         *
//       * *
//     * * *
//   * * * *
// * * * * *
for(let i=1;i<=n;i++){
    let bag = "";
    for(let j=i;j<=n-1;j++){
         bag+="  ";
    }
    for(let j=1;j<=i;j++){
        bag += "* ";
    }
    // console.log(bag);
}

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
// increasing spaces and decreasing stars

for(let i=1;i<=n;i++){
    let bag = "";
    for(let j=1;j<i;j++){
        bag += "  ";
    }
    for(let j=i;j<=n;j++){
        bag += "* ";
    }
    console.log(bag);
}