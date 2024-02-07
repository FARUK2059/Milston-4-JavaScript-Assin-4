                            /******** > Assinment Task 3 < *******/ 


/**
 *** Problem 03 : Virus in my Array 
 
 ********** ফাংশন টি ইনপুট নে বে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনে র হতে পারে ।
 **/ 


const allTypeData = [ NaN, 1, 12, 0, -1, undefined ];
// const allTypeData = {num: [ 1 , 2 , 3 ]};
// const allTypeData = [ 1, null, undefined, 18, -19, NaN, "12", [1,2], {ob: "lala"} ]
// const allTypeData = [ "1", {num: 2}, NaN ]
// const allTypeData = [ 1, 2, -3 ]


 function deleteInvalids(array) {
    // console.log(array);

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

 const numbersOfArray = deleteInvalids(allTypeData);
 console.log('Numbers of array is :', numbersOfArray);