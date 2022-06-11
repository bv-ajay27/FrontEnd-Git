function getRating(){
    const taste = document.getElementById("tasteRating").value;
    const color = document.getElementById("colorRating").value;
    const aroma = document.getElementById("aromaRating").value;
    const avg = parseInt((taste+color+aroma)/3);
    document.getElementById("foodRating").innerHTML = "Rating : " + avg;

    // servicing
    const service = document.getElementById("waiter").value;
    document.getElementById("ServiceRating").innerHTML = "Service Rating : " + service;

    // Hygene
    const staff = document.getElementById("staffHygene").value;
    const over = document.getElementById("overallLook").value;
    const overall = parseInt((staff+over)/2);
    document.getElementById("HygeneRating").innerHTML = "Hygene Rating : " + overall;
    
    // final rating
    const finalRating = (avg+service+overall)/3;
    
    // bill amount
    const bill = document.getElementById("billAmount").value;
    // document.getElementById("tipAmount").innerHTML = "Tip Amount : " (bill*4)*100;

    //final tip
    if(finalRating > 3)
    {
        document.getElementById("tipAmount").innerHTML = "Tip Amount : " ((bill*4)*100);
    }
    else if(finalRating >= 2 && finalRating < 4)
    {
        document.getElementById("tipAmount").innerHTML = "Tip Amount : " ((bill*3)*100);
    }
    else
    {
        document.getElementById("tipAmount").innerHTML = "Tip Amount : " ((bill*2)*100);
    }
}
