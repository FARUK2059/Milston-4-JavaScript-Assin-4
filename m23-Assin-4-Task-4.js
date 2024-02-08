                            /******** > Assinment Task 4 < *******/ 


/**
 *** Problem 04 : Make A Great Password
 
 ********** ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
            { name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
 **/ 

// const allobj = { name: "KolimUddin", birthYear : 2000, siteName: "Google" } ;
// const allobj = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
const allobj = { name: "toky", birthYear: 200, siteName: "Facebook" };

function password(obj) {
    // console.log(obj);

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

const passwordDitails = password(allobj);
console.log('The save password is :', passwordDitails);
