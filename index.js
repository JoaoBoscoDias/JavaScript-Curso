
console.log('Hello World');
// window.alert('Hello World');

//TESTE 1

let name = "João";  //strings
let age = 16 + 1;   //numbers
let student = true; //boolean

console.log("Olá, meu nome é",name);
console.log("Eu tenho",age, "anos");
console.log("Estudando:", student);

document.getElementById("p1").innerHTML = "Hello, my name is " + name;
document.getElementById("p2").innerHTML = "I have " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

//TESTE 2

let students = 20;
let extraStudents = students % 3;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

console.log("Extra Students: ",extraStudents);
console.log("Students: ",students);