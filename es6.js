
// no:1
// console.log(a) //output:ƒ a(){}
// var a = 1;
// function a(){};
// var a = 10;
// console.log(a) //output:10
 
// // Will be rendered as

// var a;
// a = function(){}; // now a holds the value as a function
// console.log(a); // output : f a(){}
// a = 1;          // a is a var that holds value 1
// a = 10;           // a is a var that holds value 10
// console.log(a); // output : 10

// // no2
// var a = 1;
// if(true){
//    function a(){};
//    var a = 10;
// }
// console.log(a)
// error


// // Will be rendered as
// var a;
// a = 1;
// if(true) {
//     a = function() {};
//     let a; // The function declaration in the block uses ES6 declaration semantics (like let or const), which does not allow re-declarations.
//     var a; // throws Uncaught SyntaxError: Identifier 'a' has already been declared
//     a = 10;
// }
// console.log(a);


// // no3

// var a = 1;
// if(true){
//     function a(){};
//     a = 10;
//  }
// console.log(a)

// // Will be rendered as
// var a;
// a = 1;
// if(true) {
//     a = function() {};
//     let a;
//     a = 10;
// }
// console.log(a); // output : f a(){}

// // no4
// var a = 1;
// if(true){
//     var a= function(){console.log()}
//     a = 10;
// }
// console.log(a)
// // Will be rendered as

// var a;
// a = 1;
// if(true) {
//     a = function(){console.log()}
//     a = 10;
// }
// console.log(a) // output:10


// // no5

// var a = 1;
// if(true){
//     function a(){};
//     a = 10;
//     console.log(a) 
// }
// console.log(a) 
// // Will be rendered as

// var a;
// a = 1;
// if(true){
//     a = function() {};
//     let a;
//     a = 10;
//     console.log(a); // output:10
// }
// console.log(a); // output : f a(){}




// // ex 6
// console.log(a)
// var a =5;
// console.log(a);
// a=10;
// console.log(a)


// // 2
// console.log(a)
// var a =5;
// console.log(a);
// var a=10;
// console.log(a)


// // 7
// console.log(a)
// let a =5;
// console.log(a);
// a=10;
// console.log(a)

// // 4
// let a =5;
// console.log(a);
// a=10;
// console.log(a)

// // 8
// let a =5;
// console.log(a);
// let a=10;
// console.log(a)

// // 9
// var a=5;
// console.log(a)
// function a(){
//     a=10;
//     console.log(a)
// }

// console.log(a)
// console.log(a());


// // 10
// let a=5;
// console.log(a)
// function a(){
//     a=10;
//     console.log(a)
// }

// console.log(a)
// console.log(a());

// // 11
// let a=5;
// console.log(a)
// var a=10;
// console.log(a)

////12
// var a=5
// function a(){}
// console.log(a)

// //13
// var a=5;
// var a=10;
// console.log(a)

////14
// console.log(a);
// function a(){
//     var a = 20;
// }
// console.log(a);

////15
// var b = 5;
// function b(){
// }
// console.log(b);
////16
// console.log(a);
// function a(){
// console.log("sdf")
// }

////16
// if(true){
//     function a(){
//         console("kljkl");
//     }
//     console.log(a);
// }
// console.log(a);


////17
// if(true){
// let a = function(){
//     console.log("a");
// }
// console.log(a);
// }
// console.log(a);


////18
// function c(){
//     console.log("10");
// }

// var c = 10;


////19
// console.log(d);
// var d = 5;
// if(true){
//     function d(){}
//         d = 55
    
// }
// console.log(d);

////20
// console.log(e);
// var e = 10;
// if(true){
//     function e(){};
//     var e=100;
// }
// console.log(e);

////21
// var f = 5;
// function f(){
//     console.log("dfsd");
// }
// console.log(f);


////22
// var a = "sdf";
// a=10;   
// console.log(a);

////23
// let b = "sffs";
// b = 20;
// console.log(b);

////24
// const c = "dfsdf";
// c = 30;
// console.log(c);

////25
// // function checkPassword() {
// //     try {
// //     var pass = document.getElementById("f1").value;
// //     console.log(pass);
// //     if (pass.length < 8) {
// //     throw "Please enter at least 8 characters.";
// //     }
// //     if (pass.indexOf(" ") !== -1) {
// //     throw "No spaces in the password, please.";
// //     }
// //     var numberSomewhere = false;
// //     for (var i = 0; i < pass.length; i++) {
// //     if (isNaN(pass(i, i+1)) === false) {
// //     numberSomewhere = true;
// //     break;
// //     }
// //     }
// //     if (numberSomewhere === false) {
// //     throw "Include at least 1 number.";
// //     }
// //     }
// //     catch(err) {
// //     alert(err);
// //     }
// //     }
     
////26
// //  function validateZIP() {
// // var valueEntered = document.getElementById("zip").value;
// // var numChars = valueEntered.length;
// // if (numChars < 5) {
// // alert("Please enter a 5-digit code.");
// // return false; 7    }
// // for (var i = 0; i <= 4; i++) {
// // var thisChar = parseInt(valueEntered[i]);
// // if (isNaN(thisChar)) {
// // alert("Please enter only numbers.");
// // return false; 13     } 14   } function validateZIP() {
// // var valueEntered = document.getElementById("zip").value;
// // var numChars = valueEntered.length;
// // if (numChars < 5) {
// // alert("Please enter a 5-digit code.");
// // return false;
// // } 
// // for (var i = 0; i <= 4; i++) {
// // var thisChar = parseInt(valueEntered[i]);
// // if (isNaN(thisChar)) {
// // alert("Please enter only numbers.");
// // return false;
// // }
// // }
// // }
// //  }

////27
// // function validateEmail() {
// // var addressIsLegal = true;
// // var eEntered = document.getElementById("address").value;
// // if (eEntered.indexOf(" ") !== -1) {
// // addressIsLegal = false;
// // }
// // if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
// // addressIsLegal = false;
// // }
// // if (addressIsLegal === false) {
// // alert("Please correct email address");
// // return false;
// // }
// // }
 



////28
// // function checkPassword() {
// // try {
// // var pass = document.getElementById("f1").value;
// // if (pass.length < 8) {
// // throw "Please enter at least 8 characters.";
// // }
// // if (pass.indexOf(" ") !== -1) {
// // throw "No spaces in the password, please.";
// // }
// // var numberSomewhere = false;
// // for (var i = 0; i < pass.length; i++) {
// // if (isNaN(pass.slice(i, i+1)) === false) {
// // numberSomewhere = true;
// // console.log(numberSomewhere)
// // // alert("code is working")
// // break;
// // }
// // }
// // if (numberSomewhere === false) {
// // throw "Include at least 1 number.";
// // }
// // }
// // catch(err) {
// // alert(err);
// // }
// // }

////29
// function add(first, second = getValue()) {    
// return first + second; }
// function getValue() {    
// return 5; }
// // console.log(add(1, 1));     // 2 
// console.log(add(1));        // 6

////30
// let value = 5;
// function getValue() {    return value++; }
// function add(first, second = getValue()) {    return first + second; }
// console.log(add(1, 1));     // 2;
// console.log(add(1));        // 7;


////31
// function add(first, second = first) {    return first + second; }
// console.log(add(1, 1));              // 2 
// console.log(add(1));                 // 2

////32
// function getValue(value) {    return value + 5; }
// function add(first, second = getValue(first)) {    return first + second; }
// console.log(add(1, 1));              // 2 
// console.log(add(1));                 // 7

////33
// function add(first = second, second) {    return first + second; }
// console.log(add(1, 1));              // 2 
// console.log(add("undefined", 1));      // throws an error

////34
// let reflect = value => value;
// effectively equivalent to:

////35
// let reflect = function(value) { 
//     console.log("suneel");   
//     return value; };

////36
// function calcTot(merchTot) {
// var orderTot;
// if (merchTot >= 100) {
//     orderTot = merchTot;
// }
// else if (merchTot < 50.01) {
// orderTot = merchTot + 5;
// }
// else {
// orderTot = merchTot + 5 + (.03 * (merchTot - 50));
// }
// return orderTot;
// }

////37
// let func = merchTot=>{
//     let orderTot;
//     if(merchTot>=100){
//         orderTot=merchTot;
//     }
//     else if
//         (merchTot < 50.01){
//         orderTot = merchTot + 5;
//         }
//     else{
//     orderTot = merchTot + 5 + (.03 * (merchTot - 50));   
//     }
//     return orderTot;
//     }
//     let b = func(50);
//     console.log(b);

 ////38   
// let func = merchTot=>{
//     let orderTot;
//     if(merchTot>=100){
//         orderTot=merchTot;
//     }
//     else if
//         (merchTot < 50.01){
//         orderTot = merchTot + 5;
//         }
//     else{
//     orderTot = merchTot + 5 + (.03 * (merchTot - 50));   
//     }
//     return orderTot;
//     }
//     console.log(func(50));
////39
// let sum = (num1, num2) => num1 + num2;
// console.log(sum(50,50))  //100
////40
// let sum = (num1, num2) =>  { 
// return    num1 + num2
// }
// console.log(sum(50,50))  //undefined

////41
// let getName = () => "Nicholas";
// console.log(getName); // () => "Nicholas"

////42
// let getName = () => "Nicholas";
// console.log(getName()); // Nicholas

////43
// effectively equivalent to:
// let sum = function(num1, num2) {    return num1 + num2; };

////44
// let sum =num1 => num1;
// console.log(sum(3))
// let getTempItem = (roll,name,course) => (
// {rooNum: roll, name: name,course:course });
// console.log(getTempItem(108, "suneel" , "web and apps developement" ))

////45
// let getTempItem = (roll,name,course) => (
// {rooNum: roll, name: name,course:course });
// console.log(getTempItem(108, "suneel" , "web and apps developement" ))

////46
// let person = function(name) {    
// return {        
// getName: function() {            
// return name;        
// }    
// };
// }("Nicholas");
// console.log(person.getName());      // "Nicholas"

//47
// let person = function(name) {
//     return {        
//     getName: function() {            
//     return name;        
//     }    
//     };
//     };
//     console.log(person("Nicholas").getName());      // "Nicholas"



//48
// let person = function(name) {
//     return {        
//     getName: function() {            
//     return name;        
//     }    
//     };
//     };
//     console.log(person.getName("Nicholas"));      //error, person.getName is not a function

// let person = name=>              //solving problem .........
//     ({ getName: () => function()});           
//     console.log(person.getName("Nicholas");  


//49
// let person = name => 
// ({getName: () => name})
// console.log(person("umar").getName());

// let myFunc =(name, course)=>{
//     return {
//         name,
//         course,
//     }
// }
   // console(myFunc("suneel" , "web and apps developmetn"))

////50
// let myFunc =(name, course)=>({name,course,});console.log(myFunc("suneel" , "web and apps development")); working when same property other wise not working

////51
// let myFunc =(name, course)=>({myname,mycourse,});console.log(myFunc("suneel" , "web and apps development")); not working because property name different

////52
// let node = {    type: "Identifier",    name: "foo" };
// let { type, name, value = true } = node;
// console.log(type);      // "Identifier" console.log(name);      // "foo" console.log(value);     // true

////53
// let node = {    type: "Identifier",    name: "foo" };
// let { type, name, value = true } = node;
// console.log(type,name,value);

////54
// let node = {    type: "Identifier",    name: "foo" };
// let { type: localType, name: localName } = node;
// console.log(localType);     // "Identifier" console.log(localName);     // "foo"

////55
// let node = {    type: "Identifier",    name: "foo" };
// let { type: localType, name: localName } = node;
// console.log(localType);    
// console.log(localName);     
// Identifier
// foo

////56
// let node = {    type: "Identifier" };
// let { type: localType, name: localName = "bar" } = node;
// console.log(localType);     // "Identifier" console.log(localName);     // "bar"

////57
// let node = {    type: "Identifier",    name: "foo",    loc: {        start: {            line: 1,            column: 1        },        end: {            line: 1,            column: 4        }    } };
// // extract node.loc.start let { loc: { start: localStart }} = node;
// console.log(localStart.line);   // 1 console.log(localStart.column); // 1

////58
// let myData = {
//     name:"suneel",
//     course:"web development"
// }

///59
// let{name,course} = myData;
// console.log(name);
// console.log(course);

////60
// let node = {    
// type: "Identifier",    
// name: "foo" };
// let { } = node;
// console.log(value);      // "Identifier" console.log(name);      // "foo" console.log(value);     // undefined


////61
// let node = {  
//     type: "Identifier",    
//     name: "foo" }
// // function outputInfo(value) {    
// // console.log(value === node);        // true }
// // outputInfo({ type, name } = node);
// // let{type,name} = node;
// console.log(type); 
// console.log(name);     // "Identifier" console.log(name);      // "foo"

////62
// let node = {    
//     type: "Identifier",    
//     name: "foo" }, 
    
//     type = "Literal", 
//     name = 5;

// function outputInfo(value) {    
//     console.log(value)
//     console.log( vnode);        // true }
//     outputInfo({ type, name } = node);
//     console.log(type);
//     }      // "Identifier" console.log(name);      // "foo"


//ex 63
// let node={
//     name:"umar",
//     fname:"aslam"
// }

// let {name,fname}=node

// console.log(name,fname)

// //ex 64

// let node={
//     name:"umar",
//     fname:"aslam"
// }

// name="u"
// fname="a"

// let {name:myName,fname:myFname}=node

// console.log(name,fname)


// //ex65
// let node={
//     name:"umar",
//     fname:"aslam"
// }

// name="u"
// fname="a"

// let {}=node

// console.log(name,fname)



// //ex 66 functions

// let node = {
//     type: "Identifier",
//     name: "foo"
//    },

//    type = "Literal",
//    name = 5;
   
//    function outputInfo(value) {
//     console.log(value === node); // true
//    }
//    outputInfo({ type, name } = node);
//    console.log(type); // "Identifier"
//    console.log(name); 


// //ex 67

// let node = {
//     type: "Identifier",
//     name: "foo"
//    },

//    type = "Literal",
//    name = 5;
   
//    function outputInfo(value) {
//        console.log(value);
//        console.log(node)
//     console.log(value === node); // true
//    }
//    outputInfo( { } = node ) ;
//    outputInfo( { a , b } = node ) ;
//    outputInfo( { a  } = node ) ;


//    console.log(type); // "Identifier"
//    console.log(name);



////68
// let obj = {
//     name:"suneel",
//     surname:"suther",
// }
// let{surname,name} = obj;
// console.log(surname);
// console.log(name);

////69
// let obj = {
//     name:"suneel",
//     surname:"suther",
// }
// name = "mukesh";
// surname = "solanki";
// ({name,surname} = obj);
// console.log(name);
// console.log(surname);
// VM819:8 //suneel
// VM819:9 //suther

////70
// let obj = {
//     name:"suneel",
//     surname:"suther",
// }
// obj.name = "mukesh";
// obj.surname = "solanki";
// ({name,surname} = obj);
// console.log(name);
// console.log(surname);
// VM874:8// mukesh
// VM874:9 //solanki

////71
// let obj = {
//     name:"suneel",
//     surname:"suther",
// }
// name = "mukesh";
// ({name} = obj);
// console.log(name);  //suneel

////72
// let node = {    
//     type: "Identifier",    
//     name: "foo" 
//     }, 
// type = "Literal", 
// name = 5;
// ({ type, name } = node);
// console.log(type);  

////73
// nested objective
// let obj = {
//     name:"suneel",
//     obj1:{
//         name1:"kailash",
//         obj2:{
//             name3:"mukesh",
//         }
//     }
// }

// let{obj1:{obj2:{name3}}}=obj;
// console.log(name3);

////74
// let obj = {
//     name:"suneel",
//     obj1:{
//         name1:"kailash",
//         obj2:{
//             name3:"mukesh",
//         }
//     }
// }

// let{obj1:{obj2:{name3}}}=obj;
// console.log(name3);



////75
// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//      start: {
//       line: 1,
//       column: 1
//       },
//      end: {
//       line: 1,
//       column: 4,
//        lastEnd:{
//            lineEnd:1.1,
//            coulmnEND:1.2
//        }
//       }
//     }
//    };
//    // extract node.loc.start

//    let {loc:{end:{lastEnd:{lineEnd,coulmnEND}}}} = node;

// // ex 76
//    let array = ["one", "two" , "three" , "four" , "five"];
//    let[ , , , four] = array;
//    console.log(four); //four
// // ex 2
//    let array = ["one", "two" , "three" , "four" , "five"];
//    let[,,,four] = array;
//    console.log(four); //four

// //  ex 77 array swip
// var a =3;
// var b = 4;
// [a,b] = [b,a]

// console.log([a,b] = [b,a])   //[4, 3] value swip a=b & b=a

//// 78
// var c =3;
// var d = 4;
// [c,d] = [d,c]
// console.log([d,c]);// [3,4]

//// 79
// var a =3;
// var b = 4;
// [a,b] = [b,a]
// console.log([b]) 
// VM832:5 //[3]

//// 80
// // nested array Destructuring 
// let obj = {
//     name:"suneel",
//     age:10,
//     obj1:{
//         name1:"kailash",
//         age1:12,
//         obj2:["one","two", "three",["value1", "value2" , "value3"]]
//     }
// }

// let{obj1:{obj2:[...x]}}=obj;
// console.log(x[3][0]);


//// 81
// let myArray = ["one", "two" , "three" , obj={
//     mon:"monday",
//     tue:"tuesday",
//     wed:"wednesday",
// }]
// let{...arr}=myArray;

//// 82
// let a ={
//     name:"mukesh",
//     age:12,
//     b:{
//         name:"heerji",
//         age:14,
//         c:{
//             name:"kailash",
//             age:15,
//             d:{
//                 name:"kamal",
//                 age:16,
//                 e:{
//                     name:"qayoom",
//                     age:17,
//                     f:"zahid",
//                     age:18,
//                     g:{
//                         name:"bheesham",
//                         age:19,
//                         h:{
//                             name:"jaswant",
//                             age:20,
//                             i:{
//                                 name:"darpan",
//                                 age:21,
//                                     j:["one", "two","three", "four", "five" , "six" ,"seven", "eight" , "nine" , "ten"],
//                                       name3:"kjhkjhk",
                         
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// let {b:{c:{d:{e:{f:{g:{h:{i:{j:[array,name3]}}}}}}}}}=a;
// console.log(name3);

//// 83
// let node = {
//     type: "Identifier",    
//     name: "foo" 
// },

// type = "Literal", 
// name = 5;
// ({ type, name } = node);
// console.log(type);      // "Identifier" console.log(name);      // "foo



//example 84
// class planClass{
// constructor(name, price, space, transfer, pages){
// this.name = name;
// this.price = price;
// this.space = space;
// this.transfer = transfer;
// this.pages = pages;
// }
// planPro(){
//     console.log(name + price + space + transfer + pages);

// }
// }

// let obj = new planClass("suneel" , 100 , 20 , 1000 , 20);
// console.log(obj);

//// 85
// class class2{
//     constructor(name, price, space, transfer, pages){

// this.doc = name;
// this.grumpy = price;
// this.sleepy = space;
// this.bashful = transfer;
// this.sneezy = pages;
// }


// prototype2(){
//     console.log(name + price + space + transfer + pages);
// }
// }

// let example2 = new class2("suneel" , 100 , 20 , 1000 , 20);
// console.log(example2);
// let example2 = new class2("suneel" , 100 , 20 , 1000 , 20);
// console.log(example2);

////86
// class class2{
//     constructor(name, price, space, transfer, pages){

// this.doc = name;
// this.grumpy = price;
// this.sleepy = space;
// this.bashful = transfer;
// this.sneezy = pages;
// }


// prototype2(){
//     console.log(name + price + space + transfer + pages);
// }
// }

////87
// let methodName = "sayName";
// class PersonClass {
//     constructor(name) {        
//     this.name = name;    }
//     [methodName]() {        console.log(this.name);    } 
// };
// let me = new PersonClass("Nicholas"); me.sayName();           // "Nicholas"
  
//// 88
// let process = "sayName";
// class PersonClass{
//     constructor(name) {
//         this.name=name;
//     }
//     [process](){console.log(this.name)}
// }

// let you = new PersonClass("suneel");
// you.sayName();

//// 89
// let propertyName = "html";
// class CustomHTMLElement {
//     constructor(element) {        
//     this.element = element;   
// }
//     get [propertyName]() {        
//     return this.element.innerHTML;    
// }

//     set [propertyName](value) {        
//     this.element.innerHTML = value;  
  
// } 

// }

//// 90
// let element1 = document.getElementById("td1");
// let name2 = new CustomHTMLElement(element1);
// console.log(element1)
// console.log(name2)

//// 91
// function iteratFunc(org) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i >= org.length);
//     var value = !done ? org[i++] : undefined;
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//    } 

//// 92
//    var a = [1,2,3];
//    var callData = iteratFunc(a);
//    for(var i=0; i < a.length+1; i++){
//        console.log(callData.next())
//    }
// iteratFunc.next([1,2,3]);

//// 93
// function createIterator(items) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i >= items.length);
//     var value = !done ? items[i++] : undefined;
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//     }
//    var iterator = createIterator(['suneel', 'kailash', 'qayoom',"mukesh"]);
//    console.log(iterator.next()); // "{ value: 1, done: false }"
//    console.log(iterator.next()); // "{ value: 2, done: false }"
//    console.log(iterator.next()); // "{ value: 3, done: false }"
//    console.log(iterator.next()); // "{ value: 3, done: false }"
//    console.log(iterator.next()); // "{ value: undefined, done: true }"

//// 94
// function control(num) {
//     var array = [];
//     var total=0;
//     var name = document.getElementsByName("abc");
//     var total=0;
//     for(var i=0; i < name.length; i++){
//     if(name[i].checked){
//         total =total +1;
//         var reult = (name[i].value);
//         array.push(reult);
//         console.log(array);
//         console.log(reult);
//     }
//     if(total > 3){
//     name[i].checked = false ;
//     return false;
//     }
// }

//// 95
// function createIterator(items) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i >= items.length);
//     var value = !done ? items[i++] : undefined;
// //    Iterators and Generators 139
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//    }

//// 96
// var callfunc = createIterator(array);
//    var arg = array  
// console.log(arg)
//       for(var i = 0 ;i< arg.length +1;i++){
//         var ab= console.log(callfunc.next());
//       }
//        var vlue =(arg);
//        console.log(vlue)
//        if(vlue[i]==="januarary" || "Febuarary" || "March"){
// console.log("5%");
//        }
//        else if(vlue[i]==="April" || "May" || "June"){
//         console.log("10%");
//                }
//               else if(vlue[i]==="July" || "August" || "September"){
//                 console.log("15%");
//                        }
//                      else  if(vlue[i]==="Octomber" || "November" || "December"){
//                         console.log("20%");
//                                }
// //       }
// //     //   console.log(ab)
// //     //   for(var i=0; i < ab.value.length;i++){
// //     //     console.log(ab[i])
// }

//// 97
// var prom1 = prompt("Enter any number");
// var prom2 = prompt("Enter any number");
// var prom3 = prompt("Enter any number");
// var prom4 = prompt("Enter any number");
// var prom5 = prompt("Enter any number");

// let set = new Set(); 
// set.add(prom1); 
// set.add(prom2);
// set.add(prom3); 
// set.add(prom4);
// set.add(prom5); 
// console.log(set);

//// 98
// readFile("text.txt", function(err, contents) {
//     if (err) {
//     throw err;
//     }
//     console.log(contents);
//    });
//    console.log("Hi!");

//// 99
// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() * 100 < 90) {
//         console.log('resolving the promise ...');
//         resolve('Hello, Promises!');
//     }
//     reject(new Error('In 10% of the cases, I fail. Miserably.'));
// });

//// 100
// let promise = new Promise(function(resolve, reject) {
//    console.log("Promise");
//    resolve();
//   });
//   promise.then(function() {
//    console.log("Resolved.");
//   });
//   console.log("Hi!");




// // 101
// let ex1 = new Promise(function(resolve, reject) {
//  console.log("promice of example 1");
//  resolve();
// });
// ex1.then(function() {
//  console.log("success.");   //success
// });
// // console.log("hello promise one");


// // 102
// let ex2 = new Promise(function(resolve, reject) {
//  console.log("promise of example 2");
// reject();
// });
// ex2.then(null,function() {
//  console.log("failure."); //failure
// });
// // console.log("hello promise two");

//// 103
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);

//// 104
// var num = 50;
// var poms = new Promise(function(resolve, reject){
//     if(num === 50){
//        resolve("resolved")
//     }
//     else{
//         reject(`rejected`)
//     }
// })
// poms.then(function(value){
//     console.log(value);
// },
// function(value){
//     console.log(value);
// }
// )

//// 105
// var num = 50;
// var poms = new Promise(function(resolve){
//     if(num === 50){
//        resolve("resolved")
//     }
//     // else{
//     //     reject(`rejected`)
//     // }
// })
// poms.then(function(value){
//     console.log(value);
// })

//// 106
// var num = 503;
// var poms = new Promise(function(resolve,reject){
//     if(num === 50){
//        resolve("resolved")
//     }
//     else{
//         reject(`rejected`)
//     }
// })
// poms.then(function(value){
//     console.log(value);
// });
// poms.catch(function(value){
//     console.log(value)
// })

//// 107
// var num = 50;
// var poms = new Promise(function(resolve,reject){
//     if(num === 59){
//        resolve("resolved")
//     }
//     else{
//         reject(`rejected`)
//     }
// })
// poms.then(function(err) {
// console.error(err);
// });

//// 108
// var num = 50;
// var poms = new Promise(function(resolve,reject){
//     if(num === 59){
//        resolve("resolved")
//     }
//     else{
//         reject(`rejected`)
//     }
// })
// poms.then(null, function(value) {
//  // rejection
//  console.log(value);
// });

//// 109
// var num = 50;
// var poms = new Promise(function(resolve,reject){
//     if(num === 50){
//        resolve("resolved")
//     }
//     else{
//         reject(`rejected`)
//     }
// })
// poms.then(function(value) {
//  // rejection
//  console.log(value);
// });

//// 110
// var b = " => hey this is unsettled Promises"
// let promise1 =Promise.reject(b);
// promise1.then(function(value){
//     console.log(value);
// })

//// 111
// var a = "hey this is settled Promises"
// let promise =Promise.resolve(a);
// promise.then(function(value){
//     console.log(value);
// })

//// 112
// let obj={
// then:function name(resolve,reject){
//     resolve("=> hey this is successfull statement")
// }
// }
// let store = Promise.resolve(obj);

// store.then(function(argu){
//     console.log(argu);
// })

//// 113
// let obj={
//     then:function name(resolve,reject){
//         reject("=> hey this is unsuccessful statement")
//     }
//     }
//     let store = Promise.resolve(obj);
//         store.then(function(argu){
//         console.log(argu);
//     })

//// 114
// let obj={
//     then:function name(resolve,reject){
//         reject("=> hey this is unsuccessful statement")   //without null orgument always rejection along with erro
//     }
//     }
//     let store = Promise.resolve(obj);
//         store.then(null,function(argu){
//         console.log(argu);
//     })

//// 115
// let obj={
//     then:function name(resolve,reject){
//         reject("=> hey this is unsuccessful statement");
//     }
//     }
//         let store = Promise.resolve(obj);
//         store.catch(function(argu){
//         console.log(argu);
//     })

//// 116
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });



//example No:- 117
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise.then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

//// 118
// var a = "hey this is settled Promises"
// let promise =Promise.resolve(a);
// promise.then(function(value){
//     console.log(value);
// });


// 119
// let ex3 = new Promise(function(resolve, reject) {
//     console.log("Promise of example 3");
//     resolve();
//     reject()
//    });
//    ex3.then(function() {
//     console.log("Resolved.");
//    },
//    function() {
//     console.log("reject");
//    });
//    // console.log("hello promise three");


//// 120
// let promise = Promise.resolve(42);
// promise.then(function(value) {
//  console.log(value); // 42
// });

//// 121
// let promise = Promise.reject(42);
// promise.then(function(value) {
//  console.log(value); // 42
// });

//// 122
// let promise = Promise.reject(42);
// promise.then(null, function(value) {
//  console.log(value); // 42
// });

// example 123
// let promise = Promise.resolve(42);
// promise.then(function(value) {
//  console.log(value); // 42
// });

// var pomp = Number(prompt("Enter any number"));
// let promise = Promise.resolve(pomp);
// if(pomp >= 10){
//     promise.then(function(value) {
//     console.log("number is greater then ten    " + value)
// })
// }
// if(pomp < 10){
// promise.then(function(value) {
//     console.log("you number is less then ten    " + value)

// });
// }

// // example 123
// var pomp = Number(prompt("Enter any number"));
// let promise = Promise.reject(pomp);
// promise.catch(function(value) {
// if(value >= 10){
// console.log("number is greater then ten  your number is  " + value)
// }
// })
// promise.catch(function(value) {
// if(value < 10){
// console.log("number is less then ten  your number is  " + value)
// }
// });

//// 124
// var pomp = Number(prompt("Enter any number"));
// let promise = new Promise(function(resolve, reject) {

//     resolve();
//    });
//    promise.then(function() {
//     console.log("Resolved.");
//    });
//    console.log("Hi!");


//// 125
// var promp =+ prompt("Enter any number");
// var promise = new Promise(function(resolve,reject){
//     if(promp  < 10){
//     resolve("your number is less then 10");

//     }
//     else{
//     reject("your number is greater then 10")

//     }
// }) 




// promise.then(function(arument){
//     console.log("resolved" + arument);
// })
// promise.catch(function(arument){
//     console.log("reject" + arument)
// }
// )

//// 126
// // example 1
// var prompt =+ prompt("Enter any numer");
// var promise2 = new Promise(function(resolve, reject){
//     if(prompt > 10){
//         resolve("your number greater theb 10")
//     }
//     else{
//         reject("your number is less then 10");
//     }
// });

// promise2.then(function(argu){
//     console.log("resolved =>" + argu)
// })
// promise2.catch(function(argu){
//     console.log("rejected =>" + argu )
// })


//  example 127
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// var odd = [];
// var even = [];

// var promise = new Promise(function(resolve , reject){
  
//     for(var i =0; i < array.length; i++){
//     if(array[i] % 2 == 0){
// var result = even.push(array[i])
// resolve(even)
// console.log(even)
 
//     }
//     else{
//         odd.push(array[i])
//     }  
//     console.log(odd)
// }
// })

// promise.then(function(argu){
//     console.log("even =>" +argu)
// },
// function(argu){
//     console.log("odd =>" +argu)
    
// }
// )

//// 128
// let obj = {
//     then: function(resolve, reject){
//         resolve("=> resolve working");
//     }
// }


// let one = Promise.resolve(obj);
// one.then(function(argu){
//     console.log(argu)
// })


//// 129
// let obj = {
//     then: function(resolve, reject){
//         reject("=> resolve working");
//     }
// }


// let one = Promise.resolve(obj);
// one.catch(function(argu){
//     console.log(argu)
// })
    
//// 130
// let obj = {
//     then: function(resolve, reject){
//         reject("=> resolve working");
//     }
// }


// let one = Promise.resolve(obj);
// one.then(null,function(argu){
//     console.log(argu)
// })
    
//// 131
// function submitform(){
//    var one = document.getElementById("inpt1").value;
//    var two = document.getElementById("inpt2").value;
//    var three = document.getElementById("inpt3").value;
//    var four = document.getElementById("inpt4").value;
   
//    let promic = Promise.all([one,two,three,four]);
//    promic.then(function(resolve){
//    console.log(resolve)
//    var index = resolve.indexOf("");
//    var removed = resolve.splice(index,1);
//    console.log(resolve)
//    if(resolve.length === 4){
//        console.log("your file successfuly submitted")
//    }
//    else{
//        console.log("pleasse fill input field")
//    }
//    })
//    }
   
   //// 132
   // function submitform(){
   
   //     var one = document.getElementById("inpt1").value;
   //     console.log(one)
   //     var two = document.getElementById("inpt2").value;
   //     console.log(two)
   //     var three = document.getElementById("inpt3").value;
   //     console.log(three)
   //     var four = document.getElementById("inpt4").value;
   //     console.log(four)
       
   //     let promic = Promise.all([one,two,three,four]);
   //     promic.then(function(resolve){
   //     console.log(resolve)
   //     // var index = resolve.indexOf("");
   //     // console.log(index);
   //     // var removed = resolve.splice(index);
   //     // console.log(resolve)
       
          
   //         if(resolve[0] !== "" && resolve[1] !== "" && resolve[2] !=="" && resolve[3] !== ""){
   //             console.log("your file successfully submit", resolve);
   //             }
   //             else{
   //                 console.log("please fill input file", resolve)
   //             }
   //     })
   //     }
// // prmomise example
// function click1(){
//     let inpt1 = document.getElementById("inpt1").value;
//     console.log(inpt1)
//     var lower = inpt1.toLowerCase();
//     console.log(lower);
// var promise1 = new Promise(function(resolve, reject){
//     if(lower === "biology" || lower === "math" || lower === "chemistry"){
//         resolve("very easy subject")
//     }
//    if(lower === "html" || lower=== "jawascript" || lower === "css"){
//        reject("wow very itresting subject you must successfull")
//    }
// })
// promise1.then(function(argu){
//     console.log(argu);
// },
// function(argu){
//     console.log(argu)
// }
// )
// console.log("=> job que")
// promise1.then(function(argu){
//     console.log("keep it up really "+argu);
// }),(function(argu){
//  console.log(argu + " if you worked hard")
// }).then(function (){
//     console.log(" => chaining promise")
// })
// }

// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < array.length; i++) {
// 	array[i] = Math.pow(array[i], 2);
// }
// array; //-> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
//  /****************************/

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
// 	function (num) {
// 	return Math.pow(num, 2);
// });



// var newArray  = [1,2,3,4,5,6,7,8,9];
// var get  = localStorage.getItem("array");
// console.log(get);
// if(get === null){

// } 
// else{
// //     console.log(get);
// // for(let i=0; i < get.length; i++){
// //     get[i]=Math.pow(get[i], 2);
// //     console.log(get[i])
// var a =     JSON.parse(get);
// console.log(a);
//     a.map(function func(num){
//         return Math.pow(num,2)
//         })
// }



// localStorage.setItem("array" , JSON.stringify(newArray));
// function showStudent(ssn) {
// 	var student = db.get(ssn);
// 	if(student !== null) {
// 		document.querySelector(`#${elementId}`).innerHTML =
// 		`${student.ssn},
// 		${student.firstname},
// 		${student.lastname}`;
// 	}
// 	else {
//         localStorage.setItem("numbering")
// 		throw new Error('Student not found!');
// 		}
// }
// showStudent('444-44-4444');
// var student ={
//     id:null,
//     ssn:"xyz",
//     firstname:"kailash",
//     lastname:"kumar",
// }

// function showStudent(ssn) {
//     var student1 = student.id;
//     console.log(student1)
// 	if(student1 !== null) {
//         document.getElementById("elementId").innerHTML =`${student.ssn},${student.firstname},${student.lastname}`;
// 	}
// 	else {
// 		throw new Error('Student not found!');
// 		}
// }
// showStudent('444-44-4444');


// var id = document.getElementById("default").value
// console.log(defaultValue(id)); 

// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
//   function alertFinished(){
//     console.log('Finished my homework');
//   }
//   doHomework('math', alertFinished);


//   function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   doHomework('math', function() {
//     console.log('Finished my homework');
//   });


// var friends = ["Mike", "Stacy", "Andy", "Rick"];
// friends.forEach(function (eachName, index){
// console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
// });


// 11-05-2019 example 
// example 1
// var num = 0;
// document.body.addEventListener("mousemove", function() {
//     console.log(num++);
//     });

// var num =0;
// document.body.addEventListener("mouseover", ()=>{
// console.log(num++)
// })

// example 2
var values = [0, 3, 2, 5, 7, 4, 8, 1];
values.sort(function(value1, value2){
	return value1 - value2;
});
console.log(values);

// var values = [0, 3, 2, 5, 7, 4, 8, 1];
// ((value1,value2)=>{value1-value2}) 
// values.sort()
// console.log(values)



// var friends = ["Mike", "Stacy", "Andy", "Rick"];
// friends.forEach(function (eachNames, index1){
// console.log(index1 + 1 + ". " + eachNames);
// });

// example 3
// var text = "Domo arigato!";
// console.log("Before defining functions");

// function useless(ninjaCallback) {
// 	 console.log("In useless function");
// 	return ninjaCallback();
// }
// function getText() {
// 	console.log("In getText function");
// 	return text;
// }

// console.log("Before making all the calls");
// console.log(useless(getText))
// console.log("After the calls have been made");

// es6
// var text = "Domo arigato!";
// console.log("Before defining functions");

// var useless = ninjaCallback=>{
// 	 console.log("In useless function");
// 	return ninjaCallback();
// }
// var getText= ()=>{
//     	console.log("In getText function");
//     	return text;
//     }
// console.log("Before making all the calls");
// console.log(useless(getText))
// console.log("After the calls have been made");


// example 4
// function myFun(){ return 1;}
// es6
// var myFun =()=> {return 1};
// console.log(myFun())

//  example 5
// function myFunctionName ( myFirstArg, mySecondArg ) {
//     myStatement1;
//     myStatement2;
// }
// console.log(myFunctionName())
// es6
// var myFunctionName = (myFirstArg,mySecondArg)=>{myStatement1;myStatement2};console.log(myFunctionName();

// example 5
// function samurai() {
// 	return "samurai here";
// }
// function ninja() {
// 	function hiddenNinja() {
// 		return "ninja here";
// 	}
// 	return hiddenNinja();
// }

// console.log(samurai())

// // es6
// var samurai=()=>{return "samurai here"};
// var ninja=()=>{var hiddenNinja =()=>{return "ninja here"};return hiddenNinja();};console.log(samurai());

// example 6
// function myFunctionDeclaration(){
// 	function innerFunction() {}
// }
// var myFunc = function(){};
// myFunc(function(){
// 	return function(){};
// });

// console.log(myFunctionDeclaration())

// // es6
// var myFunctionDeclaration=()=>{var innerFunction=()=>{}};
// var myFunc =()=>{};
// myFunc(()=>{return ()=>{}});
// console.log(myFunctionDeclaration());

// example7
// var values = [0, 3, 2, 5, 7, 4, 8, 1];
// values.sort(function(value1,value2){
// 	return value1 - value2;
// });
// //  es6
// var values = [0, 3, 2, 5, 7, 4, 8, 1];
// values.sort((value1,value2) => value1 - value2);
// console.log(values)


// example 8
// function greet(name){
// return "Greeting" + name
// }
// console.log(greet("  suneel kumar"))

// // es6
// // var greet = name => "Greetings " + name;
// // console.log(greet(`Haider`))

// example 9
// function greet(name){
//     var helloString = `Greetings`;
//     return helloString + name;
// };
// console.log(greet(" suneel kumar"))
// // es6
// var greet = name => {
//     var helloString = 'Greetings ';
//     return helloString + name;
//     };
    
//     console.log(greet(`HAIDER`))

// example 10



// es6
// function skulk(ninja) {
// 	return performAction(ninja, "skulking");
// }
// var performAction = function (person, action){
// 	return person + " - " + action;
// };
// var rule = daimyo => performAction(daimyo, "ruling");
// console.log(skulk("Hattori"));
// rule("Oda Nobunaga");

// // es6
// var skulk =ninja=>{return performAction(ninja, "skulking")};
// var performAction = (person,action)=>{return person + " - " + action};
// var rule = daimyo => performAction(daimyo, "ruling");
// console.log(skulk("Hattori"));
// console.log(rule("Oda Nobunaga"));


// 12-05-2019 example 

// example 1 constructor function

// a
// function Function(a,b,c){
//     console.log(a,b,c)
// }

// new Function("monday", "tuesday" , "wednesday");

// function Func2(d,e,f){
//     console.log(d,e,f)
// }
// new Func2("thursday", "Friday" , "saturday")

// b
// function Subject(english,math,physics){
//     console.log(english, math,physics)
// }
// new Subject(50,60,70);

// c
// class PlanClass{
//     constructor(name, email, contact){
//     console.log(name,email,contact)
       
//     }
// }
// new PlanClass("suneel" , "suneelsuther@gmail.com", "03443719437");


// example 2
// Generator functions 
// //   a
//   function *Generator_func(){
//       yield "one";
//       yield "two";
//       yield "three"
//   }
//   const callFunc = Generator_func();
//   console.log(callFunc.next().value)
//   console.log(callFunc.next().value)
//   console.log(callFunc.next().value)

// // b
// function *myFun(num1,num2,num3){
//     yield num1;
//     yield num2;
//     yield num3;
// }
// var call_myFunc = myFun(10,20,30);
// console.log(call_myFunc.next().value);
// console.log(call_myFunc.next().value);
// console.log(call_myFunc.next().value);


// // c
// function *myFun1(month1,month2){
//     yield month1;
//     yield month2;
// }
// var call_myFun = myFun1("january","febuary");
// var bolean =true;
// for (var i = 0; i < 2;i++){
// var next1 =call_myFun.next().value;

// // var next2 =call_myFun.next().value;
// if(next1 === "january"){
//     console.log("=> working correctly")
//     bolean = false
//     break
// }
// if(bolean === true){
//     console.log("=> second month show")
//     break
// }

// }

// example 3
// var array1 = [1,2,3,4,5,...[6,7,8,9]];
// console.log(array1)

// var array2 = [1,3,5,7,8,23,67,32];
// console.log(Math.max(...array2));

// var array3 = [0,-12,-14,2,-5,-46];
// console.log(Math.min(...array3));


// example 4
// // a
// function ask_age(age, remain){
//     remain = typeof remain === "undefined" ? ",i think 20 years" : remain;
//     return age + " " + remain;
//     }
//   console.log(ask_age("hey your age is"))
    
// // b
//   var arrow_func = (arg0,arg2)=>{
//     arg2= typeof arg2 === "undefined" ? "offcourse why not": arg2;
//     console.log(arg0)
//     console.log(arg2)
//       return arg0+""+arg2
//   }
//   console.log(arrow_func(`are you have intres in Ecmascript6, `));

//   c

// var new_func = (para1, para2)=>{
//     para2 = typeof para2=== "undefined" ? "function working":para2;
//     return para1 +``+para2;
// }
// function para1(name){
//     name="=> turnery "
//     return name
// }
// console.log(new_func(para1()))


// example 5
// // a
// const func1 = (nam, email="sk4252116@gmail.com")=>{return nam +""+ email}; console.log(func1("email => "));
// // b
// const func2 = (nam="03443719437", callNumber)=>{return callNumber+""+ nam};console.log(func2(undefined, "your call number=> "));
// // c
// const func3 = (name,rollNumber = "  108",course)=>{return name +""+ rollNumber +""+ course};console.log(func3("suneel kumar  ",undefined,"  web & mobile apps"))

// example 6
// a
// function doWork() {
// 	this.myVar = 'Some value';
// }
// console.log(doWork());

//  b




// c

// example7
// a
// var obj1 = {
//      bestTeacher: "umar aslam",
//      teachUs: function(){return this.bestTeacher}
// }
// console.log(obj1.teachUs());


// var obj2 = {
//          bestBook: "Ecmascript",
//          guideUs: function(){return this.bestBook}
//     }
//     console.log(" =>"+obj2.guideUs());


// var obj3 = {
//     bestBook: "Ecmascript book ",
//     helpus: function(){return "best way of learning ES6"}
// }
// console.log(" =>"+obj3.bestBook+obj3.helpus());

// example 8
// a
// function Cons1(arg1=1,arg2) {
// 	this.result =arg1+arg2;
// }
// var one = new Cons1(undefined,2);
// console.log(one.result);

// b
// function Cons2(arg3,arg4) {
// 	this.result =arg3+arg4;
// }
// var two = new Cons2("unity is ","strength");
// console.log(two.result);

// // c
// function Cons3(arg5,arg6) {
//     this.result =arg5;
//     this.collection= arg6="html+css+javascript+es6 = "
// }
// var three = new Cons3("developer");
// console.log(three.collection +" "+three.result);
