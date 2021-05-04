function si(){
    var p = parseInt(document.getElementById("p").value);
    var r = parseInt(document.getElementById("r").value);  
    var t = parseInt(document.getElementById("t").value);
    var si = p*r*t/100;
    document.getElementById("res").innerHTML=si;
}