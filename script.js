let body=document.getElementById("displayBox");
function binary(){
    let num=document.getElementById("numberInput").value;
    body.innerHTML=Number(num).toString(2);
}
function octal(){
    let num=document.getElementById("numberInput").value;
    body.innerHTML=Number(num).toString(8);
}
function hexadecimal(){
    let num=document.getElementById("numberInput").value;
    body.innerHTML=Number(num).toString(16);
}
function decimal(){
    let num=document.getElementById("numberInput").value;
    body.innerHTML=Number(num).toString(10);
}