//learning function
//normal function
//arrow function

function add(num1: number, num2: number): number {
    return num1 + num2
}
add(2, 2)


//arrow function 

const addArrow = (num1: number, num2: number): number => num1 + num2

const poorUser = {
    name: "suman",
    balance: 0,
    addBalance(balance: number): string {
        return `This is my balance ${this.balance + balance}`
    }
}


const arr: number[] = [1, 2, 3];

const newArr: number[] = arr.map((elem: number): number => elem * elem)