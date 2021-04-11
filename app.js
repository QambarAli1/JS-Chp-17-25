// Chp 17 to 25 Assighnments by Qambar Ali


// Arrays and Loops


// Q1

// var fruits = ["apple","mango","banana","grapes"];




// Q2

// var arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ],
//     arrText = '';

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         arrText += arr[i][j] + ' ';
//     }
//     document.write(arrText + "<br>");
//     arrText = '';
// }




// Q3


// for(var i=1; i<=10 ; i++){
//     document.write(i + "<br>")
// }





// Q4


// var numberForTable = +prompt("Enter number to print its table");
// var lengthOfTable = +prompt("Enter length for table");
// for(i=1; i <= lengthOfTable ; i++){
//     document.write(numberForTable + " x "+ i + " = "+(numberForTable*i)+"<br>")
// }




// Q5


// var fruits = ["apple","mango","banana","grapes","peach"];
// for(var i =0; i<fruits.length ; i++){
//     document.write(fruits[i]+"<br>")
// }

// for(var i =0; i<fruits.length ; i++){
//     document.write("Element at " + i + " index is " +fruits[i] + "<br>")
// }




// Q6



// document.write("<h1> Counting </h1>")
// for( var i=1; i<=15; i++){
//     document.write(i+" , ")
// }


// document.write("<h1> Reverse Counting </h1>");
// for(i=10 ; i>=0 ; i--){
//     document.write(i+" , ")
// }


// document.write("<h1> Even </h1>");
// for(var i =0 ; i <=20 ; i=i+2){
//     document.write(i+" , ")
// }


// document.write("<h1> Odd </h1>");
// for(var i =1 ; i <=20 ; i=i+2){
//     document.write(i+" , ")
// }


// document.write("<h1> Series </h1>");
// for(i=2 ; i<=20 ; i = i+2){
//     document.write(i+"k"+" , ")
// }




// Q7


// var itemsAvail = ["cake", "apple", "pie", "cookie", "chips", "patties"]
// var userItem = prompt("Enter item you want to purchase");
// var itemChk = userItem.toLowerCase();
// var a = true;
// for(i=0 ; i<itemsAvail.length ; i++){
//     if(itemChk===itemsAvail[i]){
//         a = false
//         document.write(itemChk + ' is available at index '+ i + " in our bakery");
//     }
// }
// if(a==true){
//     document.write("We are sorry " + itemChk + " is not available in our bakery");
// }




// Q8


// var A = [24, 53, 78, 91, 12];
// var largest = Math.max.apply(Math, A);
// document.write(largest + " is the largest number");



// Q9


// var A = [24, 53, 78, 91, 12];
// var smallest = Math.min.apply(Math, A);
// document.write(smallest + " is the smallest number");



// Q10


// for(i=5 ; i <= 100 ; i = i+5){
//     document.write(i +" , ")
// }





// STRING METHOD 

// Chp no 21 to 25



// Q1


// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " " + lastName;
// alert("Hello ! " + fullName);



// Q2


// var favPhone =  prompt("What is the name of your favourite phone");
// var nameLength = favPhone.length;
// document.write("My favourite phone is "+ favPhone +"<br>");
// document.write("String length is "+nameLength)



// Q3


// var nationality = "Pakistani";
// var a = nationality.indexOf("n");
// document.write("Index of n is "+a);




// Q4


// var greeting = "Hello World";
// var a = greeting.lastIndexOf("l");
// document.write("Last index of l is "+ a);




// Q5

// var nationality = "Pakistani";
// var a = nationality[3];
// document.write("Character at index 3 is : "+ a)




// Q6


// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " " + lastName;
// alert("Hello ! " + fullName);




// Q7


// var city = "Hyderabad"
// var a = city.slice(5,city.length);
// document.write("City : " + city +"<br>")
// var b = (document.write("After replacement :"+"Islam"+a));




// Q8


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) === "and") {
//         newMessage = message.slice(0, i) + "&" + message.slice(i + 3);
//         document.write(newMessage+" <br> ");
//         break;
//     }
// }




// Q9


// var num = "472";
// var a = typeof(num);
// document.write("Num : "+num +"<br>"+"Type : "+a );
// document.write("<br>")
// var b = parseInt(a);
// var c = typeof(b);
// document.write("Num : "+num +"<br>"+"Type : "+c)




// Q10


// var value = prompt("Enter any string to convert it into upper case");
// var a = value.toUpperCase();
// document.write("User Input : "+value + "<br>" + "Uppercase : " + a);




// Q11


// var value = prompt("Enter any string to convert it into upper case");
// var a = value.toLowerCase();
// document.write("User Input : "+value + "<br>" + "LotoLowerCase : " + a);



// Q12

// var num = 35.36;
// document.write("Num : "+num + "<br>");
// var a = num.toString();
// var c = a.slice(0,2);
// var d = a.slice(3,5)
// document.write("Result : " +c+d);




// Q13


// var specialChar = ["!","@","#","$","&"];
// var username = prompt("Enter Username");
// for(var i=0 ; i<specialChar.length ; i++){
//     for(var j =0 ; j <= i ;j++){
//         if(username[i]==specialChar[i]){
//             document.write("Enter a valid Name")
//         }
//     }
    
// }




// Q14


// var itemsAvail = ["cake", "apple", "pie", "cookie", "chips", "patties"]
// var userItem = prompt("Enter item you want to purchase");
// var itemChk = userItem.toLowerCase();
// var a = true;
// for(i=0 ; i<itemsAvail.length ; i++){
//     if(itemChk===itemsAvail[i]){
//         a = false
//         document.write(itemChk + ' is available at index '+ i + " in our bakery");
//     }
// }
// if(a==true){
//     document.write("We are sorry " + itemChk + " is not available in our bakery");
// }