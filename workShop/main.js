import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom({
    global:true,
    fullscreen: true
});
//load resources
loadBean();

add([
    sprite("bean"),
    pos(100,100),
    area()
])

onkeyPress("space", ()=>{
    
})