
function convert(){
    const temp = document.getElementById("Temp").value;

    // given measurement
    const unitOfMeasure = document.getElementById("unit").value;

    // to be converted unit
    const convertUnit = document.getElementById("UnitConvert").value;

    var ans = temp;
    if(unitOfMeasure == convertUnit)
    {
        document.getElementById("outputTemp").innerHTML = ans;
    }
    else if(unitOfMeasure == "celsius")
    {
        if(convertUnit == 'Kelvin')
        {
            ans = temp + (273.15);
            document.getElementById("outputTemp").innerHTML = ans.toFixed(2);
        }
        else{
            ans = (temp * (9/5)) + 32;
            document.getElementById("outputTemp").innerHTML = ans.toFixed(2);
        }
    }
    else if(unitOfMeasure == "Fahrenheit")
    {
        if(convertUnit == 'Kelvin')
        {
            ans = ((temp - 32) * (5/9)) + 273.15;
            document.getElementById("outputTemp").innerHTML = ans.toFixed(2);
        }
        else{
            ans = ((temp - 32)*(5/9));
            document.getElementById("outputTemp").innerHTML = ans.toFixed(2);
        }
    }
    else
    {
        if(convertUnit == 'celsius')
        {
            ans = (temp - 273.15);
            document.getElementById("outputTemp").innerHTML = ans.toFixed(2);
        }
        else
        {
            ans = ((temp - 273.15) * (9/5)) + 32;
            document.getElementById("outputTemp").innerHTML = ans.toFixed(2);
        }
    }
}