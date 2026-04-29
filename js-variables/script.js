function one(){
    const fistName= "Noemi";
    const favoriteColor =  "blue";

    let location = "Compostela, Nayarit";
    let mood = "good";

    console.log(`Hello my name is ${fistName} and my favorite color is ${favoriteColor}`);
    console.log(`My location is ${location} and I'm ${mood}`);
    mood = "happy";
    console.log(`I'm ${mood}`);
}
function two(){
    const companyName = "Telcel"
    const foundingYear = 1989;
    const isActive = true;
    let fundingAmount;

    console.log("company name: ", companyName);
    console.log("Founding Year: ", foundingYear);
    console.log("Is Active: ", isActive);
    console.log("Funding Amount:", fundingAmount);
}
function three(){
    let initialNumber = 8;
    const n = initialNumber;
    initialNumber = initialNumber * 2;
    initialNumber = initialNumber + 10;
    initialNumber = initialNumber / 2;
    initialNumber = initialNumber - n;

    alert(initialNumber);
}
