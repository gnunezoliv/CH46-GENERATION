//Copy the code below into your workspace:
console.log("Exercise 1:");
let arr = ["This", "is", "a", "sentence."];
function printOutString() {

console.log(arr.join(" ")); 
}
printOutString();
//Complete the function to print out the string: This is a sentence.


/*Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/
console.log("Exercise 2:");
const numbers = [1, 2, 4, 5];
const doubles = numbers.map(function (num) {
  return num * 2;
});

console.log("original array: " + numbers);
console.log("after array.map: " + doubles);

/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/
console.log("Exercise 3: ");

const data = [1, 2, 3, 4];
const calculator = ( ) =>{

const add = data.reduce((acc, curr) => acc + curr, 0);
const product = data.reduce((acc, curr) => acc * curr, 1);
return {add, product};
}
const result = calculator(data); 

console.log(`The sum is ${result.add}. The product is ${result.product}.`);

//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
console.log("Exercise 4:");
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let sameCourses = student1Courses.filter(course => student2Courses.includes(course)); {
    if (sameCourses.length > 0) {
        console.log("Same Courses :", sameCourses);
    }
}


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


/*let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
people.splice(1, 1);
people.splice(2, 1);
people.splice(1, 1);
people.unshift("Luis");
people.push("Gaby");
//console.log(people);
for (const name of people ){
    if( name === "Maria") 
        console.log("Maria is in the " + indexOf )
    break;
  }

  const indexOf = people.indexOf("Maria");*/

  console.log("Exercise 5: ");

  let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
  console.log(people);
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
  
  
  
