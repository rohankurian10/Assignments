$(document).ready(function(){
    $('#btn').click(function(){
        var spChars = /^[A-Za-z0-9 ]+$/
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var pass1 = $('#pass1').val();
        var pass2 = $('#pass2').val();
        var dob   = $('#txtDate').val();
        var fnameVal = spChars.test(reg.fname.value);
        var lnameVal = spChars.test(reg.lname.value);
        var count =0;


        if(fname == ""){
            document.getElementById("err-fname").innerHTML = "First name cannot be empty";
            count++;
        }else if(fname.length < 5 || fname.length > 15){
            document.getElementById("err-fname").innerHTML = "Name cannot be less than 5 or more than 15 characters";
            count++;
        }else if(!fnameVal){
            document.getElementById("err-fname").innerHTML = "First name cannot contain special characters";
            count++;
        }else{
            document.getElementById("err-fname").innerHTML = "";
            console.log("First name Validation success");
        }


        if(lname == ""){
            document.getElementById("err-lname").innerHTML = "Last name cannot be empty";
            count++;
        }else if(lname.length < 5 || lname.length > 15){
            document.getElementById("err-lname").innerHTML = "Name cannot be less than 5 or more than 15 characters";
            count++;
        }else if(!lnameVal){
            document.getElementById("err-lname").innerHTML = "Last name cannot contain special characters";
            count++;
        }else{
            document.getElementById("err-lname").innerHTML = "";
            console.log("Last name Validation success");
        }


        if(email == ""){
            document.getElementById("err-email").innerHTML = "Email cannot be empty";
            count++;
        }else if(email.indexOf('@') < 0){
            document.getElementById("err-email").innerHTML = "Enter a valid Email address";
            count++;
        }else{
            document.getElementById("err-email").innerHTML = "";
            console.log("Email address Validation success");
        }


        if(dob == ""){
            document.getElementById("lblError").innerHTML = "Date of Birth cannot be empty";
            count++;
        }else{
            document.getElementById("lblError").innerHTML = "";
            console.log("Date of Birth Validation success");
        }

        
        if(phone == ""){
            document.getElementById("err-phone").innerHTML = "Enter a phone number";
            count++;
        }else if(phone.length != 10){
            document.getElementById("err-phone").innerHTML = "Enter a valid phone number";
            count++;    
        }else if(phone.isNaN == true){
            document.getElementById("err-phone").innerHTML = "Enter phone number in digits";
            count++;
        }else{
            document.getElementById("err-phone").innerHTML ="";
        }


        if(pass1 == ""){
            document.getElementById("err-password1").innerHTML = "Enter a password";
            document.getElementById("err-password2").innerHTML = "Enter a password";
            count++;
        }else if(pass1.length > 15){
            document.getElementById("err-password1").innerHTML = "Password cannot be longer than 15 characters";
            count++;
        }else if(pass1 !== pass2){
            document.getElementById("err-password1").innerHTML = "";
            document.getElementById("err-password2").innerHTML = "Passwords do not match";
            count++;
        }else{
            document.getElementById("err-password1").innerHTML = "";
            document.getElementById("err-password2").innerHTML = "";
        }


        console.log('Count:'+count);
        console.log('First name:'+fname);
        console.log('Last name:'+lname);
        console.log('Email:'+email);
        console.log('DOB:'+dob);
        console.log('Phone:'+phone);
        console.log('Password:'+'LOL no ways');
        
        
        if(count > 0){
            return false;
        }else{
            return true;
        }
    });
});