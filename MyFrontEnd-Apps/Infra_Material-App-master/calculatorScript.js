
function ccm(){
    
    const len = parseInt(document.getElementById("LengthCCM").value);
    const lenDec = parseInt(document.getElementById("LengthCCMDec").value);
    const width = parseInt(document.getElementById("WidthCCM").value);
    const widthDec = parseInt(document.getElementById("WidthCCMDec").value);
    const depth = parseInt(document.getElementById("DepthCCM").value);
    const depthDec = parseInt(document.getElementById("DepthCCMDec").value);

    // CCM volume calculation
    const ccmVol = ((len+(lenDec/100))*(width+(widthDec/100))*(depth+(depthDec/100)));

    //CCM wet vol Cal
    const wetCCMVol = ccmVol +(ccmVol*(0.524))

    // calculation with grade
    const unit = document.getElementById("CCGrade").value;

    if(unit == "M-20")
    {
        // amount of cement
        const cement = (1/5.5)*wetCCMVol;

        // no.of cement bags
        const CementBags = cement/0.035;

        //amount of sand
        const sandVol = (1.5/5.5)*wetCCMVol;

        //sand in tns
        const sandTon = (sandVol * 1550)/1000;

        //Amount of Aggregate
        const agg = (3/5.5)*wetCCMVol;

        //amount of agg in tonn
        const aggTon = (agg*1350)/1000;

        //output
        document.getElementById("CCMVolOutput") .innerHTML = "Cement concrete mixture vol(m3) = " + ccmVol.toFixed(2) +" m3";
        document.getElementById("CCMWetVolOutput") .innerHTML = "Cement concrete mixture Wet vol(m3) = " + wetCCMVol.toFixed(2) +" m3";
        document.getElementById("CCMCementOutput") .innerHTML = "Cement Quantity = " + cement.toFixed(2) +" m3";
        document.getElementById("CCMNoOfBagsOutput") .innerHTML = "No.of Cement Bags Required = " + CementBags.toFixed(2) + " No's";
        document.getElementById("sandOutput") .innerHTML = "Volume of Sand Required (in Tonn) = " + sandTon.toFixed(2) +" Ton";
        document.getElementById("aggOutput") .innerHTML = "Volume of Aggeregate Required (in Tonn) = " + aggTon.toFixed(2) +" Ton";
    }
    else if(unit == "M-15")
    {
        ratio = 7;
        // amount of cement
        const cement = (1/7)*wetCCMVol;

        // no.of cement bags
        const CementBags = cement/0.035;

        //amount of sand
        const sandVol = (2/7)*wetCCMVol;

        //sand in tns
        const sandTon = (sandVol * 1550)/1000;

        //Amount of Aggregate
        const agg = (4/5.5)*wetCCMVol;

        //amount of agg in tonn
        const aggTon = (agg*1350)/1000;

        //output
        document.getElementById("CCMVolOutput") .innerHTML = "Cement concrete mixture vol(m3) = " + ccmVol.toFixed(2) +" m3";
        document.getElementById("CCMWetVolOutput") .innerHTML = "Cement concrete mixture Wet vol(m3) = " + wetCCMVol.toFixed(2) +" m3";
        document.getElementById("CCMCementOutput") .innerHTML = "Cement Quantity = " + cement.toFixed(2) +" m3";
        document.getElementById("CCMNoOfBagsOutput") .innerHTML = "No.of Cement Bags Required = " + CementBags.toFixed(2) + " No's";
        document.getElementById("sandOutput") .innerHTML = "Volume of Sand Required (in Tonn) = " + sandTon.toFixed(2) +" Ton";
        document.getElementById("aggOutput") .innerHTML = "Volume of Aggeregate Required (in Tonn) = " + aggTon.toFixed(2) +" Ton";
    }
    else if(unit == "M-10")
    {
        ratio = 10;
        // amount of cement
        const cement = (1/10)*wetCCMVol;

        // no.of cement bags
        const CementBags = cement/0.035;

        //amount of sand
        const sandVol = (3/10)*wetCCMVol;

        //sand in tns
        const sandTon = (sandVol * 1550)/1000;

        //Amount of Aggregate
        const agg = (6/10)*wetCCMVol;

        //amount of agg in tonn
        const aggTon = (agg*1350)/1000;

        //output
        document.getElementById("CCMVolOutput") .innerHTML = "Cement concrete mixture vol(m3) = " + ccmVol.toFixed(2) +" m3";
        document.getElementById("CCMWetVolOutput") .innerHTML = "Cement concrete mixture Wet vol(m3) = " + wetCCMVol.toFixed(2) +" m3";
        document.getElementById("CCMCementOutput") .innerHTML = "Cement Quantity = " + cement.toFixed(2) +" m3";
        document.getElementById("CCMNoOfBagsOutput") .innerHTML = "No.of Cement Bags Required = " + CementBags.toFixed(2) + " No's";
        document.getElementById("sandOutput") .innerHTML = "Volume of Sand Required (in Tonn) = " + sandTon.toFixed(2) +" Ton";
        document.getElementById("aggOutput") .innerHTML = "Volume of Aggeregate Required (in Tonn) = " + aggTon.toFixed(2) +" Ton";
    } 
    else{
        ratio = 13;
        // amount of cement
        const cement = (1/13)*wetCCMVol;

        // no.of cement bags
        const CementBags = cement/0.035;

        //amount of sand
        const sandVol = (4/13)*wetCCMVol;

        //sand in tns
        const sandTon = (sandVol * 1550)/1000;

        //Amount of Aggregate
        const agg = (8/13)*wetCCMVol;

        //amount of agg in tonn
        const aggTon = (agg*1350)/1000;

        //output
        document.getElementById("CCMVolOutput") .innerHTML = "Cement concrete mixture vol(m3) = " + ccmVol.toFixed(2) +" m3";
        document.getElementById("CCMWetVolOutput") .innerHTML = "Cement concrete mixture Wet vol(m3) = " + wetCCMVol.toFixed(2) +" m3";
        document.getElementById("CCMCementOutput") .innerHTML = "Cement Quantity = " + cement.toFixed(2) +" m3";
        document.getElementById("CCMNoOfBagsOutput") .innerHTML = "No.of Cement Bags Required = " + CementBags.toFixed(2) + " No's";
        document.getElementById("sandOutput") .innerHTML = "Volume of Sand Required (in Tonn) = " + sandTon.toFixed(2) +" Ton";
        document.getElementById("aggOutput") .innerHTML = "Volume of Aggeregate Required (in Tonn) = " + aggTon.toFixed(2) +" Ton";
    }
}
    
//TopSoil calculation
function soilCal(){
    const len = parseInt(document.getElementById("LengthSoil").value);
    const width = parseInt(document.getElementById("WidthSoil").value);
    const depth = parseInt(document.getElementById("DepthSoil").value);

    const soilVol = (len*width*depth);
    document.getElementById("TopSoilOutput").innerHTML = "The volume of soil required is = "+ soilVol.toFixed(2) + "m3";
}

//Bricks Quantity
function BricksQTY(){
    // for wall
    const len = parseInt(document.getElementById("wallLength").value);
    const height = parseInt(document.getElementById("wallHeight").value);
    const thick = parseInt(document.getElementById("Thickness").value)/100;

    // for brick
    const brickLen = parseInt(document.getElementById("brickLength").value);
    const brickHeight = parseInt(document.getElementById("bricksHeight").value);
    const brickWidth = parseInt(document.getElementById("brickThickness").value);

    const wallVol = (len*height*thick);
    const brickVol = ((brickLen/100)*(brickHeight/100)*(brickWidth/100));
    const noOfBricks = wallVol/brickVol;

    //output
    document.getElementById("BricksOutput").innerHTML = "No of Bricks required is = "+ noOfBricks.toFixed(2);
}

// steel weight calculation
function SteelQTY(){
    const dia = parseInt(document.getElementById("Dia").value);
    const len = parseInt(document.getElementById("LengthSteelRod").value);
    const rodQty = parseInt(document.getElementById("steelQty").value);

    const weight = ((dia*dia)*len*rodQty)/162.28;

    // weight in tonn
    const steelWeight = weight/1000;
    document.getElementById("steelQTYOutput").innerHTML = "The weigth of steel required is = " + steelWeight.toFixed(2)+ "Tonn";
}