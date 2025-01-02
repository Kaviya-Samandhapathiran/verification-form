var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var cpassword = document.getElementById("cpassword")
var form = document.getElementById("form")
var isUsername = false
var isEmail = false
var isPassword = false
var isCPassword = false


form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault()
    }

    if(isUsername && isEmail && isPassword && isCPassword) {
            window.location.assign("image.html")
    }
})

function validateInputs() {
    var usernameValue = username.value.trim()
    var emailValue = email.value.trim()
    var passwordValue = password.value.trim()
    var cpasswordValue = cpassword.value.trim()


    if (usernameValue === '') {
        isUsername = false
        setError(username, "* Please enter your username")
    }

    else {
        isUsername = true
        setSuccess(username)
    }

    if (emailValue === '') {
        isEmail = false
        setError(email, '* Please enter your mailId')
    }

    else if (!validateEmail(emailValue)) {
        isEmail = false
        setError(email, '* Please enter a valid email address')
    }

    else {
        isEmail = true
        setSuccess(email)
    }

    if (passwordValue === '') {
        isPassword = false
        setError(password, '* Please enter your password')
    }

    else if (passwordValue.length < 8) {
        isPassword = false
        setError(password, '* Please must be atleast 8 characters long')
    }

    else {
        isPassword = true
        setSuccess(password)
    }

    if(cpasswordValue === ''){
        isCPassword = false
        setError(cpassword, '* Please enter a confirm password')
    }

    else if(cpasswordValue!=passwordValue){
        isCPassword = false
        setError(cpassword, '* Please enter a correct password')
    }

    else{
        isCPassword = true
        setSuccess(cpassword)
    }

}

function setError(element, message) {
    var inputs = element.parentElement
    var errorElement = inputs.querySelector('.error')
    errorElement.innerText = message
    inputs.classList.add('error')
    inputs.classList.remove('success')
}

function setSuccess(element) {
    var inputs = element.parentElement
    var errorElement = inputs.querySelector('.error')
    errorElement.innerText = ''
    inputs.classList.add("success")
    inputs.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

