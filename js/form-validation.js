// JS CODE

var errorMsgs = document.querySelectorAll('.errorMsg');
var submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = validateForm;


function validateForm(e){

  e.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPwd = document.getElementById('confirmPwd').value;

  if(username == '' || username.length < 6 ){
    errorMsgs[0].innerHTML = "Username nust be at least 6 characters.";
    return;
  }

  if(email == '' || !email.includes('@') || !email.includes('.') ){
    errorMsgs[1].innerHTML = "Please Enter A Valid Email.";
    return;
  }

  if(password.length < 6 ){
    errorMsgs[2].innerHTML = "Password Must Be At Least 6 Characters.";
    return;
  }

  if(confirmPwd !== password){
    errorMsgs[3].innerHTML = "Password Does Not Match.";
    return;
  }

  document.getElementById('contentWrapper').innerHTML = '<p>Login Successful!</p>';

}
