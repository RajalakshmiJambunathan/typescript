// let n=5;

// for(i=1; i<=n; i++){
//     let row ="";

// for(j=1;j<=n-1;j++){
//     row +="*";
// }
// for(k=1;k<=i;k++){
//      row +="* ";
// } 

// console.log(row);
// }
// let n:number = 5;
// for(let i:number = 1; i <= n; i++){
//     let row:string = "";
//     for(let j:number = 1; j <= n-1; j++){
//         row += "*  ";
//     }
//     for(let k:number = 1; k <= 1; k++){
//         row += "*";
//     }
//    console.log(row);    
// }

const n:number = 7;
for(let i:number = 1; i <= n; i++){
    let row:string = "";
    for(let j:number = 1; j <= i; j++){
        row += " ";
        
    }
    for(let k:number = 1; k <= i; k++){
        row += "* ";
    }
    console.log(row); 
}
