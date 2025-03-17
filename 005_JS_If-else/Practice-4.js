const isInvite = false;
const money = 700;
if(isInvite === true){
  if(money > 1000){
    console.log('I will go to his birthday with gift');
  }
  else{
    console.log('I will go empty-handed');
  }
}
else{
  console.log('I kick him from my friend list');
}

// ****************************

const isEatTea = false;
const isBiscuit = false;
if(isEatTea === true){
  if(isBiscuit === true){
   console.log('Tea and Biscuit ready')
  }
  else{
  console.log('tea ready')
  }
}
else{
  console.log('you should recite the Holy Quran');
}

// *******************************

const accountActive = true;
const isPremium = true;
if(accountActive === true){
  if(isPremium === true){
    console.log('you can watch premium features');
  }
  else{
    console.log('you can watch free version');
  }
}
else{
  console.log('you cannot watch anything');
}

// ******************************

const isFood = false;
const isAppWorking = false;
if(isFood === true){
  console.log('you should hit the food');
}
else{
  if(isAppWorking === true){
    console.log('you should order the food');
  }
  else{
    console.log('I am sayem');
  }
}

// ************************

const partyMember = 300;
const withGift = true;
if(partyMember > 100){
  if(withGift === true){
    console.log('Lets party all night');
  }
  else{
     console.log('I will party with myself');
  }
}
else{
  console.log('I dont arrange party');
}
