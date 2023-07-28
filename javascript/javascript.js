
//home page navbar
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('#navbar .menu a');
function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}
item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        indicator(e.target);
    })
})

// navbar hover for service page
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.contain #nav .menu a');
function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}
item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        console.log("mouse")
        indicator(e.target);
    })
})

// navbar hover for other pages
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('#nav .menu a');
function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}
item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        console.log("mouse")
        indicator(e.target);
    })
})

// popup
function toggle() {
    
    var blur = document.getElementById("blur"); //body
    blur.classList.toggle('active')
    var popup = document.getElementById("popup") //containr
    popup.classList.toggle('active')
}



//login and signin eye visibility
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password-log');
    var eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        //eye open 
        eyeIcon.innerHTML ='<i class="fa-solid fa-eye" style="color: #000000;"></i>';
    } else {
        passwordInput.type = 'password';
        //eye close
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash" style="color: #00040a;"></i>';
    }
}

function togglePasswordVisibile(){
    var confirmpasswordInput = document.getElementById('confirm-password');
    var logInpasswordInput = document.getElementById('password-sign');
    var eyeicon = document.querySelector('.eyeIcon');

    if (confirmpasswordInput.type === 'password') {
        confirmpasswordInput.type = 'text';
        //eye open 
        eyeicon.innerHTML ='<i class="fa-solid fa-eye" style="color: #000000;"></i>';
    } else {
        confirmpasswordInput.type = 'password';
        //eye close
        eyeicon.innerHTML = '<i class="fa-solid fa-eye-slash" style="color: #00040a;"></i>';
    }
}
function toggleVisibile(){
    var logInpasswordInput = document.getElementById('password-sign');
    var eyeicon = document.querySelector('.eye-icon');

    if (logInpasswordInput.type === 'password') {
        logInpasswordInput.type = 'text';
        //eye open 
        eyeicon.innerHTML ='<i class="fa-solid fa-eye" style="color: #000000;"></i>';
    } else {
        logInpasswordInput.type = 'password';
        //eye close
        eyeicon.innerHTML = '<i class="fa-solid fa-eye-slash" style="color: #00040a;"></i>';
    }
}

addEventListener('submit', function (event) {
    event.preventDefault(); 
    var username = document.getElementById('username-log').value;
    var password = document.getElementById('password-log').value;

    if (password === 'password123' && username=='Rashmi') {
        // Password is correct, proceed with sign in
        alert('login in successful!');
        // You can redirect to another page or perform other actions here
    } else {
        document.getElementById('error-msg').textContent= 'Invalid password or username. Please try again.';
    }
});

//password validity
function validatePassword(){
    var signUpPassword=document.getElementById('password-sign').value;
    var confirmPassword=document.getElementById('confirm-password').value;
    if (signUpPassword === confirmPassword) {
        alert('Sign in successful!');
    } else {
        alert('Invalid password. Please check!!');

    }
}


//Feedback form validation
function formValidate(){
    var mail = document.forms["myForm"]["email"].value;
    var mailformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailformat.test(mail)) {  
        
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }

    var phone = document.forms["myForm"]["phone"].value;
    var phoneformat= /^(\[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (phoneformat.test(phone)) {
       return true;
    } else {
        alert("You have entered an invalid phone number! ");
        return false;
    } 
}

