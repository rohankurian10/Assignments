num = (val) =>{
    var btnplObj = document.getElementById("btnpl");
    var btnmiObj = document.getElementById("btnmi");
    var btnmulObj = document.getElementById("btnmul");
    var btndivObj = document.getElementById("btndiv");
    var btnpntObj = document.getElementById("btnpnt");


    if(val == 1){
        document.getElementById("text2").value=document.getElementById("text2").value + "1";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 2){
        document.getElementById("text2").value=document.getElementById("text2").value + "2";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 3){
        document.getElementById("text2").value=document.getElementById("text2").value + "3";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 4){
        document.getElementById("text2").value=document.getElementById("text2").value + "4";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 5){
        document.getElementById("text2").value=document.getElementById("text2").value + "5";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 6){
        document.getElementById("text2").value=document.getElementById("text2").value + "6";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 7){
        document.getElementById("text2").value=document.getElementById("text2").value + "7";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 8){
        document.getElementById("text2").value=document.getElementById("text2").value + "8";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 9){
        document.getElementById("text2").value=document.getElementById("text2").value + "9";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 0){
        document.getElementById("text2").value=document.getElementById("text2").value + "0";
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == '+'){
        document.getElementById("text2").value=document.getElementById("text2").value + "+";
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else if(val == '-'){
        document.getElementById("text2").value=document.getElementById("text2").value + "-";
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else if(val == '*'){
        document.getElementById("text2").value=document.getElementById("text2").value + "*";
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else if(val == '/'){
        document.getElementById("text2").value=document.getElementById("text2").value + "/";
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else if(val == '.'){
        document.getElementById("text2").value=document.getElementById("text2").value + ".";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else{
        console.log(document.getElementById('text2').value);
        // document.getElementById('text2').value=document.getElementById('text2').value + document.getElementById('text1').value;
        var textVal = document.getElementById("text2").value;
        document.getElementById("text1").value=eval(textVal);

    }
    backspace = () =>{
        var txt1Val = document.getElementById("text1").value;
        var txt2Val = document.getElementById("text2").value;
        // var txtLngth = document.getElementById("text1").value -1;
        document.getElementById("text1").value = txt1Val.substr(0, txt1Val.length - 1);
        document.getElementById("text2").value = txt2Val.substr(0, txt2Val.length - 1);
    }

    txtClear = val =>{
        if(val == 1){
            document.getElementById("text1").value="";
        }else{
            document.getElementById("text1").value="";
            document.getElementById("text2").value="";
        }
    }
}