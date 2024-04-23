//// anonymous
let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

let person = {
    name: "Zeeshan",    //string
    exp: 10,            //number
    age: 56
}
teacher = person;
console.log(teacher);

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}
console.log(student);

let std2 : Student = {
    name : "Asif",
    age : 10
}
console.log(std2);
std2.name="Khalid";
std2.age=50;
console.log(std2);
/*
type Animal = {
    sound: string,
    gender: number

}
type Animal2 = {
    sound: string,
    gender: number

}
type Animal3 = {
    sound: string,
    gender: number

}
type Animal4 = {
    sound: string,
    gender: number

}
type Animal5 = {
    sound: string,
    gender: number

}
type Animal6 = {
    sound: string,
    gender: number

}
type Animal7 = {
    sound: string,
    gender: number

}
type Animal8 = {
    sound: string,
    gender: number

}
type Animal9 = {
    sound: string,
    gender: number

}
type Animal10 = {
    sound: string,
    gender: number

}

type Dog = Animal;
type Cat = Animal;
type Fish = Animal;
type Bird = Animal;
type Cow = Animal;
type Horse = Animal;
type Snake = Animal;
type Lizard = Animal;
type Turtle = Animal;

let Dog: Animal = {
    sound : "Bark",
    gender : 1
}
*/