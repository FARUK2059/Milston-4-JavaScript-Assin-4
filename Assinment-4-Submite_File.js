/******** > Assinment Task 1 < *******/ 

function calculateMoney(ticketSale){
    if (ticketSale < 0){
        return 'Invalid Number';
    }

    const ticketPrice = 120;
    const gardCost = 500;
    const stafeCost = 8 * 50 ;

    const income = ticketPrice * ticketSale;
    const totalCost = gardCost + stafeCost;

    const dailyIncom = income - totalCost;

    return dailyIncom;
}

/******** > Assinment Task 2 < *******/ 

function checkName(name){
    // console.log(name);
    if (typeof name !== 'String'){
        return 'invalid';
    }

    const lastGoodWordCapital = [ 'A', 'Y', 'I', 'E', 'O', 'U', 'W' ];
    const lastGoodWordSmall = [ 'a', 'y', 'i', 'e', 'o', 'u', 'w' ];
    const lastWord = name.charAt(name.length-1);

    if(lastGoodWordCapital.includes(lastWord) || lastGoodWordSmall.includes(lastWord)){
        return ' "Good Name" ';
    }

    else {
        return ' "Bad Name" ';
    } 
}

/******** > Assinment Task 3 < *******/ 

function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return ' "invalid Array" ';
    }

    const onlyNumber = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            onlyNumber.push(array[i]);
        }
    }
    return onlyNumber;
 }

/******** > Assinment Task 4 < *******/ 

function password(obj) {

    const {name, birthYear, siteName} = obj;
    if (!name || !birthYear || !siteName) {
        return "invalid";
    }

    if (typeof birthYear !== 'number' || birthYear.toString().length !== 4) {
        return "invalid";
    }

    const outputPassword = siteName + '#' + name + '@' + birthYear;
    return outputPassword;
}

/******** > Assinment Task 5 < *******/ 

function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid inpute';
    }

    let totalIncome = 0;
    for (const payment of arr){
        totalIncome += payment;

        if(payment >= 3000){
            const tax = payment * 0.20 ;
            totalIncome = totalIncome - tax ;
        } 
    }

    const savings = totalIncome - livingCost;

    if (savings <= 0) {
        return 'earn more';
    }
    return savings;
    }