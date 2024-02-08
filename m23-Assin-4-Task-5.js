                            /******** > Assinment Task 5 < *******/ 


/**
 *** Problem 05 : Monthly Savings of a Freelancer
 
 ********** ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।
 **/ 


 function monthlySavings(arr, livingCost) {
    // console.log(arr, livingCost);

    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid inpute';
    }
    let totalIncome = 0;
    for (const payment of arr){
        totalIncome += payment;

        if(payment >= 3000){
            const tax = payment * 0.20 ;
            // console.log(tax);
            totalIncome = totalIncome - tax ;
            // console.log(totalIncome);
        } 
    }
    const savings = totalIncome - livingCost;
    if (savings <= 0) {
        return 'earn more';
    }

    return savings;
    
    }
    
//  const totalSavings = monthlySavings([1000, 2000, 3000], 5400);
 const totalSavings = monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
//  const totalSavings = monthlySavings([ 900 , 2700 , 3400] , 10000);
//  const totalSavings = monthlySavings(100, [ 900 , 2700 , 3400] );
 console.log('Monthly savings is :', totalSavings);

