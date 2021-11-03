function  returnFirstTwoDrivers(bannanas) { // bannaas is our parameter for the array we are going to accept
    // bannanas = ["Jack", "nick", "James"]
    return bannanas.slice(0,2)
    
};

// returnFirstTwoDrivers(["Jack", "nick", "James"])

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
};

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 
    

function createFareMultiplier(x) { // x = 2
    return function fareMultiplier(fare) {
       return fare * x
    }
}


const fareDoubler =  createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, func){
//    if (func === returnFirstTwoDrivers){
//        return returnFirstTwoDrivers(drivers)
//    }
    return func(drivers)
}