

// const input = document.getElementsByTagName("input");

document.addEventListener("Height", myFunction);

function myFunction() {

    const height = document.getElementById("Height").value;
    const width = document.getElementById("Width").value;

    document.getElementById("box").innerHTML.style.height="17px",width="45px";

    document.getElementById("height").innerHTML = height;
    document.getElementById("width").innerHTML = width;
}
