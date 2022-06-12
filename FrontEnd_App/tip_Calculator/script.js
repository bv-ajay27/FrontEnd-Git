function getRating(){
    const taste = parseInt(document.getElementById("tasteRating").value);
    const color = parseInt(document.getElementById("colorRating").value);
    const aroma = parseInt(document.getElementById("aromaRating").value);
    const avg = (taste+color+aroma)/3;
    document.getElementById("foodRating").innerHTML = "Rating : " + avg;

    // servicing
    const service = parseInt(document.getElementById("waiter").value);
    document.getElementById("ServiceRating").innerHTML = "Service Rating : " + service;

    // Hygene
    const staff = parseInt(document.getElementById("staffHygene").value);
    const over = parseInt(document.getElementById("overallLook").value);
    const overall = (staff+over)/2;
    document.getElementById("HygeneRating").innerHTML = "Hygene Rating : " + overall;
    
    // final rating
    const finalRating = parseInt((avg+service+overall)/3);

    // print rating
    document.getElementById("rating").innerHTML = "Rating : " + finalRating;
    
    // bill amount
    const bill = parseInt(document.getElementById("billAmount").value);
    // document.getElementById("tipAmount").innerHTML = "Tip Amount : " (bill*4)*100;

    //final tip
    if(finalRating > 3)
    {
        document.getElementById("tipAmount").innerHTML = "Tip Amount : " + (bill*(3/100));
    }
    else if(finalRating >= 2 && finalRating < 4)
    {
        document.getElementById("tipAmount").innerHTML = "Tip Amount : " + (bill*(2/100));
    }
    else
    {
        document.getElementById("tipAmount").innerHTML = "Tip Amount : " + (bill*(1/100));
    }
}
