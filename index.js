// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}


const returnLastTwoDrivers = function(drivers) {
  return  drivers = drivers.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplication){
   return function(multiply) {
    return multiplication * multiply;
  }
}


const fareDoubler = function(fareTwice) {
  return fareTwice * 2;

}


const fareTripler = function(fareDouble) {
  return fareDouble * 3;

}


const selectDifferentDrivers = function(arrayOfDrivers, theDrivers) {
  return theDrivers(arrayOfDrivers);


}
