let billAmount = 1000;
// billAmount chosen by user
let numOfDiners = 4;
// Number of Diners chosen by user
let qualityOfService = 'serviceGreat';
// Service quality chosen by user
let tip;
let tipRating;


function calcTip() {
  if (qualityOfService === 'serviceGreat') {
    tip = .2; // If the service is great, give a 20% tip
  } else if (qualityOfService === 'serviceGood') {
    tip = .15; // If the service is good, give a 15% tip
  } else if (qualityOfService === 'serviceTerrible') {
    tip = .10; // If the service is terrible, give a 10% tip
  }
}

calcTip(); 
let totalTip = tip * billAmount; /* The total tip is equal to the service quality determined by the user. The tip percentage is then multiplied by the billamount. */ 
let totalTipPerPerson = totalTip / numOfDiners; /* The total tip per person is determined by the totaltip divided by the number of diners */ 
let totalBill = totalTip + billAmount; /* The total bill is determined by the totaltip plus the bill amount. */ 
let billPerPerson = totalBill / numOfDiners; /* The total bill per person is determined by the total bill divided by the number of diners. */ 

console.log('The total tip per person is: $' + totalTipPerPerson);
console.log('Your total tip is: $' + totalTip);
console.log('Your total bill including tip is: $' + totalBill);
console.log('The bill per person is: $' + billPerPerson);

