// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// idInvalidCardCompanies() starts here.

let invalidCardCompanies = [];

function idInvalidCardCompanies(invalidCards) {

  for(let p = 0; p < invalidCards.length; p++) {
    if(invalidCards[p][0] == 3 && !invalidCardCompanies.includes("Amex")) {
     invalidCardCompanies.push("Amex");
    } else if(invalidCards[p][0] == 4 && !invalidCardCompanies.includes("Visa")) {
     invalidCardCompanies.push("Visa");
    } else if(invalidCards[p][0] == 5 && !invalidCardCompanies.includes("Mastercard")) {
     invalidCardCompanies.push("Mastercard");
    } else if(invalidCards[p][0] == 6 && !invalidCardCompanies.includes("Discover")) {
     invalidCardCompanies.push("Discover");
    } else if(!invalidCards[p][0] == 3 && !invalidCards[p][0] == 4 && !invalidCards[p][0] == 5 && !invalidCards[p][0] == 6 && !invalidCardCompanies.includes("Company not found!")){
      invalidCardCompanies.push("Company not found");
    }
  }
}

// idInvalidCardCompanies() ends here.


// findInvalidCards() starts here.

let _invalidCards = [];

function findInvalidCards(nestedArr) {
  let x = 0;
  while(x < nestedArr.length) {
    console.log(`Creditcard no. ${x + 1}: ${validateCred(nestedArr[x])}`);
    if(!validateCred(nestedArr[x])) {
      _invalidCards.push(nestedArr[x]);
    }
    x++;
  }
}




// findInvalidCards() ends here.

// validateCred(arr) starts here.
function validateCred(arr) {
const _evenNumCheck = numToCheck => {
  if(numToCheck % 2 == 0) {
    return true;
  } else {
    return false;
  }
} 
  const _ccNumReverse = arr.reverse(); 
  let _ccNumConverted = [];
  for (let i = 0; i < arr.length; i++) {
    if(_evenNumCheck(i)) {
      _ccNumConverted.push(_ccNumReverse[i]); 
    } else if(!_evenNumCheck(i)) {
      let _numConvert = _ccNumReverse[i] * 2;     
        if(_numConvert > 9) {
          let _convertedNum = _numConvert - 9;
          _ccNumConverted.push(_convertedNum);
        } else if(_numConvert <= 9) {
          _ccNumConverted.push(_numConvert);
        } else {
          console.log("ERROR! Please check loop in validateCred!")
        }
    } else {
      return "ERROR! The value doesn't seem to be a number!"
    }
  }
  let _sumOfCcNumConverted = _ccNumConverted.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, 0);
  if(_sumOfCcNumConverted % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

// validateCred(arr) ends here.

// Testbox 

findInvalidCards(batch);
console.log("");
console.log("Invalid Creditcard numbers:")
console.log(_invalidCards);
console.log("");
idInvalidCardCompanies(_invalidCards);
console.log("Companies that have mailed out cards with invalid numbers:");
console.log(invalidCardCompanies);
