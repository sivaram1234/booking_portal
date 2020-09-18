let otp="";
function sendotp_fun(){
    console.log("OTP funnction tapped")
    console.log(getInputVal("mail"))
    temp_otp=Math.random();
    temp_otp=temp_otp*10000;
    temp_otp=temp_otp-(temp_otp%1);
    console.log(temp_otp);
    otp_num=temp_otp;
    otp=otp_num.toString();
    OTP_mail_Sending(getInputVal("mail"),otp);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

const sm="notifications.needcovidplasma@gmail.com";
const pw="AntiCovid@1";
  
function OTP_mail_Sending(email,otp) {
    console.log("mailing"); 
    Email.send({ 
    Host: "smtp.gmail.com", 
    Username: sm, 
    Password: pw, 
    To: email, 
    From: sm, 
    Subject: "OTP to ur mail", 
    Body:otp,
    }) 
    .then(function (message) { 
        console.log("mail sent successfully"); 
    }); 
}   