function getRating(){
    const taste = parseInt(document.getElementById("tasteRating").value);
    const color = parseInt(document.getElementById("colorRating").value);
    const aroma = parseInt(document.getElementById("aromaRating").value);
    const avg = (taste+color+aroma)/3;
    document.getElementById("foodRating").innerHTML = "Food Rating : " + avg.toFixed(1);

    // servicing
    const service = parseInt(document.getElementById("waiter").value);
    document.getElementById("ServiceRating").innerHTML = "Service Rating : " + service.toFixed(1);

    // Hygene
    const staff = parseInt(document.getElementById("staffHygene").value);
    const over = parseInt(document.getElementById("overallLook").value);
    const overall = (staff+over)/2;
    document.getElementById("HygeneRating").innerHTML = "Hygene Rating : " + overall.toFixed(1);
    
    // final rating
    const finalRating = parseInt((avg+service+overall)/3);

    // print rating
    document.getElementById("rating").innerHTML = "Overall Rating : " + finalRating.toFixed(1);
    
    // bill amount
    const bill = parseInt(document.getElementById("billAmount").value);
    // document.getElementById("tipAmount").innerHTML = "Tip Amount : " (bill*4)*100;

    //final tip
    if(finalRating > 3)
    {
        document.getElementById("tipAmount").innerHTML = "Tip Amount : " + (bill*(4/100));
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
