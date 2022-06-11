function getRating(){
    const taste = document.getElementById("tasteRating").value;
    const color = document.getElementById("colorRating").value;
    const aroma = document.getElementById("aromaRating").value;
    const sum = ((taste + color + aroma)/3);
    document.getElementById("foodRating").innerHTML = "Rating : " + sum;

    // servicing
    const service = document.getElementById("waiter").value;
    const servicing = service;
    document.getElementById("ServiceRating").innerHTML = "Service Rating : " + servicing;

    // Hygene
    const staff = document.getElementById("staffHygene").value;
    const over = document.getElementById("overallLook").value;
    const overall = ((staff + over)/2);
    document.getElementById("HygeneRating").innerHTML = "Hygene Rating : " + overall;
    
    // bill amount
    const bill = document.getElementById("billAmount").value;

    //final tip
    document.getElementById("tipAmount").innerHTML = bill*overall;
}
