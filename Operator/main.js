 let numValue1 = 10;
 let numValue2 = 20;

 console.log(numValue1 + numValue2);

 let strValue1 = "Nahid";
 let strValue2 = "Fatima";

 //mutable string(Bad practice)
 let result = strValue1 +" "+strValue2;
 console.log(result);

 //string Interplaotion
 //immutable string (good practice)

console.log(`${strValue1} - ${strValue2}`);

let template = `

<h1>   
     ${strValue1}  ${strValue2}
</h1>

`;

document.write(template);


let template1 = `
   
 ${strValue1}  ${strValue2}

`;

document.write(template1);

let numValue3 = 2;
let numValue4 = 5;
let numValue5 = 3;

result= numValue3 + numValue4 * numValue5;
console.log(result);//17

result= (numValue3 + numValue4) * numValue5;
console.log(result);//21

let strValue6 ="4"

result= numValue3 + numValue4 + strValue6 + numValue5;//string concatenation
console.log(result);//743

result = Math.pow(numValue5,2);
console.log(result);

result = numValue5 **2;
console.log(result);






















