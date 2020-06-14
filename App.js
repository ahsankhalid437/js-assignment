//--------------------------------CHAPTER 01(ALERT)-----------------------------------------
//Task 01 
alert('WELCOME WEBSITE USERS')

//TASK O2
alert('Error!please enter a valid user password')

//TASK 03
alert('Welcome to JS land \n Happy coding!')

//TASK 04
alert('Welcome to JS land')
alert('Happy coding! \nprevent this page from creating additional dialogues')

//TASK 05
alert('hello! I can run my JS code on Browser Console')

//TASK 07 
//done in html file, attached with it.

//------------------------------CHAPTER 02(VARIABLES FOR STRING)--------------------------
//Task 01 
var username;

//TASK 02
var myName;
myName = "Ahsan Khalid";

//TASK 03
var message = 'HELLO WORLD';
alert(message);

//TASK 04
var student = 'John Doe';
var age = 15;
var certified = 'Certified Mobile Application Development';
alert (student);
alert(age + " " + 'years old');
alert(certified);

//TASK 05
alert('PIZZA\n PIZZ\n PIZ\n PI\n P');

//TASK 06
var email = "ahsanshah437@gmail.com";
alert('my email is' + "  " + email);

//TASK 07
var book = "A smarter way to learn javascript";
alert('I am trying to learn from book' + " " + book)

 //TASK 08
document.write("Yah! I can write Html content in javascript");

//TASK 09
var var1 = ('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬');
alert(var1);

//-------------------------------CHAPTER 03(VARIABLE FOR NUMBERS)----------------------------
//Task 01 
var age = 15;
alert('I am' + " " + age + " " + 'years old');

//TASK 02
var visit;
visit = 15;
alert('you have visited this site' + " " + visit + " " + 'times');

//TASK 03
var birthYear;
birthYear = 1998;
alert('My birth year is' + " " + birthYear + ' \nData type of my declared variable is number')

//TASK 04
var visitors_name = prompt("What's your Name?");
var product_title = prompt('Mention your product title');
var quantity = prompt("Your Product Quantity");
document.write(visitors_name + " " + 'ordered' + " " + quantity + " " + product_title + " " + 'from XYZ CLOTING STORE');

//-----------------CHAPTER 04(VARIABLE NAMES: LEGAL AND ILLEGAL)----------------------------------
//Task 01 
var var01, var02, var03;

//TASK 02
//legal variable declaration
var var01;
var $var;
var var0235678920;
var aBn;
var _var2;

//illegal variable declaration 
var %var ;
var 2var ;
var ?var ;
var 001;
var &var ;

//TASK 03

document.write(' <h3>Rules For naming JS variables</h3> <br/> Variables names can only contain, number, $ and _. <br/> Variable must begin with a letter, $ or _ For example $name, _name and name <br/> Variables names are case sensitive <br/> Variable names should not be JS keywords.');


//---------------------------------CHAPTER 05(MATH EXPRESSION)--------------------------------------------------
//Task 01 
var a = 3;
var b = 5;
var c;
c = a + b;
document.write('<br/> Sum of 3 and 5 is' + " " + c);

//TASK 02
//subtraction
var a = 3;
var b = 5;
var c;
c = a - b;
document.write('<br/> Subtraction of 3 and 5 is' + " " + c);
//multiplication
var a = 3;
var b = 5;
var c;
c = a * b;
document.write(' <br/> Multiplication of 3 and 5 is' + " " + c);
//division
var a = 3;
var b = 5;
var c;
c = a / b;
document.write(' <br/> Division of 3 and 5 is' + " " + c);
//Modulus
var a = 3;
var b = 5;
var c;
c = a % b;
document.write('<br/> Modulous of 3 and 5 is' + " " + c);

//TASK 03
var a;
document.write('<br/> Value after Variable declaration is undefined');
a = 5;
document.write('<br/> Variable value' + " " + a);
a++;
document.write('<br/> Varaible after decreamnet' + " " + a);
a = a + 7;
document.write('<br/> Value after adding 7 is' + " " + a);
a = a - 1;
document.write('<br/> value after decereament become' + " " + a);
a = a % 3;
document.write('<br/> The remainder is' + " " + a);

//TASK 04
var ticket_price = 600;
var total = 600 * 5;
document.write('Total Cost to buy 5 tickets to a movie is' + " " + total);

//TASK 05
document.write('table of 2');
var a;
for (a = 1; a <= 10; a++) {
    document.write(' <br/> 2 x' + " " + a + " " + '=' + " " + a * 2);
}

//TASK 06
var F = 70;
var C = 25;
var centigrade = (F - 32) * 5 / 9;
var fahrenhiet = (C * 9 / 5) + 32;
document.write('<br/> 25 Degree Centigrade is' + " " + centigrade);
document.write('<br/> 70 Degree Fahrenhiet is' + " " + fahrenhiet);

//TASK 07
document.write('<h1>Shopping cart </h1> <br/>');
var item1 = 650;
document.write(' <br/> Price of item 1 is ' + " " + item1);
var item1_quantity = 3;
document.write(' <br/> Quantity of item 1 is ' + " " + item1_quantity);
var total1 = "";
total1 = item1 * item1_quantity;
var item2 = 100;
document.write(' <br/> Price of item 2 is ' + " " + item2);
var item2_quantity = 7;
document.write(' <br/> Quantity of item 2 is ' + " " + item2_quantity);
var total2 = "";
total2 = item2 * item2_quantity;
var main = "";
main = total1 + total2 + ship;
var ship = 100;
document.write(' <br/> Shpping charges' + " " + ship);
document.write('  <br/> Total cost of your order is' + "" + main);

//TASK 08
var marks = 804;
var tot = 980;
var percentage = " ";
percentage = 804 / 980 * 100;
document.write('<h1> Mark Sheet </h1>')
document.write(' <br/> Total Marks' + " " + tot);
document.write(' <br/> Marks Obtainced' + " " + marks);
document.write(' <br/> Percentage' + " " + percentage + "" + '%');

//TASK 09
var dol = 10;
var sr = 25;
var dol_pak = "";
var sr_pak = "";
dol_pak = 10 * 104.80;
sr_pak = 25 * 28;
var tota = "";
tota = dol_pak + sr_pak;
document.write('<br/> <h1> Currency in PKR </h1>');
document.write('<br/>Total Currency in PKR:' + " " + tota);

//TASK 10
var number = 2 + 5 * 10 / 2;

//TASK 11
document.write('<br/>  <h1>Age Calculator</h1>');
var year = 2016;
var born_year = 1992;
var age = "";
age = year - born_year;
document.write('<br/> Recent Year: ' + " " + year);
document.write('<br/> Birth Year: ' + " " + born_year);
document.write('<br/> Your age is:' + " " + age);

//TASK 12
document.write('<h1> Geometrizer </h1>');
var radius = 20;
document.write('<br/> Radius of a Circle:' + "" + radius);
var pi = 3.142;
var circum = "";
circum = 2 * radius * pi;
document.write('<br/> the Circumference is:' + " " + circum);
var area = "";
area = pi * radius * radius;
document.write(' <br/> THe area is :' + " " + area);

//TASK 13
document.write('<h1> The Lifetime Supply Calculator </h1>');
var snack = "Chocolate Chip";
document.write('<br/> Favourite Snacks:' + " " + snack);
var C_age = 15;
document.write('<br/> Your Current age:' + " " + C_age);
var M_age = 65;
document.write('<br/> Estimated Maximum age:' + " " + M_age);
var amount_snack = 3;
document.write('<br/> Amount of snacks per day:' + " " + amount_snack);
document.write(' <br/> you will need 150' + " " + snack + " " + ' to last you until the ripe old age' + " " + C_age);


//-----------------------------------CHAPTER 06-09(MATH EXPTRESSIONS)----------------------------------
//Task 01 
var a = 10;
document.write('<br/> Results:');
document.write('<br/> the value of a is:' + " " + a);
++a;
document.write('<br/> the value of ++a is:' + " " + a);
document.write('<br/> /now the value of a is' + " " + a);
var z = "";
z = a++;
document.write('<br/> the value of a++ is:' + " " + z);
document.write('<br/> /now the value of a is' + " " + a);
var za = "";
za = --a;
document.write('<br/> the value of --a is:' + " " + za);
document.write('<br/> /now the value of a is' + " " + a);
var zaa = "";
zaa = a--;
document.write('<br/> the value of a-- is:' + " " + zaa);
document.write('<br/> /now the value of a is' + " " + a);

//TASK 02
document.write(' <br/> a is: 2');
document.write('<br/> b is: 1');
document.write(' <br/> Result at first stage is: 1');
document.write(' <br/> Result at first stage is: 1-0= 1');
document.write(' <br/> Result at first stage is: 1-0+1 = 2');
document.write(' <br/> Final stage is: 3');


//TASK 03
var name = prompt("Enter your name: ");
alert("Welcome" + " " + name);

//TASK 04
//missing in pdf

//TASK 05
var x = +prompt("Enter Number: ");
if (x > 0) {
    for (var xa = 1; xa <= 10; xa++) {
        document.write(' <br/>' + x + "" + 'x' + " " + xa + " " + '=' + " " + x * xa);
    }
}
else if (x === 0) {
    for (var xa = 1; xa <= 10; xa++) {
        document.write(' <br/>' + 5 + "" + 'x' + " " + xa + " " + '=' + " " + 5 * xa);
    }
}

//TASK 06
var subject1 = prompt ('enter subject');
var subject2 = prompt ('enter subject');
var subject3 = prompt ('enter subject');

var total_marks = 100;

var obtained1 = +prompt ('Enter number');
var obtained2 = +prompt ('Enter number');
var obtained3 = +prompt ('Enter number');

var percentage1= obtained1/total_marks*100;
var percentage2= obtained2/total_marks*100;
var percentage3= obtained3/total_marks*100;

var totalsubjects= obtained1 + obtained2 + obtained3;
var totaltotal = total_marks *3;
var percentagetotal= percentage1 + percentage2 + percentage3;

document.write('<br/>'+ 'English'
 + "    " +
'Total Marks' + "    " + 
'Obtained Marks' + "    " + 'Percenatge'); 
document.write('<br/>' +subject1 + "           " + total_marks + "         " + obtained1 + "           " + percentage1 + "%");
document.write('<br/>' +subject2 + "           " + total_marks + "          " + obtained2 + "           " + percentage2+ "%");
document.write('<br/>' +subject3 + "           " + total_marks + "          " + obtained3 + "           " + percentage3+ "%");
document.write('<br/>' + "         "  + totaltotal+ "       " + totalsubjects + "      " + percentagetotal + "%");


//-----------------------------------CHAPTER 09--> 11(USER INPUT AND CONDITIONAL STATEMENT)----------------------------------
//Task 01 
var kar = prompt('Enter City Name :');
if (kar === 'karachi') {
    document.write('Welcome to the city of Light');
}

//TASK 02
var gender = prompt('Enter your Gender');
if (gender == 'female') {
    document.write('Good Morning Maam');
}
else if (gender == 'male') {
    document.write('Good Morning sir');
}

//TASK 03
var traffic = prompt ('Enter color name');
if (traffic === 'red')
{
    alert('Must stop');
}
else if ( traffic === 'green')
{
    alert('move now!');
}
else if (traffic === 'yellow')
{
    alert('Ready to move');
}


//TASK 04
var petrol = +prompt('enter remaining fuel?');
if (petrol < 0.25) {
    document.write('Please refill the fuel in your car');
}

//TASK 05
document.write('<br/> Alert displayed there');

document.write('<br/> given condition for variable a is true');
document.write('<br/> condition 2 is true');
document.write('<br/> condition 4 is true');
document.write('<br/> The cost equals');
document.write('<br/> True');
document.write('<br/> car is smaller than cat');

//TASK 06
var enter_marks = +prompt ('Enter Marks');
var percentage_of_marks = "";
percentage_of_marks=    enter_marks/total_of_marks* 100;
var total_of_marks = 100;
if (percentage_of_marks >= 80 )
{
    document.write ('your grade is A-one');
    document.write ('<br/> your Remarks is Excellent');
}
else if (percentage_of_marks >= 70 )
{
    document.write ('your grade is A');
    document.write ('<br/> your Remarks is Good');
}
else if (percentage_of_marks >= 60 )
{
    document.write ('your grade is B');
    document.write ('<br/> your Remarks is You need to improve');
}
else if (percentage_of_marks < 60 )
{
    document.write ('your grade is F');
    document.write ('<br/> your Remarks is Sorry');
}
//TASK 07
var guess = 6;
var answer = +prompt('guess the number');
if (answer === guess) {
    alert('Bingo');
}
else if (answer == 7) {
    alert('Close enough to the correct answer”');
}

//TASK 08
var divisible = +prompt('Enter the Number');
if (divisible % 3 === 0) {
    alert('Yes! this number is divisible by 3');
}
else if (divisible % 3 === 1) {
    alert('No! this is not divisible by 3');
}

//TASK 09
var divi = +prompt('Enter the Number');
if (divi % 2 === 0) {
    alert('Yes! this is an Even number');
}
else if (divi % 2 === 1) {
    alert('No! this is an Odd Number');
}

//TASK 10
var T = +prompt('Enter temperature');
if (T > 40) {
    alert('It is too hot outside');
}
else if (T > 30) {
    alert('“The Weather today is Normal');
}
else if (T > 20) {
    alert('“Today’s Weather is cool');
}
else if (T > 10) {
    alert('! Today’s weather is so Cool');
}

//TASK 11
var one = +prompt('Enter Number one');
var operator = prompt('Enter Operator');
var second = +prompt('Enter Number Second');
if (operator == '+') {
    alert(one + second);
}
else if (operator == '-') {
    alert(one - second);
}
else if (operator == '*') {
    alert(one * second);
}
else if (operator == '/') {
    alert(one / second);
}
else if (operator == '%') {
    alert(one % second);
}


//-------------------CHAPTER 12-13(IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS )----------------------------------
//Task 01 
var chs = ("Enter any character:");
if (chs >= 65 && chs <= 90)
{
    alert("Character is a capital letter");
}
else if (chs >= 97 && chs <= 122)
{
    alert("Character is a small letter");
}
else if (chs >= 48 && chs <= 57)
{
    alert("Character is a digit");
}

//TASK 02
var sl1 = +prompt ('Enter Number');
var sl2 = +prompt ('Enter Number');
if( sl1 > sl2)
{
    alert(sl1 + ' '+ 'is the largest number');
}
else if( sl2 > sl1)
{
    alert(sl2 + ' '+ 'is the largest number');
}

//TASK 03
var integer = +prompt('Enter Number');
if (integer > 0)
{
    alert('this is Positive Number');
}
else if (integer === 0)
{
    alert('this is Zero Number');
}
else if (integer < 0)
{
    alert('this is Negative Number');
}

//TASK 04
var vowel = prompt ('Enter?');
if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o'|| vowel == 'u')
{
    alert('True');
}
else if (vowel != 'a' || vowel != 'e' || vowel != 'i' || vowel != 'o'|| vowel != 'u')
{
    alert('False');
}

//TASK 05
var pass1 = '1234ahsan'
var password = prompt ('Enter Password');
if ( password === '1234ahsan')
{
    alert('“Correct! The password you entered matches the original password”. ');
}
else if ( password != '1234ahsan')
{
    alert('Incorrect password');
}

//TASK 06
var greeting;
var hour = 13; 
if (hour < 18) 
{ 
    greeting = "Good day"; 
} 
else 
{
    greeting = "Good evening"; 
}

//----------=--------------------------------CHAPTER 14-16(ARRAY)---------------------------------------------
//TASK 02
var arrayA = []
var arrayB = new Array()

//TASK 03
var string1=['stringOne', 'stringTwo', 'stringThree', 'StringFour', 'StringFive'];

//TASK 04
var numb = [1,2,3,4,5,6,7,8,9,10];

//TASK 05
var boolean = [0,1];

//TASK 06
var mixVariable = [1, 'one', 2, 'two', 3, 'three', '$'];

//TASK 07
var education = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS','M.PHIL', 'pHD'];
document.write('<h1> Qualification </h1>');
for (var i = 0; i<education.length; i++)
{
    document.write('<br/>' , education[i]);
}

//TASK 08
var studentss = ['Michael', 'John', 'Tony'];
var markss = [320,230,480];
var totalss = 500;
for (var jk = 0; jk<3; jk++)
{
    document.write('<br/> The score of' + " " + studentss[jk] + ' ' + 'is' + " " + markss[jk] + "" + 
    'The percentage is' + " " + markss[jk]/totalss*100 + " " + '%');
}

//TASK 09
var color = ['red', 'violet'];
//A
color.unshift(prompt('Enter your color'));
document.write('<br/>' ,color);
//B
color.push(prompt('Enter your color'));
document.write('<br/>' ,color);
//C
color.unshift(prompt('Enter your color'));
color.unshift(prompt('Enter your color'));
document.write('<br/>' ,color);
//D
color.shift();
document.write('<br/>' ,color);
//E
color.pop();
document.write('<br/>' ,color);
//F
var col = prompt ("enter color");
var position = +prompt ('enter position');
color.splice(position,1,col);
document.write('<br/>' ,color);
//G
var position = +prompt ('enter position');
var valuetobedelete = +prompt ('enter position');
color.splice(position,valuetobedelete);
document.write('<br/>' ,color);

//TASK 10
var asc = [320, 230, 480, 120];
var sorted= asc.sort();
document.write(sorted);

//TASK 11
var city = ['Karachi', 'Lahore', 'Islamad', 'Quetta', 'Peshawar'];
var selected = city.slice(2,4);
document.write(selected);

//TASK 12
var cat = ['this', 'is', 'my', 'cat'];
var joining = cat.join();
document.write(joining);

//TASK 13
var fifo = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);

//TASK 14
var lifo = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);

//------------------------------------------CHAPTER 17-20(ARRAYS AND LOOP)---------------------------------------------
//Task 01 
var multiarray1  = [ [],[]];

//TASK 02
var multiarray2 = [ 
[0,1,2,3],
[1,0,1,2],
[2,1,0,1]
];

//TASK 03
for (var i = 1; i<=10; i++)
{
    document.write('<br/>' + i);
}

//TASK 04
var x = +prompt("Enter a Number to show its multiplication table: ");
var len = +prompt("Enter the lenght for multiplication table: ");
if (x > 0) {
    for (var xa = 1; xa <= len; xa++) {
        document.write(' <br/>' + x + "" + 'x' + " " + xa + " " + '=' + " " + x * xa);
    }
}

//TASK 05
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'] ;
for ( var fruit= 0; fruit < fruits.length; fruit ++)
{
document.write('<br/> Element at index' + fruit + 'is' + fruits[fruit]);
}

//TASK 06
document.write('<br/> <h3> Counting: </h3>');
var counting;
for (counting = 1 ; counting <=15 ; counting++)
{
    document.write( counting + ',');
}
document.write('<br/> <h3> Reverse Counting: </h3>');
for (counting = 15 ; counting >=1 ; counting++)
{
    document.write( counting + ',');
}
document.write('<br/> <h3> Even: </h3>');
for (counting = 0 ; counting <=20 ; counting+2)
{
    document.write(counting + ',');
}
document.write('<br/> <h3> Odd: </h3>');
for (counting = 1 ; counting <=19 ; counting+1)
{
    document.write( counting + ',');
}
document.write('<br/> <h3> Series: </h3>');
for (counting = 2 ; counting <=20 ; counting+2)
{
    document.write(counting + 'K');
}
//TASK 07
var user = prompt ('Welcome to ABC bakery, what do you want to order sir/ maam');
var Arrr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var bakery;
for (bakery= 0; bakery< Arrr.length; bakery ++) 
{
if ( Arrr[bakery]=== user )
{
    alert(user +" " +  'available at index' + " " + bakery + 'in our bakery');
} 
else
{
    alert('we are sorry!' + " " + user + " " + 'is not available in our bakery');
}
}

//TASK 08
var array =[24, 53, 78, 91, 12];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];}}
console.log(largest);

//TASK 09
const arr=[24, 53, 78, 91, 12];
const min = Math.min(...arr)
console.log(min)

//TASK 10
for ( var i=5; i<=100; i=i+5)
{
    document.write(i + " ");
}





