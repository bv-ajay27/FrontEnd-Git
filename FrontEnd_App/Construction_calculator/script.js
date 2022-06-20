
function ccm(){
    const unit = document.getElementById("unitMeasureCCM");
    const ratio = 0;
    if(unit == "M-20")
    {
        ratio = 5.5;
    }
    else if(unit == "M-15")
    {
        ratio = 7;
    }
    else if(unit == "M-10")
    {
        ratio = 10;
    }
    else{
        ratio = 13;
    }
    const len = document.getElementById("LengthCCM").value;
    const lenDec = document.getElementById("LengthCCMDec").value;
    const width = document.getElementById("WidthCCM").value;
    const widthDec = document.getElementById("WidthCCMDec").value;
    const depth = document.getElementById("DepthCCM").value;
    const depthDec = document.getElementById("DepthCCMDec").value;

    // CCM volume calculation
    const ccmVol = ((len+lenDec)*(width+widthDec)*(depth+depthDec));

    //CCM wet vol Cal
    const wetCCM = ccmVol +(ccmVol*(0.524))

    //cement calculation
    

}