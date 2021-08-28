$(document).ready(function(){
    $('#btn').click(function(){
        var spChars =  /^[A-Za-z ]+$/
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var pass1 = $('#pass1').val();
        var pass2 = $('#pass2').val();
        var dob   = $('#txtDate').val();
        var fnameVal = spChars.test($('#fname').val());
        var lnameVal = spChars.test($('#lname').val());
        var count = 0;


        if(fname == ""){
            $('#err-fname').html("First name cannot be empty");
            count++;
        }else if(fname.length < 5 || fname.length > 15){
            $('#err-fname').html("Name cannot be less than 5 or more than 15 characters");
            count++;
        }else if(!fnameVal){
            $('#err-fname').html("First name cannot contain special characters");
            count++;
        }else{
            $('#err-fname').html("");
            console.log("First name Validation success");
        }


        if(lname == ""){
            $('#err-lname').html("Last name cannot be empty");
            count++;
        }else if(lname.length < 5 || lname.length > 15){
            $('#err-lname').html("Name cannot be less than 5 or more than 15 characters");
            count++;
        }else if(!lnameVal){
            $('#err-lname').html("Last name cannot contain special characters");
            count++;
        }else{
            $('#err-lname').html("");
            console.log("Last name Validation success");
        }


        if(email == ""){
            $('#err-email').html("Email cannot be empty");
            count++;
        }else if(email.indexOf('@') < 0){
            $('#err-email').html("Enter a valid Email address");
            count++;
        }else{
            $('#err-email').html("");
            console.log("Email address Validation success");
        }


        if(dob == ""){
            $('#lblError').html("Date of Birth cannot be empty");
            count++;
        }else{
            $('#lblError').html("");
            console.log("Date of Birth Validation success");
        }

        
        if(phone == ""){
            $('#err-phone').html("Enter a phone number");
            count++;
        }else if(phone.length != 10){
            $('#err-phone').html("Enter a valid phone number");
            count++;    
        }else if(phone.isNaN == true){
            $('#err-phone').html("Enter phone number in digits");
            count++;
        }else{
            $('#err-phone').html("");
        }


        if(pass1 == ""){
            $('#err-pass1').html("Enter a password");
            $('#err-pass2').html("Enter a confirm password");
            count++;
        }else if(pass1.length > 15){
            $('#err-pass1').html("Password cannot be longer than 15 characters");
            $('#err-pass2').html("");
            count++;
        }else if(pass1 !== pass2){
            $('#err-pass1').html("");
            $('#err-pass2').html("Passwords do not match");
            count++;
        }else{
            $('#err-pass1').html("");
            $('#err-pass2').html("");
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