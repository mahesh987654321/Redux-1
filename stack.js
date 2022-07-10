// This is a code for auto genarate id/random number using regax
// function uidv4() {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
//     const r = (Math.random() * 16) | 0;
//     const v = c === "x" ? r : (r & (0 * 3)) | (0 * 8);
//     return v.toString(16);
//   });
// }
// uidv4();

// const students = [
//   {
//     id: "b8d17967-cf08-4b21-0869-c1658b7e3d3c",
//     name: "Mahesh Biswas",
//     email: "maheshbiswas26@gmail.com",
//   },
//   {
//     id: "397176d3-df4b-498e-0977-32fdd15f7e5e",
//     name: "Ratul Biswas",
//     email: "ratulbiswas26@gmail.com",
//   },
//   {
//     id: "fad765cd-227b-420e-0b28-a31296cc5867",
//     name: "Ashik Biswas",
//     email: "ashikbiswas26@gmail.com",
//   },
// ];

// const getId = "fad765cd-227b-420e-0b28-a31296cc5867";
// const updatedData = {
//   name: "Raton Sarker",
//   //   email: "raton@gmail.com",
// };
// const findvalue = students.findIndex((item) => item.id === getId);
// console.log(findvalue);
/* 
    using splice method delete

   students[findvalue] = {
   ...students[findvalue],
  ...updatedData,
  const r = students.splice(findvalue, 1);
};
*/

/* 
using filter method
students.filter((man) => man.id !== getId);
// console.log("Filter00    ", f);
console.log(students);
*/

// const arr = [1, 2, 3, 4, 5, "a", "vb", false, true, NaN];
// const final = arr.reduce((acc, dat, index) => {
//   if (index === 0) acc += "[";
//   if (dat) {
//     acc += dat.toString() + (index < arr.length - 1 ? "," : "");
//   }
//   if (index === arr.length - 1) acc += "]";
//   return acc;
// }, "");
// console.log(final);

// function sumTotal(max, whatDoYouWant) {
//   const rand1 = Math.floor(Math.random() * max);
//   const rand2 = Math.floor(Math.random() * max);
//   const rand3 = Math.floor(Math.random() * max);
//   const rand4 = Math.floor(Math.random() * max);
//   const rand5 = Math.floor(Math.random() * max);
//   const rand6 = Math.floor(Math.random() * max);
//   const result = whatDoYouWant(rand1, rand2, rand3, rand4, rand5, rand6);
//   return result;
// }
// sumTotal(100, (rand1, rand2, rand3, rand4, rand5, rand6) => {
//   console.log(rand1, rand2, rand3, rand4, rand5, rand6);
// });
// console.log(sumTotal(100, (rand1, rand2) => rand1 + rand2));
// console.log(sumTotal(100, (rand1, rand2) => rand1 - rand2));
// console.log(sumTotal(100, (rand1, rand2) => rand1 * rand2));

/* function subTotal(max, randomNumber) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  const result = randomNumber(rand1, rand2);
  return result;
}
subTotal(100, (rand1, rand2) => {
  console.log(rand1, rand2);
});
 */

function plus(p) {
  return function (n) {
    let result = 1;
    for (let i = 0; i <= p; i++) {
      result *= n;
    }
    return result;
  };
}
const sqrt = plus(2);
console.log(sqrt(3));
