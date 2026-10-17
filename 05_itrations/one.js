for(let i=0; i<10; i++){
  if(i===5){
    // console.log(`${i} is equal to 5`);
    
  }
    // console.log(i);
}


for(let i=0; i<10; i++){
  // console.log(`inner loop: value of i = ${i}`);
  
   for(let j=0; j<10; j++){
    // console.log(`inner loop: value of j = ${j} and inner loop: value of i = ${i}`);
   }
}

//Table 1 to 10;
for(let i=1; i<=10; i++){
  // console.log(`inner loop: value of i = ${i}`);
  
   for(let j=1; j<=10; j++){
    // console.log(`${i}*${j} = ${i*j}`);
   }  
}

// break and Continue

for(let i=1; i<=10; i++){
  if(i===5){
    // console.log(`${i} is detected`);
    break;
  }
  // console.log(i);
}


// Continue statement
for(let i=1; i<=10; i++){
  if(i===5){
    console.log(`${i} is detected`);
    continue;
  }
  console.log(i);
}