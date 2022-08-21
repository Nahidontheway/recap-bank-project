document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const enterEmail = emailField.value;
    
    const passField = document.getElementById('pass-field');
    const enterPass = passField.value;

    if(enterEmail==='nh5477715@gmail.com' && enterPass === '1234'){
        window.location.href='bank.html';
    }
    else{
        alert('Enter valid email or password')
    }

})