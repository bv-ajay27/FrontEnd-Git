const display = document.getElementById("display")

function buttonClick(btn){
    btn.addEventListener("click",()=>{
        switch(btn.innerText){
            case 'C':
                display.innerText = ""
                break;
            case '←':
                display.innerText = display.innerText.slice(0,-1)
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                }catch(err){
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText = display.innerText + btn.innerText
        }
    })
}

const button = document.querySelectorAll(".btn")

button.forEach(btn => {
    buttonClick(btn)
});
