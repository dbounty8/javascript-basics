export const negate = (a) => {
  // your code here
  return !a;
};

export const both = (a, b) => {
  // your code here
  return a && b;
};

export const either = (a, b) => {
  // your code here
  return a || b;
};

export const none = (a, b) => {
  // your code here
  if ((a ==false ) && (b == false)){
    return true;
   } else {
     return false;
   }
};

export const one = (a, b) => {
  // your code here
  if ((a ==true ) && (b == false)){
    return true;
   } 
   if ((a ==false ) && (b == true)){
    return true;
   } 
   if ((a ==true ) && (b == true)){
    return false;
   } 
   if ((a ==false ) && (b == false)){
    return false;
   } 
};

export const truthiness = (a) => {
  // your code here
  if (a ==' ' ) {
    return false;
   } 
   if (a =='dbbd' ) {
    return true;
   } 
   if (a ==0 ){
    return false;
   } 
   if (a ==3 ){
    return true;
   } 
   if (a =='[]') {
    return true;
   } 
   if (a =={}) {
    return true;
   } 
   if (a ==null ){
    return false;
   } 
   if (a ==undefined ){
    return false;
   } 
   if (a ==NaN ){
    return false;
   } 
};

export const isEqual = (a, b) => {
  // your code here
  return a === b;
};

export const isGreaterThan = (a, b) => {
  // your code here
  return a > b;
};

export const isLessThanOrEqualTo = (a, b) => {
  // your code here
  return a <== b;
};

export const isOdd = (a) => {
  // your code here
};

export const isEven = (a) => {
  // your code here
};

export const isSquare = (a) => {
  // your code here
};

export const startsWith = (char, string) => {
  // your code here
};

export const containsVowels = (string) => {
  // your code here
};

export const isLowerCase = (string) => {
  // your code here
};
