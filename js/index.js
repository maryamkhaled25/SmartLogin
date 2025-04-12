// Sign-up page
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')


var validMsg = document.getElementById('validMsg')
var nameMsg = document.getElementById('nameMsg')
var emailMsg = document.getElementById('emailMsg')
var passwordMsg = document.getElementById('passwordMsg')

var usersList = []

if (JSON.stringify(localStorage.getItem('List')) != null) {
    usersList = JSON.parse(localStorage.getItem('List'))
    console.log(usersList);
    
}




function createUser() {
    if (validInputSignup(signupName,nameMsg) &&
        validInputSignup(signupEmail,emailMsg) &&
        validInputSignup(signupPassword,passwordMsg)) {
        var user = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }

        usersList.push(user)
        localStorage.setItem('List', JSON.stringify(usersList))
        clearInputs()
        console.log(usersList);
        validMsg.classList.add('d-none')
        setTimeout(function(){

            window.location.href = "login.html";
        },2000)
    }
    else {
        validMsg.classList.remove('d-none')
    }

}


function clearInputs() {
    signupName.value = ''
    signupEmail.value = ''
    signupPassword.value = ''

    signupName.classList.remove('is-valid')
    signupEmail.classList.remove('is-valid')
    signupPassword.classList.remove('is-valid')

}



// regex , msg , input
function validInputSignup(input, msg) {
    var regex = {
        signupName: /^[A-Z][a-z]{2,}$/,
        signupEmail: /^[a-z0-9]+@(gmail|yahoo|outlook).com$/,
        signupPassword: /^[a-zA-Z0-9]{5,}$/
    }

    var text = input.value
    
    console.log(regex[input.id].test(text));
    

    if (regex[input.id].test(text)) {
        input.classList.remove('is-invalid')
        msg.classList.add('d-none')
        input.classList.add('is-valid')
        validMsg.classList.add('d-none')

        return true

    } else {
        msg.classList.remove('d-none')
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
        return false
    }
}



