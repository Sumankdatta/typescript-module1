{
    //learn spread operator

    const bro1: string[] = ['pijush', 'pintu', 'sourav'];
    const bros2: string[] = ['kanti', 'krishna', 'trinoy']

    bro1.push(...bros2)

    const mentor1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentor2 = {
        prisma: 'Sadik',
        next: 'Suman',
        cloud: 'julfiker'
    }

    const mentorList = {
        ...mentor1,
        ...mentor2
    }


    //learn rest operator

    const greetFriends = (...friends: string[]) => {

        friends.forEach((friend: string) => console.log(`hi${friend}`))

    }
    greetFriends('suman', 'datt', 'kumar')



}