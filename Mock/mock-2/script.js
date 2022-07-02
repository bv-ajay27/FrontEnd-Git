let box = document.getElementById("box");
let options = document.getElementById("options");
let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");


window.onload = function() {
   box.style.height = parseInt(range1.value)*10 + "px";
box.style.width = parseInt(range2.value)*10 + "px";
   document.getElementById("result1").innerText = "Height of Box : " + +range1.value*10 + "px" ;
  
  
   document.getElementById("result2").innerText = `Width of Box : ${range2.value*10}px` ;
};



let colors = ["red","blue","green","pink","purple","Yellow"]

colors.forEach(color => createRadioBtn(color));

function createRadioBtn(color){
  let label = document.createElement("label")
  let btn = document.createElement("input")
  let br = document.createElement("br")
  btn.type = "radio";
  btn.classList.add("radioBtn");
  btn.value = color;
  btn.setAttribute("name","color");
  label.setAttribute("for",color);
  
  label.innerHTML = color;
  // console.log(label,btn)
  options.appendChild(label);
  options.appendChild(btn);
  options.appendChild(br)
}

document.querySelectorAll(".radioBtn").forEach(item => {
  item.addEventListener("click", function (e){
    box.style.backgroundColor = this.value;
})
})
  


range1.addEventListener("change",function (e){
  
  console.log(this.value)
   document.getElementById("result1").innerText = `Height of Box : ${this.value*10}px` ;
  
  box.style.height = parseInt(this.value)*10 + "px";
})

range2.addEventListener("change",function (e){
  
   document.getElementById("result2").innerText = `Width of Box : ${this.value*10}px` ;
  box.style.width = parseInt(this.value)*10 + "px";
})