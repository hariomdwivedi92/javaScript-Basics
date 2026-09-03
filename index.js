// // 9. Write a simple grading function: given a score, return grade A (90+), B (80–89), C (70–79), D (60–69), F (below 60), using if-else if chains.

// function grade(score){
//     if(score >= 90 && score <= 100) return "A" ;
//     if(score >= 80 && score <= 89) return "B" ;
//     if(score >= 70 && score <= 79) return "C" ;
//     if(score >= 60 && score <= 69) return "D" ;
//     if(score >= 0 && score <= 59) return "F" ;
//    else return "enter 1-100 value only"
// }

// console.log(grade(109));

// // 19. Given a day number (1–7), use a switch statement to print the day name, with a default case for invalid input.

// let day = 7 ;
// switch (day) {
//     case 1:
//         console.log("sunday");

//         break;
//     case 2:
//         console.log("monday");

//         break;
//     case 3:
//         console.log("tuesday");

//         break;
//     case 4:
//         console.log("wednesday");

//         break;
//     case 5:
//         console.log("thursday");

//         break;
//     case 6:
//         console.log("friday");

//         break;
//     case 7:
//         console.log("satday");

//         break;

//     default:
//         break;
// }

// // 18. Using bitwise/logical operators, check if a number is odd without using the modulo operator (hint: `&`).

// rock paper and scissor

// function RockPaper(User_Gesture , Computer_Gesture){

// if (User_Gesture === Computer_Gesture) return "draw";

// if(User_Gesture === "rock" && Computer_Gesture === "paper") return "Computer WIN" ;

// if(User_Gesture === "paper" && Computer_Gesture === "scissor") return "Computer WIN" ;

// if(User_Gesture === "scissor" && Computer_Gesture === "rock") return "Computer WIN" ;

// else return "user WIN"

// }
// console.log(RockPaper("paper" , "paper"));

// # loops
//  For loop
// 100-1
// for (let i = 100 ; i>=1 ; i--){
//     console.log(i);
// }

// let i = 101
// while(i<=32){

//     // console.log(i);

//     i++ ;
// }

// for (let i =1 ; i<11 ; i++){
//     console.log(i);
// }

// for (let i =20 ; i>=1;i--){
//     console.log(i);
// }

// let i = 10 ;
// while(i>=1){
//     console.log(i);
//     i--
// }

// even number

// for (let i =1 ; i<21 ; i++){
//     if (i%2 === 0){
//         console.log(i);

//     }
// }

// let i = 1 ;
// while(i<21){
//  if(i%2===0){
//     console.log(i);

//  }
//     i++
// }

// let i = 1 ;
// while(i<16){
//     if (i%2 ===1){
//         console.log(i);
//     }
//     i++
// }

// for (let i=1 ; i<11 ; i++){
//     console.log(5*i);
// }

// for(let i =1 ; i<51 ; i++){
//     if(i%3===0){
//         console.log(i);

//     }
// }

// let value = prompt("give me a number")

// for (let i = 1 ; i<=value;i++){
//     if(i%2===0){
//       console.log(`${i} is even`);
//     }
//     else{
//       console.log(`${i} is ood`);
//     }
// }

// let const {}
// var global or function

// data types
// primitive or referecne
// premitive copy value dete hai
// reference oroginal value dete hai
// let name = {
// /
// }

// function hello (hilao){

// }

// let log = [foonow ,fowfwoifm, nofiiwnfow,]

// tDz

// console.log(a);

// let a = 112
// let a ;
// a =12;
// console.log(a);

// let a = 12;

// data types
// string null undev bboleew nan symobl,
// array obj function

// let a = 12;
// let b = +"12"
// console.log(a+b);
// ===
// !==
// && || !
// ?:
// +-++--

// let a = ["ram","sham"]
// console.log(a instanceof Array );

// let day = 5
// switch (day) {
//     case 1:
//         console.log("sunday");

//         break;
//     case 5:
//         console.log("protesror day");

//         break;

//     default:
//         break;
// }

// function RPS(user,computer){
//     if (user === computer) return "draw";
//     else return "Haat be"
// }

// console.log(RPS("rock","ro"));
// => Loops
//

// let const {}
// var funtion or global

// data types string null undefined symbol  origninal value
// referecne data tyoes give the copy value

// let obj = {
//     name:"om",
//     age:23
// }

// let newobj ={...obj} ;
// newobj.name = "omemememe"

// console.log(newobj);
// console.log(obj);

// let a ;
// a =12;
// console.log(a);

// let a =12

// dynamic typing

// let name = "omomo"
// let ommo = Number(name)
// console.log(typeof ommo);
// console.log(ommo);

// opetators +-/*** */
// logical && || !
// ternary operators condition ? true condition : false condition
// uranay operators +- ++ --
// asigmnemt == ==== !==
// arithmetic

// control flow

// if else if else
//  switch (key) {
//     case value:

//         break;

//     default:
//         break;
//  }

// function greet (logic){
//     if (logic ===1 ) return "check"
//     else return "invalid"
// }
// console.log(greet(55));

// => for loops  for (start , end,change)
// =>
//  let age = 12    START
//  while(END){
//     // code
//     change
// }
// start
// do{
//  change
// }
// while(end)

// =>
// let const {} var function = > global
// data type => primitive or reference => primitive => string null undetidned etc ...... yeh orignial value
// => reference wale dete hai copy value
// hoisting let a ;
//
// {temporary dead zone}
// a = 12
// let a = [a,a,a,a,a]
// let b = {a:b, b:b,}
// function greet (lol){}
// operator
// aritmetic +-/*
// logical && || !
// ternary ?:
// uranry +-++ --
// agignmetn =+ =- =* =/
// comparision == === != !==
// => CONTROL FLOW
// if else if else
// if () else if () else ()
// let marks = 22;
// if (marks > 22){
// console.log("you can eat pussy");
// }
// else {
//     console.log("pussy is not for you");

// }
//  else if {}
// => CONDITIONALS 20 QUESTIONS SOLVE
// asignment += -= *=  /=
// logical && || !
// ternary operator condtion ? t: f
// comparision == === != !==

// let const {}

// var global

//=> Hoisting......

// let a ;

// {Temporary Dead Zone....}

// a=12

// data-types strning null undefliend , symbol , bigint , boolean ,
// {primitive dete hai original value}
// array obj fuct n {reference dete hai copy value... }

// let aaa = [AudioData,ddd,admamdamdamdamdmddm]
// let arr = {
//     a:aa,
//     aaa:aaaa
// }

// function greet (value){

// }

// let a =22
// a= "gggg"
// a= true

// let a = +"12";
// let b = 12
// console.log(a+b);

// operators + - / *
// comparision == === != !==
// assignment  = += -= *= /=
// logical && || !
// urinary - + ++ --
// ternery condition ? one condi : two condi
// control flow  (if else if else) ;

// if (codntin){
//     console.log();

// }

// else if (other condi ){
//  console.log();

// }
// else {kuch nai wali condi
//     console.log();

// }

// switch (key) {
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;

//     default:
//         break;
// }

// early return pattern
// function name (letover,lerovers){

//     if(letover === lerovers) return "lola chatba"

//     return "Not equal";

// }
// console.log(name("letover","lerovers"));

// function name(user, comp) {
//     if (user === comp) return "drop beat";
//     if ( user === "some" && comp === "raat") return "raat bitayega"
// }

// console.log(name("user", "user"));
// console.log(name("some", "raat"));

// loops ===>

// for (start end change)

// start
// while(end){
//     // code
//     // i++
// }

// start
// do{
// code
// change
// }
// while(end)

// for while do while

// 1-100 for and while

// for (let i = 1 ; i<101 ; i++){
//     console.log(i);

// }
// l

// let i = 1;

// while (i < 101) {
//     if (i === 32) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }

// for (start end chage )

// let start
// while (end){

// change
// }

// let var const {} var funvtion global

//  ==> Loops........

// 1-100

// for and while loop
// for (let i=1 ; i<101 ; i++){
//     console.log(i);

// }

// let i = 1 ;
// while (i<101){

//     console.log(i);

//     i++;
// }

// let i =10 ;
// while (i>=1){
// console.log(i);
// i--
// }

// for (let i = 1 ; i<21;i++){
//     if (i%2===0){
//         console.log(i);
//     }
// }

// let i = 1
// while (i<=20){
//     if (i%2===0){
//         console.log(i);

//     }
//     i++
// }

// let i = 1 ;
// while(i<=15){
//     if (i%2!==0){
//         console.log(i);

//     }
//     i++
// }

// let i = 1
// while(i<=10){

//     console.log(5*i);

//     i++
// }

// ==> some 10-20 mix questions

// ## Loop from 1 to 100 and print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for both, else the number.

// let i = 1 ;
// while (i<=100){
//      if (i%3===0) {
//         console.log("Buzz");

//      }
//     if (i%5===0) {
//         console.log("FizzBuzz");
//     }
//     else {"fizz"}
//     i++
// }
//## Loop from 1 to 50: print the number if it's divisible by 3 OR 7, but NOT both.

// let const {}
// var function  scope hai yeh....
// sstring boolean null undefined symbol bigint primitive dete hai original value
// array obj function reference dete hai copy value

// for (start , end , change);

// start let i = 1
// while (end , i<101){
//  console.log(i)
//  change i++ ;
// }

// for (let i = 1; i<101;i++){

//     if(i%2!==0){
//         console.log(i);

//     }

// }

// if(90){lo(a)}else if (20){c}else {Pass}
// let day = sonday
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// function monkey(magic){
// }
// console.log(monkey(magic));

// function dance() {

//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");

// }
// dance();
// dance();
// dance();

// function dance (){
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
// }
// // dance();

// let fnc = function() {
//     console.log("new Dance");
//     console.log("new Dance");
//     console.log("new Dance");
//     console.log("new Dance");

// }
// fnc()

// let funcc= ()=>{

//     console.log("vategunehuiyaaa");
//     console.log("vategunehuiyaaa");

// }
// funcc()

// let shoul = function(dancerName){
//  console.log(`${dancerName} is dancing`);
// }
// console.log(shoul("ravi"));
// console.log(shoul("Arjun Rampla "));

// let func11 = function() {
//     console.log("sonamamama");

// }
// func11()

// let funk = ()=> {
//     console.log("telam");

// }
// funk()

// function nameds (void1){
//     console.log(`${void1} is Dancing`);

// }

// nameds("sonam")
// nameds("lodam")

// function delecreation.

// =>   function expression
// let fun = function (){
//     console.log("chole bhature");

// }
// fun()

// fat arrow function

// let fonk = () => {
//     console.log("lengda bhaata choda");
// }

// fonk()

// function (){

// }
// let fun = function (v1) {
//     console.log(`${v1} Nach Raha Hai`);

// }
// fun("Ghoda")
// fun("gadha")

// function addition(value1 , value2) {
//     console.log(value1 + value2);

// }

// console.log(1 + 2);
// console.log(4 + 2);

// function minus( v1 , v2) {
//     console.log(v1 - v2);

// }

// minus(2,3)
// let fun = ()=>{
//     console.log("lomda");

// }
// fun()

// let addition = function (v1 , v2){
//     console.log(v1 - v2);

// }
// addition(6,1)

// let functi = function(v1) {
//     console.log(`${v1} hamesha nisharo par nachega`);

// }

// console.log(functi("harsh"));
// console.log(functi('kaluwa'));

// let func = function (v1 = 0 , v2 =0) {
//     console.log(v1 + v2);

// }

// func(1,9)

// let fun = function(a,b,c,...v1) {
//     console.log(a,b,c,v1);

// }
// fun(1,2,3,4,5,6,7,8,9,10)

// function asdf(a,b,c,...v1) {
//     console.log(a,b,c,v1);
// }
// asdf(1,2,3,4,5,6)

// function addition(v1 = 0 , v2 = 0) {
//     console.log(v1 + v2 );

// }

// addition(9,2)

// function adddd(...v1) {
//     console.log(v1);

// }
// adddd(1,2,2,3,3,4,4,4,4)

// => Deafult
// function additon(v1 =0 ,v2 = 0) {
//     console.log(v1 + v2);
// }

// additon(1,1)
//
// => rest
// function additionn(a,b,...v1) {
//     console.log(a,b,v1);

// }
// additionn(1,2,3,4,4,4,4,4,4,4)

// for (start , end , change i++)
// let i = 1
//     while(i<201){
//         console.log(i);
//         i++
//     }

// let deal =function (){
//     console.log('hola');

// }
// console.log(deal());

// let funk = ()=>{
//     console.log("singham");

// }

// funk();

// let Addition = function(val1 , val2) {
//     console.log(val1 + val2);
// }

// console.log(Addition(2,3));

// let subt = function(val1 =0  , val2 =0  ) {
//     console.log(val2 - val1);
// }
// subt(7,9)

// let dance = function(v1) {
//     console.log(`${v1} nach rha hai`);

// }
// dance("harsh")
// dance("gudiya")

// let arr = [1,2,3,4,5,6]
// let newarr = {...arr}
// arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(newarr);
// console.log(arr);

// let obj = {
//     name : "om" ,
//     place : "call",
// }
// let newobj={...obj}
// obj = {name : "omeshrha"}

// console.log(obj);
// console.log(newobj);

// let func = function(...val1) {
//     console.log(val1);

// }
// func(1,2,3,4,5,6,7,8,9,10)

// let backend = function(...val1) {
//     console.log(val1);

// }
// backend(1,2,3,4,5,6,7,8,9,10)

// function name (val1 , val2){
//     console.log(val1 + val2);

// }
// name(1,2)

// function niwsinemaide(a,b,...value1) {
//     console.log(value1);

// }

// niwsinemaide(1,2,3,4,5,6,7,8,9,10)

// function namesss(BND) {
//     return sipderman;
// }
//  function abcd() {
//     return "BND" ;
//  }

// let spiderman = abcd()
// console.log(spiderman);

// function marvel() {

//     return "brand new day"
// }

// let launch = marvel()
// console.log(launch);

// function multiply(val1,val2) {
//     return val1*val2 ;
// }

// let output = multiply(3 , 6)

// console.log(output);

// Return the Square of a Number 🟢

// function square(val1) {
//     return(val1*val1)
// }

// let ans = square(9)
// console.log(ans);

// function addtion(val  , val2) {
//     return(val*val2)
// }

// let out = addtion(2,4)
// console.log(out);

// let age = 12;
// let const {}
// var function name(params) {

// }
// let obj = {
//     a:"robi",
// }

// console.log(obj instanceof Object);

// arithmetic
// logical
// comparison
// ternorary
// urnary
// assignment

// Control Flow
// if(){}else if (){}else{}
// let day = "monday" ;
// switch (day) {
//     case "monday":
//         console.log("2027 auguest own GT650");
//         break;
//     // case monday:
//     //     console.log("2027 auguest own GT650");
//     //     break;
//     // case monday:
//     //     console.log("2027 auguest own GT650");
//     //     break;

//     default:
//         break;
// }

//  function dance(val1 , val2) {
//     return(val1*val2)
//  }

//  let out = dance(6,6)
//  console.log(out);

// let funct = function(params) {

// }

// left fuock = ()=>{
//     lognfnonon
// }

// function dame(...val) {
//     console.log(val );

// }

// dame(1,3,3,3,3,3,3,)

// function name(params) {

// }

// let lom = function(params) {

// }

// function add(v1 , v2) {
//     return(v1 * v2)
// }

// let omfo = add(2,2)
// console.log(omfo);

// function sojan(multip) {
//     multip()
// }

// sojan(function() {
//     console.log("yoo");

// })

// function simnan(val1) {
//     val1()
// }
// simnan(function() {
//     console.log("comcha");

// })

// first class function

// function abcd(v1) {
//     v1()
// }

// abcd(function() {
//     console.log("chomu");

// })

// function add(val1 = 0, value2 = 0) {
//     console.log(val1);

// }
// add(1,2)

// let du = function(val) {
//     val()
// }
// du(function() {
//     console.log("this was FCF");

// })

// let Go = function(goon) {
//     goon()
// }
// Go(function(){
//     console.log("gooning start");

// })

// first class function => ko hum variable ki trah use kar skte hai

// let name = function(v1) {
//     v1()
// }

// name(function() {
//     console.log(`areee dada`);

// })

// function filess() {
//     return function() {
//         console.log("epstine files");

//     }
// }

// filess()()

// higher order function

// // function (functon){
// reutrn function(){

// }}

// adadad()()

// let a = 12
// function ad(params) {
//    a++

// }
// ad()

// ==> IIFE IMEDIATELY INVOCKED FUNCTION EXPRESSION
// (function (){
//     console.log("ban gya iife");

// })()

// // ==>

//     function wk(ok) {
//         let a = 12;
//         console.log(a);

//     }
//     wk()

// (function (){
//     console.log("chuma");

// })()
// adcd()
// function adcd(val) {
//     console.log("val");

// }

// function abcd(v1) {
//     console.log("om");

// }
// abcd()

// function abcd(v1) {
//     return(v1*v1)
// }
// let output = abcd(2)
// console.log(output);

// let fonk = ()=>{
//     console.log("tope");

// }
// fonk()

// function milipy(v1=2,v2=2) {
//     console.log(v1*v2);

// }
// milipy()

// function abcd(v1 , v2) {
//     return(v1*v2)
// }
// let out = abcd(9,9)
// console.log(out);

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// function bhaiya(bolo){
//     console.log("vastegunahuiyaaaa");

// }

// function chacha(bhaiya) {
//     bhaiya()
// }
// chacha(bhaiya)

// function addition(val,val2) {
//     console.log(val + val2);
// }

// function result(addition) {
//     result()
// }
// addition(1,1)

// function sub(v1 = 0,v2 =0) {
//     console.log(v2-v1);

// }
// function output(sub) {
//     output()
// }
// sub(2,9)

// function are first clss citizen

// let a = function (){
//     console.log('lolo');

// }
// a()

// function abcd(val){
//  val()
// }
// abcd(function(){
//     console.log('lola');

// })

// function markage(age) {
//     if(age>16) return "about to lolapola"
// }
// console.log(markage(17));

// function achek(age) {
//     undefined(age>12224) return "chole bhature"
// }

// function abcd(v,v2) {
//     console.log(v2-v);

// }

// function result(abcd) {
//     result()
// }

// abcd(4,2)

// let add = function(v,v1) {
//     return(v+v1)
// }

// function output(add){
//     output()
// }
// console.log(add(1,1));

// let add = function(a,b) {
//     return(a+b)
// }

// function output(add) {
//     output(add)
// }
// console.log(add(2,2));

// function learning() {
//     return function (newFun) {
//         console.log('hoala');

//     }
// }
// let log = learning();
// log()

// function multiply(v1) {
//     return function(v2) {
//         return v1*v2;

//     }
// }
// let ans = multiply(5)
// console.log(ans());

// function abcd(v1) {

//     let a = 12 ;
//     return function() {
//     console.log(a);
//     }
// }

// (function name() {
//     console.log('hola');

// })()

// abcd()

// let abcd =function () {
//     console.log("nameifognegoe");

// }

// function lomda(val) {
//     val()
// }

// lomda(function(){
//     console.log('hola');

// })
// lomda()

// bmi

// function bmi(weight , height) {
//     return weight/(height*height) ;
// }
// let result = bmi(59,1.7)
// console.log(result . toFixed(2));

// function adbcd(v1) {
//     let a = 12;
//     console.log(a);

// }
// adbcd()

// let arr =  [ 1,2,3,4,5,6,7,81]

// // arr.push(7)
// // arr.pop() last hat jata hai

// // arr.shift()
// // arr.unshift (99)
// let newarr = arr.slice(3,6)
// console.log(newarr);

// console.log(arr);

// let arr = [2,4,6,8,10,12,14,16,18,20]

// assignment operator = += -= *= /=
// logical = && || !
// ternery constion ? true cond : flase cont
// arithmerntic = +-*/
// uranry = + - ++ --
// comparison === != !== ==

// CONDITION control flow

// if (condtion){
//     console.log();

// } else if (ndcondtion){
//     console.log();

// }
// else {}
// let a = 12
// switch (a) {
//     case 13:
//         console.log('somday');

//         break;
//     case 13:
//         console.log('somday');

//         break;
//     case 12:
//         console.log('kudi ka kuda');

//         break;

//     default:
//         break;
// }

// let a = 12 ;
// function value(some) {
//     if (some>11) return "shi ja rhe ho"
//     else return "bhaag ja yha se"
// }

// console.log(value(18));

// for (let i = 1; i < 101; i++) {
//     console.log(i);

// }
// while (condition) {

// }

// do {

// } while (condition);

// function abcd(v=0  , v2=0) {
//     console.log(v+ v2);

// }
// console.log(abcd(1,2));

// let a = function(...v1) {
//     console.log(v1);

// }
// a(1,1,1,1,)

// function abcd(v , v1) {
//     return(v+v1)
// }
// let out = abcd(1,1)
// console.log(out);

// function abcd(v,v1) {
//     return (v+v1)
// }

// let sum = abcd(1,1)
// console.log(sum);

// let arr = [ 1,2,3,4,5]
//
// arr.push(6)
// arr.pop()
// arr.shift()
// // arr.unshift(9)
// arr[3] = 677979797
// arr.reverse()
// arr.splice(1,2)

// let newarr = arr.slice(1,3)

// console.log(newarr);

// let fruits = ['mango' ,'banana','apple','kiwi','anaar']

// let newfruit = fruits.slice(2, 4  )
// console.log(newfruit);

// let arr = [1,2,3,4,5,6,7,8,9,10 ,"shit "]

// arr[9] = "rajhash hotel is the gross"
// console.log(arr[9]);

// let arr = [1,2,3,4,5,"ram","janm"]

// arr.splice(2,5)
// console.log(arr);

// let arr = [1,2,3,4,'hari','OM'];
// // arr.splice(2,3);
// // let newarr = arr.slice(2,2)
// // console.log(newarr);

// let newarr = arr.slice(1,5)
// console.log(newarr);
// console.log(arr);

// let arr = [1,2,3,4,5,6,7]
// let newarr = arr.slice(1,4)
// console.log(newarr);

// arr.reverse()

// let arr = [1,3,5,2,7,9,8,10,99]
// arr.sort(function (a ,b) {
//     // return b-a decending
//     // return a-b aecending

// })
// console.log(arr);

// splice current value ko change kar ke de deta hai
// arr.splice(2,7)
// console.log(arr);

// slice

// let newarr = arr.slice(2,8)
// console.log(newarr);

// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.reverse()
// console.log(arr);

// let arr = [3,4,5,7,2,8,2,10,12,14]

// arr.splice(2,0 ,"ramayan ")
// console.log(arr);

// arr.splice(2,6)
// console.log(arr);

// let arr = [3,4,5,7,2,8,2,10,12,14]

// let out = arr.sort(function (a,b){
//     return b-a
// })
// console.log(out);

// let arr = [ 2,3,4,5,6,7]
// arr.forEach(function (arr) {
//     console.log(arr + 5)
// })

// let arr = [ 1,2,4,54,59]

// let newarr = arr.map(function(val) {
//     if (val>25) return "sahi hai" ;
//     else return "nobde"
// })

// console.log(newarr);

// let ans = arr.map(function (x){
//     return (6)
// })
// console.log(ans);

// let arr = [ 2,3,4,5,8]
// let ans = arr.map(function (val) {
//     if (val >3) return "ok"
//     else return "not ok"
// })

// console.log(ans);

// let arr = [ 9,4,6,2,7,8,9,99]
// arr.sort(function (a,b){
//     return a-b
// })
// console.log(arr);

// let arr = [ 9,4,6,2,7,8,9,99] ;
// let out = arr.forEach(function(x){
//     console.log(x * 2);

// })
// console.log(out);

// let arr = [ 2,4,6,8,10]
// let arrr = arr.map(function(val){
//   return  val * 2
// })

// console.log(arrr);

// let arr = [2,4,6,8,10,11]
// let out = arr.map(function (val) {
//     if (val%2===0) return "good"
//     else return "not good"
// })
// console.log(out);

// let arr = [ 2,4,6,8,10,11]
// let out = arr.filter(function (val) {
//     return (val>5)
// })
// console.log(out);

// let arr = [2,3,4,5,6,7,8,9,20]
// let newarr = arr.filter(function (val) {
//     if (val%2!==0) return true;
//     else return false;
// })
// console.log(newarr);

// let arr = [ 1,2,3,4,5]
// let newarr = arr.reduce(function(acc , val){
//         return acc + val
// },0)

// let arr = [1,2,3,4,"ravi"]
// let newarr = arr.reduce(function(x,y){
//     return x+y
// })
// console.log(newarr);

// let arr = [
//     {id:1 , class :1},
//     {id:12 , class :13},
//     {id:112 , class :2}
// ]
// let newarr = arr.find(function (v) {
//     return v.class===2;
// })
// console.log(newarr);

// let arr = [
//     {class :12 , sec : "a"},
//     {class :13 , sec : "b"},
//     {class :14 , sec : "c"}
// ]

// let newarr = arr.find(function (val) {
//     return val.sec==="c"
// })
// console.log(newarr);

// let arr = [2,4,6,8]
// let nash = arr.some(function (val) {
//    return val > 4
// })
// console.log(nash);

//  let arr = [2,4,6,8]
// let[a,b,,c] = arr

// let arr = ["kela" , "seb","santra"]
// // arr[1] = "tinda"
// console.log(arr[1]);

// let arr = [1,2,3,4]
// let newarr = arr.map(function (val) {
//     console.log(val * val);

// })

// let arr = [5,12,8,20,3]
// let newarr = arr.sort(function (a,b) {
//     return a - b;
// })
// console.log(arr);

// let ans = newarr.filter(function (val) {
//     return val >10
// })
// console.log(ans);

// let arr = [5,12,8,20,3]
// let sum = arr.reduce( (acc , val) =>{
//     return acc + val
// },0)
// console.log(sum);

// let arr = [2,3,4,5,6,9]

// let ans = arr.find(val => {
//     return val>4
// })
// console.log(ans);

// let arr = [2,3,4,5,6,9]

// let ans = arr.some(val =>{
//     return val >4
// })
// console.log(ans);

// let arr =[1,2,3,4,5]
// arr.splice(2,0,"99")
// let newarr = arr.slice(1,3)

// let newarr = arr.forEach (function(a , b) {
//     // console.log(a * b +3);
//     return (a+3)

// })

// let newarr = arr.map(val => {
//     return (val*4)
// })

// let newarr = arr.filter(val => {
//     return(val>2)
// })

// let arr = [2,4,6,8,10,12,14,19,17]

// let newarr = arr.filter(val=>{
//     return (val%2===0)
//     return (val%2!==0)
// })

// let newarr = arr.reduce((x,val) =>{
//     return (x+val)
// },0)
// console.log(newarr);

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let v = arr.find(val=>{
//     return val>5
// })
// let newarr = arr.reduce((x,val)=>{
//     return (x+val)
// },0)
// console.log(newarr);

// let arr = [
//     {name : "hariom" , add : "a-254" },
//     {name2 : "krsna" , add : "a-324" },
//     {name3 : "suraj" , add : "a-374" },
// ]

// let newarr = arr.find(val=>{
//     return val.name==="hariom"
// })
//console.log(v);

// let marks = [22,44,66,4,234,24]

// // let newarr = marks.some(val=>{
// //     return val >40
// // })
// // console.log(newarr);

// let newarr = marks.every(val=>{
//     return val>45
// })
// console.log(newarr);

// let name = {
//     names : "rahul",
//     age : 12,
//     class : "B-tech",
//     sec : "A",
//     roll_no : "24Cs30"
// }

// name.block = "computing"

// let shout = "names"

// console.log(name[shout]);

// let user = {
//     name: "hariom" ,
//     isloggesin : true,
//     address :{
//         real : "a-254 Chungi no-2" ,
//         pin : 110044 ,
//         location :{
//             leti: 333.3333,
//             longtitude: 987.6533,
//         },
//     },
// }

// console.log(user?.address?.location?.langti);

// let {leti,longt} = user.address.location

// let data = {
//     name : "hariom" ,
//     class : "B-TECH" ,
//     sec : "A" ,
//     rollno : "24cs30",
//     location : {
//             address : "A-254 chungi no-2",
//             pin : 110044,
//     coordinates :{
//         longti :12345.3333,
//         leti :493049.3023
//     }   ,
//     },
// }

// let {longti ,leti} = data.location.coordinates

// let data = {
//   name: "hariom",
//   class: "Btech",
//   section: "A",
//   roll_no: "24CS30",

//   location: {
//     city: "delhi",
//     pincode: 110044,
//   school : {
//     Sname : "lingays vidyapeeth"
//   }
//   },
// };

// let Dname = "name"

// data.location.school.Sname

// let { "Sname" : School  } = data.location.school

// let data = {
//   name: "hariom",
//   class: "Btech",
//   section: "A",
//   roll_no: "24CS30",

//   location: {
//     city: "delhi",
//     pincode: 110044,
//   school : {
//     Sname : "lingays vidyapeeth"
//   }
//   },
// };

// console.log(Object.entries(data));

// let final = {
//     name : "hariom",
//     log: "is log in",
//     user : "make sens" ,
//     location : {
//         city  : "mumbai" ,
//         locate : 2222.2222,
//     }
// }

// console.log(Object.entries(final));

// let data = {
//     name : "mamama",
//     class : "A",
//     log : "logged in"
// }

// let data2 = Object.assign({sec :"A"},data)

// console.log(data2);

// let final = {
//     name : "hariom",
//     log: "is log in",
//     user : "make sens" ,
//     location : {
//         city  : "mumbai" ,
//         locate : 2222.2222,
//     }
// }

// let {"name" : realname} = final

// let final2 = {...final}
// final.location.city = "delhi"

// let final2 = JSON.parse(JSON.stringify(final))

// final.location.city = "guhati"

// let course = {
//     title : "javscript turotial" ,
//     duration : "4-Weeks"
// };

// console.log(Object.entries(course).forEach(val=>{
//     console.log(val[0] + ": " + val[1]);
// }));

// let a;
// a=12
// let a = 12;
// console.log(a);
// console.log(a);

// let a = 12;

// let name ;

// name = "aman"

// console.log(name);

// let name = "aman"

// let a = "loh";

// a=12
// // a="name"
// // a= true

// console.log(typeof a);

// console.log("5" - 5);

// opetators
// arihmetic +-*/
// logical && || !
// ternary ?T C: TC
// urnary +- ++ --
// comparision === !== == !=
// assigment op += -= * = /=

// let a = 12
// a += 33
// a /= 33
// console.log(a);

// let a = "12"
// let b = "12"
// console.log(!a===b);

// let a = 12 ;
// let b = 122 ;
//  console.log(a!==b);

// ternary operator
// ?:

// let a =192
// let b =1902

// console.log(a>=b ? console.log("ok report") : console.log("not ok report"));

// console.log(typeof NaN);

// let marks = 50 ;

// let grade = marks >= 50 ? "you are awesome" : "you are not awesome"
// console.log(grade);

// CONTROL flow
// let marks = 95;

// if (marks >= 60) {
//   console.log("pass");
// } else if (marks >= 70 && marks <=100) {
//   console.log("A1");
// } else if (marks>=50 && marks<= 60){
//     console.log("pass kar diya");
// }
// else {
//   ("below average");
// }

// let day = "sunday";
// switch (day) {
//     case "monday":
//         console.log("workout");

//         break;
//     case "tuesday":
//         console.log("coding");

//         break;
//     case "sunday":
//         console.log("never miss 2 days a row");

//         break;

//     default:
//         break;
// }

// let marks = 90;
// function result(marks) {
//     if (marks >= 90) return "pass A1";
//     if (marks >= 40) return "pass";
//     return "fail";
// }

// console.log(result(marks));

// LOOPS

// let a = [1,2,3,4,5,6,5,7,8,9,0,3,5]
// // console.log(a.reverse());

// // let newarr = a.reverse()
// // console.log(newarr);

// let aa = a.sort((a,b)=>{
// //  return b-a
//     return a-b
// })

// let arr = [99,66,77,1,2,4,5,6,90909090]
// let aa = arr.sort((a,b)=>{
//     return b-a
// })

// LOOPS
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <=20; i++) {
//     if (i%2!==0) {
//         continue;

//     }
// console.log(i);

// }

// let i = 1
// while (i<=20) {
//     if (i%2===0) {
//         continue
//     }
//     console.log(i);
//     i++
// }

// let i = 1
// while (i<=21) {
//     if (i%2!==0) {
//         console.log(i);
//     }
//     i++
// }

// let s = "HARIOM"
// console.log(s.split("").reverse().join());

// let name = "HARIOM"
// let reverseName = ""
// for (let i = name.length - 1; i >= 0; i--) {
//     reverseName += name[i];
// }

// console.log(reverseName);

// let string = "MANGO"
// let reverseString = ""
// for (let i = string.length - 1; i>=0; i--) {
//    reverseString += string[i];

// }
// console.log(reverseString);

// let name = "HARIOM"
// let newName = ""
// for(let i = name.length - 1 ; i>=0 ; i--){
//     newName += name[i] ;
// }
// console.log(newName);

// let a = [2,4,6,8,10]
// let newarr = a.reduce((accumilator ,y)=>{
//     return (accumilator + y)
// })
// console.log(newarr);

// let newarr = a.reduce((a,b)=>{
//     return a+b
// },0)
// console.log(newarr);

// let newarr = a.forEach((a)=>{
//     console.log(a+2);

// })
// console.log(newarr);

// FUNCTION

// for(let i = 1 ; i <=8 ; i++){

//      let row = "";

//     for (j = 1 ; j <=i ; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// let name = "hariom"
// let reverse  = ""
// for(let i = name.length -  1 ; i>=0 ; i--){
//     reverse += name[i]
// }
// console.log(reverse);

// TRUTH AND FALSY ✅
// loops
// function

// let name = function (a=0,b=0){
// console.log(a+b);

// }
// name(9,9)

// let name = function (...val) {
//     return val ;

// }
// console.log(name(1,2,4,5,6,6,6));
// let a =12
// function abcd() {
//     a++
// }
// console.log(a);

// function name(val) {
//     return (val2)=>{
//         console.log(
//             "hello"
//         );

//     }
// }
// console.log();

//  ARRAY AND OBJECT

// for each ,filter , map , reduce , find , some , every

// let name = [ 1,2,3,4,5,6]
// let newname = name.forEach( (val) => {
//     console.log(val + 2);
    
// });


// let arr = [2,3,4,5,6,7,8,9,10]
// let newarr = arr.filter((val)=>{
//     if(val%2===0) return "true" 
//     // else return "flase"
// })
// console.log(newarr);

// let newarr = arr.map((val)=>{
//  return val *2
// })


// let newarr = arr.reduce((accu ,val)=>{
//     return (accu + val)
// })
// console.log(newarr);

