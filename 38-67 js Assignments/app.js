// chapter 38-42

// Task 1

function power(a,b) {
    var power = a;
    for (let index = 0; index < b-1; index++) {
        power *=a;
    }
    return document.write(a+" raise to "+b+" is : " + power);
}

power(9,12);

// Task 2



var inputYear = +prompt("Enter an year to find out it's Leap year or not")

function leapYear(a) {
    if (a%4 === 0) {
        if (a%100 === 0) {
            if (a%400 === 0) {
                return document.write("It's leap Year");    

            } else {
                return document.write("It's not a leap Year");

            }
    
        } else {
            return document.write("It's leap Year");    
        }

    } else {
        return document.write("It's not a leap Year");

    }
}

leapYear(inputYear);



// Task 3

var a = +prompt("Enter value of a side of triangle");
var b = +prompt("Enter value of b side of triangle");
var c = +prompt("Enter value of c side of triangle");

function calcS(a,b,c){
    var s= (a+b+c)/2;
    return s;
}
function area(a,b,c){
    var s= calcS(a,b,c);
    console.log("s is :" + s);
    var S = s*(s-a)*(s-b)*(s-c);
    return (document.write("Area  of triangle is : "+S));
}
area(a,b,c);

// Task 4

var eng = +prompt("Enter marks of English out of 100");
var phy = +prompt("Enter marks of Physics out of 100");
var chem = +prompt("Enter marks of Chemistry out of 100");
var total = 300;




function avergCalc(a,b,c){
    var m1 = a;
    var m2 = b;
    var m3 = c;
    var sum = m1+m2+m3;
    var averg = sum/3;
    console.log(averg)

    var f = averg.toFixed(2);
    return f;
}
function percenCalcu(i,j,k,total){
    var mi1 = i;
    var mi2 = j;
    var mi3 = k;
    var mt = total;
    var sum = mi1+mi2+mi3;
    var div = (sum/mt)*100;
    var p = Math.round(div,2);
    return p;
}

function mainFunction(eng,phy,chem,total) {
    var mark1 = eng;
    var mark2 = phy;
    var mark3 = chem;
    var markt = total;
    var avclac = avergCalc(mark1,mark2,mark3);
    var pe = percenCalcu(mark1,mark2,mark3,markt);
    document.write("averge marks :  "+avclac+"  <br> percentage is : "+pe +"&#37;");
}
mainFunction(eng,phy,chem,total);



// Task 5

var ch = prompt("Enter A charter to find it's index in string : PAKISTAN");
ch = ch.toUpperCase();
var str = 'PAKISTAN';
function findC(c,s) {
    var che= c;
    var string =s;
    var pos='';
    for (let index = 0; index < string.length; index++) {
        if (string[index]===che) {
            pos=index;
            break;
            
        }
        
    }
    return pos;
}

document.write("Index of "+ch+" is "+findC(ch,str));

// Task 6

var sen = prompt("Enter Sentece to delete all vowels form that");
sen = sen.toUpperCase();


function delVowel(sentence) {

    var s = sentence;
    var arr =s.split('');
    if (s.length<25) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index]=='A'||arr[index]=='E'||arr[index]=='I'||arr[index]=='O'||arr[index]=='U') {
                arr.splice(index,1);
            }
        }
        
        var stri =arr.join('');
        return stri;
    } else {
        alert("Your sentence must be less than 25 characters ");
    }
  
}

document.write("Input Sentece "+sen+"<br> After Removal of Vowel : "+delVowel(sen));

// Task 7

var sen = prompt("Enter Sentece to find all succession vowels form that");
sen = sen.toUpperCase();
var newArray = [];
var seni = "";
function delVowel(sentence) {

    var s = sentence;
    var arr = s.split('');
    var count = 0;
    for (let index = 0; index < arr.length - 1; index++) {
        var svalue = arr[index];
        var s1value = arr[index + 1];
        var set = svalue + s1value;
        switch (set) {
            case 'AE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'II':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UU':
                count=count+1;
                newArray.push(set);
                break;
        }
    }

    var stri = newArray.join(',');
    seni = stri;
    return count;

}

document.write("Input Sentece " + sen +"<br>Number succession Vowel  : "+ delVowel(sen) );
document.write("<br> succession Voweles  : "+seni);

// Task 8

var val = +prompt("Enter Distance Between Two Cities");


function calcMeters(val) {
    
    var meter= val*1000;
    return meter;
}
function calcFeet(val) {
    var foot= val*3280.84;
   return foot;
}
function calcCenti(val) {
   var centi= val*100000;
   return centi;
}
function CalcInch(val) {
    var inch= val*39370;
   return inch;
}

document.write("Distance in Meteres : "+calcMeters(val)+"<br> Distance in Feet's : "+calcFeet(val));
document.write("<br> Distance in inches : "+CalcInch(val)+"<br> Distance in centiMeteres : "+calcCenti(val));

// Task 9

var emp = +prompt("Enter numebr of  employes");

var timeover = 0;



function calcpay(emp) {
    var e = emp;
    var rate = 12;
    var overtimepay =0;

    for (let index = 0; index < e; index++) {
        var workinghours =  +prompt("Enter an working hours of employe "+(index+1));
        if (workinghours>40) {
            var overtime = workinghours- 40;
            timeover +=overtime;
            p=overtime*rate;
            overtimepay +=p;
        }
    }
    return overtimepay;
}

var payemntOfEmp = calcpay(emp);
document.write("Number of Employes "+emp+ "<br> Overtime is : "+timeover+" hours <br> Ovetime Payment Rs : "+payemntOfEmp +" PKR");


// Task 10

var amount = +prompt("Enter Amount to Withdraw");

function notes(a) {
    var val  = a;
    var Hnotes =0;
    var Fnotes=0;
    var Tnotes=0;
    for (let index = 1; index < val; index++) {
        if(val >=10) {
            if(val >=50) {
                if (val>= 100) {
                    Hnotes   = parseInt(val/100);
                    val = val - (Hnotes*100);
                    document.write("Notes of 100's : " +Hnotes + "<br>");
                }
                else{
                    Fnotes = parseInt(val/50);
                    val = val - (Fnotes*50);
                    document.write("Notes of 50's : " +Fnotes +"<br>");
                } 
            }
            else{
                Tnotes = parseInt(val/10);
                val = val - (Tnotes*10);
                document.write("Notes of 10's : " +Tnotes+"<br>");
            }
        } 
    }
    document.write("Chiller is : " +val+"<br>");   
}
notes(amount);Task

// Chapter 43-48 
// Task 1

function link() {
    alert("Google");
}

// Task 2

function purchase(str){
    alert("thanks for purchasing " + str);

}

// Task 3

function remove(v) {
    console.log(v);
    var td = v.parentNode; 
    var tr = td.parentNode; // the row to be removed
    var  p = tr.parentNode;
    p.removeChild(tr);
}

// Task 4

function change(value) {
        value.src = "data:image/jpeg;";
}
function change1(value) {
    value.src ="data:image/jpeg;";
}

//Task 5


function increase() {
    var ele = document.getElementById('counter');
    ele.innerHTML = parseInt(ele.innerText)+1;

}
function decrease() {
    
    var ele = document.getElementById('counter');
    ele.innerHTML = parseInt(ele.innerText)-1;

}

// Chapter 49-52
// Task 1

function showData() {
    var name = document.getElementById("name");
    name = name.value;
    var email = document.getElementById("email");
    email = email.value;
    var age = document.getElementById("age");
    age = age.value;

    
alert(name);
alert(age);
alert(email);

}

//Task 2

function readmore1(){
    var ele = document.getElementById('para1');
    var details = " Water resistant to a depth of 4 meters for up to 30 minutes25.8” or 6.5” Super Retina XDR display3"
    ele.innerHTML += details;
    var btn1 = document.getElementById('btn');
    btn1.disabled  =true;
}
function readmore() {
    var el = document.getElementById('para2');
    var details = " Water resistant to a depth of 4 meters for up to 30 minutes25.8” or 6.5” Super Retina XDR display3"
    el.innerHTML += details;
    var btn = document.getElementById('btn1');
    btn.disabled  =true;
}


// Task 3


var insertbtn  = document.getElementById("insertbtn"); 
var form = document.getElementById("myform");
form.hidden = true;

function insertNewData(params) {
    form.hidden = false;
    insertbtn.hidden =true;
}
function insertData(){
    var students  = document.getElementById("students"); 
    var tr = students.insertRow();
    var cell1 = tr.insertCell();
    var cell2 = tr.insertCell();
    var cell3 = tr.insertCell();
    var cell4 = tr.insertCell();
    var cell5 = tr.insertCell();

    var btn = document.createElement("BUTTON");
    btn.innerHTML="Delete";
    btn.setAttribute("onclick", "remove(this);");

    var btn1 = document.createElement("BUTTON");
    btn1.innerHTML="Edit";
    btn1.setAttribute("onclick", "edit(this);");

    cell1.innerHTML =  document.getElementById("id").value;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("class").value;
    cell4.appendChild(btn);
    cell5.appendChild(btn1);
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("class").value="";
    form.hidden = true;
    insertbtn.hidden=false;
    
}

function remove(v) {
    var td = v.parentNode; 
    var tr = td.parentNode; // the row to be removed
    var  p = tr.parentNode;
    p.removeChild(tr);
}
function edit(w) {
    insertbtn.hidden=true;

    var td = w.parentNode; 
    var tr = td.parentNode; // the row to be Edited

    var fc = tr.childNodes[0].innerHTML;
    var fd = tr.childNodes[1].innerHTML;
    var fe = tr.childNodes[2].innerHTML;

    var i = document.getElementById('id');
    i.setAttribute('value',fc);
    var n = document.getElementById('name');
    n.setAttribute('value',fd);
    var c= document.getElementById('class');
    c.setAttribute('value',fe);
    form.hidden = false;
    document.getElementById("id").value = fc;
    document.getElementById("name").value = fd;
    document.getElementById("class").value=fe;

    var  p = tr.parentNode;
    p.removeChild(tr);
    
    
}
// Chapter 59 - 67
//  Task


// 1.
var mainContent = document.getElementById('main-content');


// 2.
var nodes = mainContent.childNodes;

document.write("Child nodes of main-content Element <br>");
for (let index = 0; index < nodes.length; index++) {
    var i = nodes[index].innerHTML;
    // var i = nodes[index];
    // if u want to see the what element it is then uncomment the above commented line and comment the line before that commented line 
    document.write(i + "<br>");
    
}


// 3. 
var renderClass = document.getElementsByClassName("render");
document.write("<br> <br> <br> Inner HTML of Elements of class  render <br>");
for (let index = 0; index < renderClass.length; index++) {
    var i = renderClass[index].innerHTML;
    document.write(i + "<br>");
    
}


// 4.

document.getElementById('first-name').value = 'Ahsan';

// 5.
document.getElementById('last-name').value = 'Khalid';

document.getElementById('email').value = 'ahsanshah437@gmail.com';




// B) Question 2
// 1.


document.write("<br><br><br> Node Type: form-content id's Element ");
var n = document.getElementById("form-content").nodeType;
document.write("the node type is : "+n);


// 2.
document.write("<br><br><br> Node Type: lastName id's Element & it's childrens");
var n = document.getElementById("lastName").nodeType;
document.write("he node type is : "+n);
var nodes = document.getElementById("lastName").childNodes;
document.write("<br> <br>Node types of it's Childrens");
for (let index = 0; index < nodes.length; index++) {
    var i = nodes[index].nodeType;
    document.write("<br> the node type is : "+i);

}



// 3.
document.write("<br><br><br> Udpate Child Node of Lastname");
var p  = document.getElementById("lastName");
var a  = document.getElementById("lastName").childNodes;
p.removeChild(a[0]);
var newChild = document.createElement('p');
p.innerText="Last Name : Jhon";
p.appendChild(newChild);


var p  = document.getElementById("lastName").innerText;

document.write(  "<br>"+p);


// 4.

var fc= document.getElementById("main-content").firstChild;
var ls = document.getElementById("main-content").lastChild;
console.log(fc);
console.log(ls)



// 5.

var ns= document.getElementById("lastName").nextSibling;
var ps= document.getElementById("lastName").previousSibling;
console.log(ns);
console.log(ps)


// 6.

var pn= document.getElementById("email").parentNode;
var nodt= document.getElementById("email").nodeType;
console.log(pn);
console.log(nodt)