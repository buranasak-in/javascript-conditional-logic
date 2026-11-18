//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let result;
//Start coding here
result = lightBulbStatus == "On"
            ? "Light bulb is On."
            : lightBulbStatus == "Off"
            ? "Light bulb is Off."
            : lightBulbStatus == "Broken"
            ? "Light bulb is Broken."
            : "Please choose the correct input (On/Off/Broken)";

console.log(result);