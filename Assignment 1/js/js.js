txtClear=()=>{
    document.getElementById("txtVal").value = "";
}

strVal=(value)=>{
    document.getElementById("txtVal").value=document.getElementById("txtVal").value+value;
    console.log(document.getElementById("txtVal").value);
}

equalsTo=()=>{
    var txtVal = document.getElementById("txtVal").value;
    console.log(txtVal);
    var result = eval(txtVal);
    console.log(result);
    document.getElementById("txtVal").value = result;
}