                            /******** > Assinment Task 2 < *******/ 


/**
 ***  Problem-02: Good Name , Bad Name

 ********** এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যে টা একটা স্ট্রি ং
ইনপুট নে বে । এবং ফাংশন টি চে ক করে দে খবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রি টার্ন
করবে “Good Name” আর নাম টি খারাপ হলে রি টার্ন করবে “Bad Name” |
 **/ 

// const name = ['Salman', 'RAFEE', 'Jhankar', 199, '[“Rashed”]']

function checkName(name){
    // console.log(name);
    if (typeof name !== 'string'){
        return 'invalid';
    }

    const lastGoodWordCapital = [ 'A', 'Y', 'I', 'E', 'O', 'U', 'W' ];
    const lastGoodWordSmall = [ 'a', 'y', 'i', 'e', 'o', 'u', 'w' ];
    const lastWord = name.charAt(name.length-1);
    // console.log(lastWord);

    if(lastGoodWordCapital.includes(lastWord) || lastGoodWordSmall.includes(lastWord)){
        return ' "Good Name" ';
    }
    else {
        return ' "Bad Name" ';
    }
    
}

// const nameType = checkName('Sulman');
const nameType = checkName('RAFEE');
console.log("The name Type  is :", nameType);


