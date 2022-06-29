// document.getElementsByClassName('changeBG')
function changeBG(){
    document.getElementById("bg").style.backgroundColor = "red"; 
}
function callingFun(){
    document.getElementById('demo').innerHTML = 'This is function call from outside';
}
var a = 27,b = 24,c=34;
document.getElementById('add').innerHTML = a + b + c;
document.getElementById('sub').innerHTML = a - b - c;
document.getElementById('div').innerHTML = a / b / c;
document.getElementById('mod').innerHTML = a % b % c;
console.log(a);

function ajay(){
    const person = {
        firstName : "AJay Kumar",
        lastName : 'B',
        YearOfPassedOut : 2017,
        city : "Rajahmundry"
    };
    document.getElementById('obj').innerHTML = person.firstName + " from " + person.city;
                                //or
    // document.getElementById('obj').innerHTML = person["firstName"] + " passedout year is "+person["YearOfPassedOut"];
 }

 function objFun(){
    let person = {
        name : "Ajay",
        class : "PhD",
        Hobbies : "Bikes",
        interest : function (){
            return this.Hobbies();
        }
    };
    document.getElementById('objFun').innerHTML = person.Hobbies;
 }
 // get time function to call ==> this is from AbhiK
 function getTime(){
     var time = new Date();
     var h = time.getHours();
     var min = time.getMinutes();
     var sec = time.getSeconds();
     var day = time.getDate();
     var month = time.getMonth();
     document.getElementById("getTime").innerHTML = "Date & Month :" + day +"/ "+month+ "Time :" +h +" :" +min+":"+sec;
    //  setInterval("getTime()",2000); // here we have to give two parameters 1. calling function,2.interval in milli sec
 }
 getTime();

 // Logical && and || and XOR opp
 function Logicalopp(){
     let a = 3,b = 12;
     let sum = 27;
     if(sum > a+b & sum > a*b){
        document.getElementById("ANDopp").innerHTML = "AND operator ==> Sum greater than a+b and a*b" + "sum : " + sum +"a+b : " + a+b + " a*b : " + a*b;
     }
     else if(sum < a+b | sum < a*b){
        document.getElementById("ORopp").innerHTML = "Or Operator==> Sum greater than a+b and a*b" + "sum : " + sum +"a+b : " + a+b + " a*b : " + a*b;
     }
     else{
         document.getElementById('XORopp').innerHTML = "Or Operator==> Sum greater than a+b and a*b" + "sum : " + sum +"a+b : " + a+b + " a*b : " + a*b;
     }
 }
//  document.write(navigator.platform);
document.write(screen.colorDepth);

// Arrow function
const ele = () =>(
    windows.write("hello")
)
