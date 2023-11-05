{

    const user = {
        id: 23,
        name: {
            firstName: 'suman',
            middleName: 'kumar',
            lastName: 'Datta'
        },
        contactNo: '0171000000',
        address: 'Barishal'
    }

    const { contactNo, name: { middleName: midName } } = user;

    const bestFriends = ['suman', 'kumar', 'datta', 'pijush', 'pintu']
    const [a, b, c, ...rest] = bestFriends;
}