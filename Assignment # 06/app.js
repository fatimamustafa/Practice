//CHAPTER 21-25


//Task # 01

// var firstName = prompt("Enter first name..")
// var lastName = prompt("Enter last name..")
// var fullName = fName + lName;
// alert("Welcome "+ fullName)

//Task # 02

// var mobileModel = prompt("Enter your favorite mobile..")
// var mobile_len = mobileModel.length;
// alert("My favorite phone is : "+ mobileModel)
// alert("Length of string is : "+mobile_len)

// Task # 03

// var word = "Pakistani";
// var index = word.indexOf('n')
// document.write('String : '+word+"<br>")
// document.write('Index of  " n " : '+index)

// Task 04

// var word = "Hello World";
// var index = word.lastIndexOf('l')
// document.write('String : '+word+ "<br>")
// document.write('LastIndex of  "l" is : '+ index + "<br>")

// Task 05

// var word ="Pakistan";
// var character = word.charAt(3)
// document.write("String : "+word+"<br>")
// document.write("Character at 3 : "+character)

// Task # 06

// var fName = prompt("Enter first name..")
// var lName = prompt("Enter last name..")
// var full_name = fName.concat(lName)
// alert("Welcome "+full_name)

// Task # 07

// var city ="Hyderabad";
// var city_replace = city.replace('Hyder','Islam')
// alert(city)
// alert(city_replace)

//Task # 08

// var message = 'Ali and Sami are best friends.They play cricket and football together.';
// var message_replace = message.replace(/and/g,'&')
// alert(message)
// alert(message_replace)

//Task # 09

// var num = '472'
// var convert = parseInt(num);
// document.write('Number :'+ num +"<br>"+"Type : Number"+"<br>")
// document.write('Number :'+ convert +"<br>"+"Type : String"+"<br>")

//Task # 10

// var word = prompt("Enter something..")
// var changeCase = word.toUpperCase();
// alert(word)
// alert(changeCase)


//Task # 11

// var word = prompt("Enter something in lower case");
// word = word.charAt(0).toUpperCase()+ word.substr(1).toLowerCase();
// alert(word)


//Task 12
// var num = 35.36 ;
// var convertNum = num.toString();
// var convert1 = convertNum.replace('.','')
// alert(convert1)

//Task 18

// var word = "The quick brown fox jumps over the lazy dog.".toLowerCase();
// console.log(word.match(/the/g))


// Task 14

// var check = prompt("Enter your item")
// check=check.toLowerCase();
// var items =  ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// if(items[0]==check){
//     alert("Your item is available at "+items.indexOf(items[0]))
// }
// else if(items[1]==check){
//     alert("Your item is available at "+items.indexOf(items[1]))
// }
// else if(items[2]==check){
//     alert("Your item is available at "+items.indexOf(items[2]))
// }
// else if(items[3]==check){
//     alert("Your item is available at "+items.indexOf(items[3]))
// }
// else if(items[4]==check){
//     alert("Your item is available at "+items.indexOf(items[4]))
// }
// else{
//     alert("Your item is not found")
// }

// var check = prompt("Enter your item")
// check=check.toLowerCase();
// var items =  ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// for(var i = 0; i<=items.length; i++){
//     if(items[i]===check){
//         alert("Your item is found at "+items.indexOf(items[i])+" index")        
//     }
// }

//Task 15

//var pass = prompt("Enter a valid password")
//     if(pass.charAt(0)>=0){
//         alert("Password cannot start with a number")
//     }
//      else if(pass.charCodeAt()<=64){
//         alert("Passowrd shouldn't contain special characters")
//     }
//     else if(pass.length<6){
//         alert("Password should have atleast 6 characters")
//     }


//Task 16

// var word = 'UIniversity of Karachi';
// word = word.split('');
// for (var i=0; i<word.length; i++){
//     console.log(word[i])
// }


//Task 17
// var inp = prompt("Enter something");
// for (var i=0; i<inp.length; i++){
//     if(i==inp.length-1){
//         console.log(inp[i])
//     }
// }



// CHAPTER 26 - 30

//Task 01

// var num = prompt("Enter a +ve decimal number");
// num = parseFloat(num);
// var round = Math.round(num)
// var floor = Math.floor(num);
// var ceilig = Math.ceil(num)
// document.write("Number: "+num+"<br>")
// document.write("Round: "+round+"<br>")
// document.write("Floor: "+ floor +"<br>")
// document.write("Ceil: "+ceilig)


// Task 02

// var num = prompt("Enter a -ve decimal number");
// num = parseFloat(num);
// var round = Math.round(num)
// var floor = Math.floor(num);
// var ceiling = Math.ceil(num)
// document.write("Number: "+num+"<br>")
// document.write("Round: "+round+"<br>")
// document.write("Floor: "+floor+"<br>")
// document.write("Ceil: "+ceiling)


//Task 03

// var num = prompt("Enter a number")
// var value = Math.abs(num);
// document.write("The absolute value of "+num+" is "+value)


//Task 04

// var randomValue = Math.random();
// var randomValue1 = Math.floor(randomValue*6);
// var dice = randomValue1+1;
// document.write("Random dice value: "+dice)


//Task 05
// var rnd = Math.random();
// var rnd1=Math.floor(rnd*2);
// var toss=rnd1+1;
// if(toss=='1'){
//     document.write(toss+" Result is Heads")

// }
// else{
//     document.write(toss+" Result is Tails")   
// }


//Task 06

// var randomNumber = Math.random();
// var randomNumber1 =  Math.floor(randomNumber*100);
// var num = randomNumber1+1;
// document.write('Random number between 1 - 100 is :'+num)

//Task 07

// var num = prompt("Enter your weight in kilograms")
// alert(num)

//Task 08

// var rnd = Math.random();
// var rnd1= Math.floor(rnd*10)
// var secretNum = rnd1+1;
// var guess = prompt('Guess the number between 1-10')
// guess=parseInt(guess)
// console.log(secretNum)
// if(guess==secretNum){
//     alert("Congratulations")
// }
// else{
//     alert('Try again')
// }



//CHAPTER 31 - 34

//Task 01

// var date = new Date();
// alert(date)

//Task 02

// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var n = months[date.getMonth()];
// alert(n)

//Task 03

// var date = new Date();
// var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// var d = days[date.getDay()];
// d = d.slice(0,3)
// alert(d)

//Task 04

// var date = new Date();
// var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// var d = days[date.getDay()];
// if(d=='Sunday'|| d=='Saturday'){
//     alert('Its Funday')
// }
// else{
//     alert('Normal Day')
// }

//Task 05

// var date = new Date();
// var day = date.getDate();
// if(day<='15'){
//     alert('First fifteen days of the month')
// }
// else{
//     alert('Last fifteen days')
// }

//Task 06

// var date= new Date();
// var mili = date.getTime()
// var min = mili / 100 /60
// document.write("DATE: "+date+"<br> Miliseconds"+mili+"<br> Minutes "+min)

//Task 07

// var date = new Date();
// var time = date.getHours();
// alert(time)
// if(time>=13){
//     alert('Its P.M')
// }
// else{
//     alert('Its A.M')
// }


//Task 08

// var date = new Date("December 31, 2020");
// alert(date)


//Task 09

// var end = new Date();
// var start = new Date("April 25,2020");
// var endTime = end.getTime();
// var startTime = start.getTime();
// var difference = end - start
// var finish = Math.floor(difference /(1000*60*60*24));
// document.write(finish+ " days have passed since 1st Ramadan")

//Task 

// var date =  new Date();
// var reference = new Date ("December 1, 2015");
// var endSec = date.getSeconds();
// var startSec = reference.getSeconds();
// var finish = endSec-startSec;
// document.write(finish)

//Task 10

// var curr =  new Date().getTime() 
// var refDate= new Date("January 1, 2015").getTime() ;
// var msDiff = curr - refDate;
// var diff = Math.floor(msDiff / 1000); 
// document.write(diff+" seconds have been elapsed between today and 1 Jan 2015")


//Task 13
// var age = parseInt(prompt("Enter your age"));
// var date = new Date().getFullYear()-age;
// document.write("Your age : "+ age)
// document.write("Your birthyear : "+ date)

//Task 14
// var date = new Date();
// var custName = "Rayyan Ali"
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var n = months[date.getMonth()];
// var numOfUnits = 410;
// var chPerUnits = 16;
// var latePayment = 350;
// var net_amount = numOfUnits * chPerUnits;
// var Gross_amount = net_amount + latePayment;
// document.write("<h1>K-ELECTRIC BILLS</h1>"+"<br>")
// document.write("Customer Name : "+custName+"<br>")
// document.write("Current Month : "+n+"<br>")
// document.write("Number of units : "+numOfUnits+"<br>");
// document.write("Charges per unit :"+ chPerUnits+"<br>");
// document.write("Net amount payable (within due date) :"+ net_amount+"<br>");
// document.write("Late Payment : "+ latePayment+"<br>");
// document.write("Gross Payment : "+ Gross_amount);

//Task 12

// var date = new Date();
// var na = new Date()
// var sub = na.getFullYear()-100;
// var ne = na.setFullYear(sub);
// document.write(date+"<br>");
// document.write(na);


//Task 11

// var date = new Date();
// var na = new Date()
// var sub = na.getHours()-1;
// var ne = na.setHours(sub);
// document.write(date+"<br>");
// document.write(na);




//CHAPTER 35 - 38

//Task 01

// function date() {
//     var dt = new Date();
//     document.write(dt)
// }
//date();


//Task 02

// function greet (){
    //     var fName = prompt("Enter first name")
    //     var lName = prompt("Enter last name")
    //     var full_name = fName+lName;
    //     alert("Hello "+full_name)
    // }
// greet();


//Task 03

// function sum (){
//     var num1=parseInt(prompt("Enter first value"))
//     var num2=parseInt(prompt("Enter second value"))
//     var res = num1+num2;
//     return res;
// }
// sum();


//Task 04

// function Calculator(){
//     var num1 = parseInt(prompt("Enter value 1"))
//     var num2 = parseInt(prompt("Enter value 2"))
//     var op = prompt("Enter operator")
//     if (op=='+'){
//         res = num1+num2;
//         alert(res)
//     }
//     else if(op=='-'){
//         res=num2-num1;
//         alert(res)
//     }
//     else if(op=='*'){
//         res = num1 * num2
//         alert(res)
//     }
// }
// Calculator();


//Task  05

// function square (num){
//     return num * num;
// }
// console.log(square(10))


//Task 06

// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// var n = 4;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);


//Task 07

// function counting() {
//     var start = parseInt(prompt("Start"))
//     var end = parseInt(prompt("End"))
//     for (var i = start; i<=end; i++){
//         console.log(i)
//     }
// }
// counting()

//Task 08

// function Hypotenuse(){
//     var base = parseInt(prompt("Enter base value"));
//     var perpendicular = parseInt(prompt("Enter perpendicular value"));
//     var hyp = Math.pow(base,2) * Math.pow(perpendicular,2)
//      function square() {
//         return Math.pow(hyp,2)   
//     } 
//         return square();
// }
// console.log(Hypotenuse())

//Task 09

// function rectangle (width=5, height=6){
//         var area = width * height;
//         return area;
// }
// console.log(rectangle())


//Task 10

// function palindrome (){
//     var check = prompt("Enter a word to check palindrome");
//     var pal = check.split('').reverse().join('')
//     if(pal==check){
//         alert(check+" is palindrome")
//     }
//     else{
//         alert("This is not palindrome")
//     }
// }
// palindrome();

//Task 11

// function convert(str) {
//     var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(convert('the quick brown fox'));


//Task 13

// function occurence(word,letter) {
//     console.log(word.match(/o/g))    
// }
// occurence('JSResourceS.com','o')

//Task 12

// function longestWord(string) {
//     var str = string.split(" ");
//     console.log(str)
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             console.log(longest)
//             word = str[i];
//         }
//     }
//     return word;
// }
// console.log(longestWord("Web Development Tutorial"))


//Task 14

// function calcCircumference(){
//     var rad = 5;
//     var pi = 3.142;
//     var calc = 2 * pi * rad;
//     return calc; 
// }
// document.write("The circumference of a circle is :"+calcCircumference()+"<br>")

// function calcArea (){
//     var rad = 4;
//     var pi = 3.142;
//     var calc = pi * Math.pow(rad,2)
//     return calc
// }
// document.write("The Area of a circle is :"+calcArea())

