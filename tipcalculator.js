


function calc() {

    let Billvalue = document.getElementById("Bill").value;
    let Optionvalue = document.getElementById("option").value;
    let Numbervalue = document.getElementById("people").value;


    if (Billvalue === '' || Optionvalue == 0){
        alert("Enter the values !!! ")
        return;
    }

    if (Numbervalue === '' || Numbervalue <= 1 ){
        Numbervalue = 1;
        document.getElementById("each").style.display = "none";
    }else {
        document.getElementById("each").style.display = "block";
    }

    let total = (Billvalue * Optionvalue) / Numbervalue;

    total = Math.round(total*100)/100;

    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
