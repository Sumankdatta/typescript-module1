{

    //ternary operator||optional chaining||nullish coalescing operator

    const age: number = 20;

    if (age >= 18) {
        // console.log('adult');
    } else {
        // console.log("not adult");
    }

    const isAdult = age >= 33 ? 'adult' : 'not adult';
    console.log(isAdult);

    //nullish coalescing operator ?? is only use for null and undefined
    //null/undefined------->decision making

    const isAuthenticated = null
    const result1 = isAuthenticated ?? 'Guest';
    //turnery operator
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log({ result1 }, { result2 });


    //optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user: User = {
        name: 'suman',
        address: {
            city: 'Barishal',
            road: '120 sadar road',
            presentAddress: 'Barashal twon'
        }

    }

    const permanentAddress = user?.address?.permanentAddress ?? "Barishal sadar"
    console.log({ permanentAddress });


}