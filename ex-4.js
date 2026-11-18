//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let result;

//Start coding here
switch (lightBulbStatus) {
    case "On":
        result = "Light bulb is On.";
        break;
    case "Off":
        result = "Light bulb is Off.";
        break;
    case "Broken":
        result = "Light bulb is Broken."
        break;
    default:
        result = "Please choose the correct input (On/Off/Broken)";
        break;
};

console.log(result);
