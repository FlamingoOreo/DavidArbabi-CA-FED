$(document).ready(function(){
    $("#contactBtn").click(function (){
        var passedEmail = false;
        var passedNumber = false;
        var passedAddress = false;
        while(passedEmail == false){
            var email = prompt("Please enter your email: ");
            if(!email.includes("@") || !email.includes(".")){
                alert("YOUR EMAIL MUST CONTAIN A '@' AND A '.'");
            }else{
                passedEmail = true;
            }
        }
        while(passedNumber == false){
            var number = parseInt(prompt("Please enter your number:"));
            if(isNaN(number)){
                alert("YOUR NUMBER MUST BE DIGITS!");
            }else{
                passedNumber = true;
            }

        }while(passedAddress == false){
            var address = prompt("Please enter your address: ")
            if(address.length == 0){
                alert("YOUR ADDRESS MUST CONTAIN CHARACTERS!")
            }
            else{
                passedAddress = true;
            }
        }
        $("#contactDetails p:first").text(number);
        $("#contactDetails p:eq(1)").text(email);
        $("#contactDetails p:last").text(address);
        console.log(`From: ${email}\nContact: ${number}\nAddress: ${address}`) ;

    })
  
});