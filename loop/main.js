//Loop

let arrayObj = [1,3,5,"nahid",5,7,true];

//using for loop
for(let counter=0; counter <= arrayObj.length-1; counter++){
    console.log(arrayObj[counter]);
}

//using for each

for (var data of arrayObj ){
    console.log(data);//print element
}

for(var data in arrayObj){
    console.log(data);//print position
} 

//for and if statement
let arrayObj1 = [1,2,3,4,5,6,7,8,9,10];

for(let data1 of arrayObj1){

    if(data1 % 2===0){
     
        console.log(data1);
    }
}

//Break statement in loop
for(let data2 of arrayObj1){
    
    if(data2 ===5){
        break;
    }
    console.log(data2);
}

// continue statement

for(let data3 of arrayObj1){
    if(data3 === 5){
        continue;   
    }
    console.log(data3);
}