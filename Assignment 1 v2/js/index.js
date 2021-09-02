num = (val) =>{
    var btnplObj = document.getElementById("btnpl");
    var btnmiObj = document.getElementById("btnmi");
    var btnmulObj = document.getElementById("btnmul");
    var btndivObj = document.getElementById("btndiv");
    var btnpntObj = document.getElementById("btnpnt");


    if(val == 1){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 2){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 3){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 4){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 5){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 6){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 7){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 8){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 9){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == 0){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
        btnpntObj.disabled = false;
    }
    else if(val == '+'){
        document.getElementById("text2").value=document.getElementById("text2").value + document.getElementById("text1").value + '+';
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else if(val == '-'){
        document.getElementById("text2").value=document.getElementById("text2").value + document.getElementById("text1").value + '-';
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else if(val == '*'){
        document.getElementById("text2").value=document.getElementById("text2").value + document.getElementById("text1").value + '*';
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else if(val == '.'){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
        btnpntObj.disabled = true;
    }
    else{
        console.log(document.getElementById('text2').value);
        document.getElementById('text2').value=document.getElementById('text2').value + document.getElementById('text1').value;
        var textVal = document.getElementById("text2").value;
        document.getElementById("text1").value=eval(textVal);

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