//  Write a function isEven(n) that returns true/false without using the modulo operator.

// function div(n) {
//   if ((n & 1) === 0) return true;
//   if ((n & 1) !== 0) return false;
//   if ((n%2) ===0) return true;
//   if ((n%2) !==0) return false;
// }
// console.log(div(2));

// => Given an object let student = { name: "Om", marks: [78, 85, 92] };, write code to add an average property computed from marks.

// let student = { name: "Om", marks: [78, 85, 92] };

// let newstudent = student.marks.reduce((accu,val) =>{
//     return (accu + val)
// },0)

// console.log(newstudent);

// let marks = student.marks.reduce((accu ,val)=>{
//     return (accu + val )
// })
// console.log(marks);

//  ==> Print all numbers from 1 to 50 that are divisible by 3 or 5, but not both.

// function abcd() {
//     for (let i  = 1 ; i <=50 ; i++){
//         if ((i%3 ===0) && (i %5 ===0)) {
//             continue ;
//         }
//         if ((i%3 ===0) || (i %5 ===0)) {
//            console.log(i);
//         }
//     }
// }
//     abcd()

//     function divi() {

//     for (let i = 1; i <= 50; i++) {

//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             continue;
//         }

//         if ((i % 3 === 0) || (i % 5 === 0)) {
//             console.log(i);
//         }
//     }
// }

// divi();

// for (let i = 1 ; i <=50 ; i++){
//     if ((i%3 ===0) && (i%5 ===0)) {
//         continue ;
//     }

//   if ((i % 3 === 0) || (i % 5 === 0)) {
//     console.log(i);
// }
// }

// function divi() {
//     for(let i = 1; i <=50 ; i++){
//             if ((i%3) ===0 && (i%5) ===0) {
//                 continue ;
//             }

//             if ((i%3) ===0 || (i%5) === 0) {
//                 console.log(i);

//             }
//     }
// }
// divi()

// Write a function reverseString(str) that reverses a string without using .reverse().

// function reverseString(str){
//     let reverse = " "
//     for(let i = str.length -1 ; i >=0 ; i--){
//         reverse += str[i]
//     }
//     return reverse ;
// }
// let name = "om"
// console.log(reverseString(name));

// console.log(reverseString("moirah"));

// function reversestring() {
//     let name = 'MOIRAH' ;
//     let reverse  = '' ;
//         for(let i = name.length-1 ;i>=0 ; i--){
//             reverse += name[i]
//         }
//         return reverse ;
// }
// let someting_name = 'somnath' ;
// console.log(reversestring(someting_name));

// Given let nums = [5, 12, 8, 130, 44];, write code (using a loop, not .filter) to return only numbers greater than 10.

// let nums = [5, 12, 8, 130, 44];
// function gater() {
//     for(let i = 0 ; i < nums.lenth ; i++){
//         if (nums[i]>10){
//             console.log(i);

//         }
//     }
//     return gater()
// }
// function reversestring(str) {
//     let reverse = '' ;
//     for(let i = str.length -1 ; i >=0 ; i--){
//         reverse += str[i]
//     }
//     return reverse
// }
// console.log(reversestring("hariom"));
// let name = "soniya"
// console.log(reversestring(name));

// 📚 RIGHT ANGLE TRIANGLE
// * PATTERN

// Write a function gradeLabel(score) that returns "A", "B", "C", or "F" using if/else based on score ranges (>=90, >=75, >=50, else).

// ====> EARLY RETURN PATTERN

// function gradeLabel(score){

// }

// Write a function mergeObjects(obj1, obj2) that merges two objects, with obj2's values overriding obj1's on key conflicts — without using the spread operator.

// Redo the "numbers greater than 10" filtering task, but this time using .filter().

// let num =  [5, 12, 8, 130, 44]

// let newarr = num.filter((val)=>{
//     if (val>=10) return "50 value"
// })
// console.log(newarr);

//=> Given let scores = [45, 67, 89, 23, 90, 12];, use .map() to create a new array labeling each as "pass" (>=40) or "fail".

// let scores = [45, 67, 89, 23, 90, 12];

// let newarray = scores.map((val)=>{
//   if (val>=40) return "pass"
//   else  return "fail"
// })

// console.log(newarray);

//=> Write a nested loop that prints a right-angled triangle of * for a given height n.

// function triangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// triangle(5);

// function rightangletriangle(n) {
//     for(let i = 1 ; i<=n ; i++){
//         let row = "" ;

//        for(let j = 1 ; j<=i ; j++){
//             row += "*"
//        }
//         console.log(row);

//     }
// }

// rightangletriangle(5)
// => Write a function isPalindrome(str) that checks if a string reads the same backward (ignore case).

//  function isPalindrome(str){

// //  }

// // => Write a function countVowels(str) that counts vowels in a string.

//  function countVowels(str){
//     let name = "HARIOM" ;

//  }

// // => Write a function celsiusToFahrenheit(c) and test it for 0, 37, 100.

