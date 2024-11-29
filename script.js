//Tarjetas de ejercicios DOM
function crearTarjetas(titulo, contenido) {

    const contenedorTarjeta = document.createElement('div');
    contenedorTarjeta.classList.add('card');
    contenedorTarjeta.style.maxWidth = '18rem';

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    const tituloTarjeta = document.createElement('h4');
    tituloTarjeta.classList.add('card-title');
    tituloTarjeta.textContent = titulo;

    const textoTarjeta = document.createElement('p');
    textoTarjeta.classList.add('card-text');
    textoTarjeta.textContent = contenido;

    cuerpoTarjeta.appendChild(tituloTarjeta);
    cuerpoTarjeta.appendChild(textoTarjeta);

    contenedorTarjeta.appendChild(cuerpoTarjeta);

    const container = document.getElementById('cards-container');
    container.appendChild(contenedorTarjeta);
}



//Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
let sentence = (arr.join(" "));
console.log("Exercise 1:" + sentence);
crearTarjetas("Exercise 1:", sentence);

/*Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

const numbers = [1, 2, 4, 5];
const doubles = numbers.map(function (num) {
    return num * 2;
});
let resultado = ('original array: ' + JSON.stringify(numbers) + '\t' + 'array.map: ' + JSON.stringify(doubles));
console.log("Exercise 2:" + resultado);
crearTarjetas("Exercise 2:", resultado);


/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/
const data = [1, 2, 3, 4];
const calculator = () => {
    const add = data.reduce((acc, curr) => acc + curr, 0);
    const product = data.reduce((acc, curr) => acc * curr, 1);
    return { add, product };
}
const result = calculator(data);

console.log(`Exercise 3: The sum is ${result.add}. The product is ${result.product}.`);
crearTarjetas("Exercise 3: ", (` The sum is ${result.add}. The product is ${result.product}.`));

//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let sameCourses = student1Courses.filter(course => student2Courses.includes(course)); {
    if (sameCourses.length > 0) {
        console.log("Exercise 4: Same Courses : ", sameCourses);
    }
}
crearTarjetas("Exercise 4:", sameCourses);


/*For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log("Exercise 5: "+ people);

people.splice(1, 1);
people.splice(2, 1);
people.splice(1, 1);
people.unshift("Luis");
people.push("Gaby");

for (let index = 0; index < people.length; index++) {
    const name = people[index];
    if (name === "Maria") {
        const indexOf = people.indexOf("Maria");
        console.log("Maria is in the index " + indexOf);
        break;
    }
}
crearTarjetas("Exercise 5: ", people);


//Bubble Algorithm Exercise # 6 Write a function that performs the bubble algorithm. 
//Input [3, 6, 12, 5, 100, 1] Output [1, 3, 5, 6, 12, 100]

function bubble(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let cambioLugar = array[j];
                array[j] = array[j + 1];
                array[j + 1] = cambioLugar;
            }
        }

    }
    return array;
}
console.log(bubble([3, 6, 12, 5, 100, 1]));
crearTarjetas("Exercise 6: ", JSON.stringify(bubble([3, 6, 12, 5, 100, 1])));