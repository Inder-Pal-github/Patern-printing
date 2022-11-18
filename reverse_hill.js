// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 


// 1) first is increasing spaces trinangle
// 2) second is decreasing *'s trinagle
// 3) third is decreasing *'s trinagle

let n = 5;

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