const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(driverArray.length-2, driverArray.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){return fare * integer};
}

function fareDoubler(fare){
    const multiplierFunction = createFareMultiplier(2);
    return multiplierFunction(fare);
}

function fareTripler(fare){
    const multiplierFunction = createFareMultiplier(3);
    return multiplierFunction(fare);
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    if (fn == returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (fn == returnLastTwoDrivers) {
      return returnLastTwoDrivers(arrayOfDrivers);
    }
  }