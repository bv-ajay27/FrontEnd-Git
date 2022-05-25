document.getElementsByClassName('changeBG')
function changeBG(){
    document.getElementsByClassName('changeBG').style.changeBG
}
function callingFun(){
    document.getElementById('demo').innerHTML = 'This is function call from outside';
}
let a = 27,b = 24,c=34;
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