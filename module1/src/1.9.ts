{
    // type alias

    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string
    }

    const student1: Student = {
        name: 'suman',
        age: 20,
        gender: 'female',
        contactNo: '01700000',
        address: 'Barishal'
    }
    const student2: Student = {
        name: 'kumar',
        age: 20,
        gender: 'male',
        address: 'dhaka'
    }
    const student3: Student = {
        name: 'datta',
        age: 20,
        gender: 'female',
        address: 'ctgn'
    }


    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'suman';
    const isAdmin: IsAdmin = false;

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2

}