const airportData = require('airport-data')

/////////////////////////////////////////
//////////////////way 1//////////////////
/////////////////////////////////////////
for (ii = 0; ii < airportData.length; ii++){
    const airport = airportData[ii]

    if (airport.iata === "CTU"){
        console.log(airport)
    }
}
console.log("...........................")



/////////////////////////////////////////
//////////////////way 2//////////////////
/////////////////////////////////////////
var CTUdata = airportData.find(function(element){
    return element.iata ==="CTU";
    // if(element.iata==="CTU"){
    //     return element
    // }
})
console.log(CTUdata)
console.log('..........................')



/////////////////////////////////////////
//////////////////way 2//////////////////
/////////////////////////////////////////
const ctu2 = airportData.find(a => a.iata === 'CTU');
console.log(ctu2)
