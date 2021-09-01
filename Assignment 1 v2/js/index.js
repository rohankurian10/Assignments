num = (val) =>{
    var btnplObj = document.getElementById("btnpl");
    var btnmiObj = document.getElementById("btnmi");
    var btnmulObj = document.getElementById("btnmul");
    var btndivObj = document.getElementById("btndiv");


    if(val == 1){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }else if(val == 2){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+2;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 3){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+3;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 4){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+4;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 5){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+5;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 6){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+6;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 7){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+7;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 8){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+8;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 9){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+9;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == 0){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+0;
        btnplObj.disabled = false;
        btnmiObj.disabled = false;
        btnmulObj.disabled = false;
        btndivObj.disabled = false;
    }
    else if(val == '+'){
        document.getElementById("text2").value=document.getElementById("text2").value + document.getElementById("text1").value + '+';
        document.getElementById("text1").value="";
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
    }
    else if(val == '-'){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+'-';
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
    }
    else if(val == '*'){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+'*';
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
    }
    else if(val == '/'){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+'/';
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
    }
    else if(val == '/'){
        document.getElementById("text1").value=document.getElementById("text1").value+val;
        document.getElementById("text2").value=document.getElementById("text2").value+'.';
        btnplObj.disabled = true;
        btnmiObj.disabled = true;
        btnmulObj.disabled = true;
        btndivObj.disabled = true;
    }
    else{
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