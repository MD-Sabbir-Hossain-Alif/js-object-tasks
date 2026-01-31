//* Task - 1 Solution:
//  TODO:  Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]); //Output: #daa520


/* ------------------------------ Task Divider ------------------------------ */
//* Task - 2 Solution:
//  TODO:  For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car["passenger capacity"] = 5;
console.log(car);


/* ------------------------------ Task Divider ------------------------------ */
//* Task - 3 Solution:
//  TODO:  Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks); // Output: 30


/* ------------------------------ Task Divider ------------------------------ */
//* Task - 4 Solution:
//  TODO:  Count the number of properties.

const studentDetails = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(studentDetails).length); // Output: 30


/* ------------------------------ Task Divider ------------------------------ */
//* Task - 5 Solution:
//  TODO:  Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

console.log("KEY        | VALUE           | TYPE");
console.log("-------------------------------------"); // here i use chatgpt for nice looking but i understand this method(or all syntax of code)
for (let key in myObject) {
    const value = myObject[key];
    console.log(
        `${key.padEnd(10)} | ${String(value).padEnd(15)} | ${typeof value}`
    );
}
