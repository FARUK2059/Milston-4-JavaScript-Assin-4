                            /******** > Assinment Task 1 < *******/ 


/**
 *** Problem-01 : Help The Zoo Manager 
 
 ********** ি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে । 
 **/ 


function calculateMoney(ticketSale){
    // console.log(ticketSale);

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

// const dailyIncom = calculateMoney(10);
// const dailyIncom = calculateMoney(1055);
// const dailyIncom = calculateMoney(93);
// const dailyIncom = calculateMoney(-130);
// const dailyIncom = calculateMoney(-25);
const dailyIncom = calculateMoney(25);

console.log('Mr. Baker daily income is :', dailyIncom);