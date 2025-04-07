for(let i = 1; i <= 30; i++){
  console.log(i);
  if(i > 14){
   break;
  }
}

// *****************************

for(let i = 1; i <= 40; i++){
  if(i % 7 == 0){
    continue;
  }
  console.log(i);
}

// *******************************

for(let i = 1; i <= 15; i++){
  if(i == 9){
    continue;
  }
  console.log(i);
}

// ****************************

for(let i = 1; i <= 12; i++){
  if(i == 12){
    continue;
  }
  console.log(i);
}

// ********************************

for(let i = 1; i <= 25; i++){
  if(i % 3 == 0){
    continue;
  }
  console.log(i);
}

// *******************************

for(let i = 91; i <= 120; i++){
  console.log(i);
  if(i % 10 == 0){
    break;
  }
} 