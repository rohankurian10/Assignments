function validation(){

    var spChars = /^[A-Za-z0-9 ]+$/
    var fname = reg.fname.value;
    var lname = reg.lname.value;
    var email = reg.email.value.trim();
    var dob   = reg.SelectedDate.value;
    var phone = reg.phone.value.trim();
    var pass1 = reg.pass1.value.trim();
    var pass2 = reg.pass2.value.trim();
    var fnameVal = spChars.test(reg.fname.value);
    var lnameVal = spChars.test(reg.lname.value);
    var count = 0;
    

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
        document.getElementById("err-pass1").innerHTML = "Enter a password";
        document.getElementById("err-pass2").innerHTML = "Enter a confirm password";
        count++;
    }else if(pass1.length > 15){
        document.getElementById("err-pass1").innerHTML = "Password cannot be longer than 15 characters";
        document.getElementById("err-pass2").innerHTML = "";
        count++;
    }else if(pass1 !== pass2){
        document.getElementById("err-pass1").innerHTML = "";
        document.getElementById("err-pass2").innerHTML = "Passwords do not match";
        count++;
    }else{
        document.getElementById("err-pass1").innerHTML = "";
        document.getElementById("err-pass2").innerHTML = "";
    }

    console.log(count);
    if(count > 0){
        return false;
    }else{
        return true;
    }
}


$(function () {
    $("#txtDate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        yearRange: '1900:+0',
        onSelect: function (dateString, txtDate) {
            ValidateDOB(dateString);
        }
    });
});
function ValidateDOB(dateString) {
    var lblError = $("#lblError");
    var parts = dateString.split("/");
    var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    var dtCurrent = new Date();
    // lblError.html("Eligibility 18 years ONLY.")
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        return false;
    }

    if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

        //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
            return false;
        }
        if (dtCurrent.getMonth() == dtDOB.getMonth()) {
            //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
            if (dtCurrent.getDate() < dtDOB.getDate()) {
                return false;
            }
        }
    }
    lblError.html("");
    return true;
}