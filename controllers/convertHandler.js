/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  var unitNames = new Map([ 
    ['l', 'litres'],
    ['kg', 'kilograms'],
    ['km', 'kilometers'],
    ['gal', 'gallons'],
    ['lbs', 'pounds'],
    ['mi', 'miles']
  ]);
  
  this.getNum = function(input) {
    var result;
    var filteredInput = input.toString().replace(/[^0-9./]/g, "");
    if (filteredInput == "") {
      result = 1;
    } else {   
       if (filteredInput.match("/")) {
            var temp = filteredInput.split("/");
         if (temp.length == 2) {
            result = temp[0] / temp[1];
         } else {
            result = "invalid number"; 
         }
      } else {
        result = filteredInput; 
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var elements = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var filteredInput = input.replace(/[^a-z]/gi, "");
    if (elements.includes(filteredInput)) {
      result = filteredInput;
    } else {
      result = "invalid unit"; 
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "l";
        break;
      case "lbs":
        result = "kg";
        break;
      case "mi":
        result = "km";
        break;
      case "l":
        result = "gal";
        break;
      case "kg":
        result = "lbs";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    result = unitNames.get(unit.toLowerCase());
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = "invalid unit";
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    if (initNum === "invalid number" && initUnit === "invalid unit") {
      result = "invalid number and unit";
    } else if (initNum === "invalid number") {
      result = "invalid number";  
    } else if (initUnit === "invalid unit") {
      result = "invalid unit";    
    } else {
      result = JSON.parse("{\"initNum\": " + initNum + ", \"initUnit\": \"" + initUnit + "\", \"returnNum\": " + parseFloat(returnNum).toFixed(5) + ", \"returnUnit\": \"" + returnUnit + "\", \"string\": \"" + initNum + " " + this.spellOutUnit(initUnit) + " converts to " + parseFloat(returnNum).toFixed(5) + " " + this.spellOutUnit(returnUnit) + "\"}");
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
