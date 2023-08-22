//challenge4

//step 1

let fiveNumbers = [1, 2, 3, 4, 5];
console.log(fiveNumbers);

let personalInfo = {
    name: "jane smith",
    age: 30,
    height: "178 cm",
    location: "los angeles",
    nationality: "canadian"
};
console.log(personalInfo);


//step 2 

let nextThreeNumbers = [6, 7, 8];
let allNumbers =
    fiveNumbers.concat(nextThreeNumbers);
//concat: used to combine the fivenumbers array with the nextthreenumbers.
console.log(nextThreeNumbers);
console.log(allNumbers);

let additionalInfo = {
    occupation: "software enginner",
    hobby: "reading",
    education: "bachelor's degree",
};
console.log(additionalInfo);

let fullInfo = { ...personalInfo, ...additionalInfo };
console.log(fullInfo);


//step 3

let [firstNum, secondNum, thridNum] = fiveNumbers;

let { name, location, nationality } = personalInfo;
