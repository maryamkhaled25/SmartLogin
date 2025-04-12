// Login page

var loginEmail = document.getElementById('loginEmail')
var loginPassword = document.getElementById('loginPassword')

var validMsgLogin = document.getElementById('validMsgLogin')
var notfoundMsgLogin = document.getElementById('notfoundMsgLogin')
var emailMsgLogin = document.getElementById('emailMsgLogin')
var passwordMsgLogin = document.getElementById('passwordMsgLogin')


var usersList = []

if (JSON.stringify(localStorage.getItem('List')) != null) {
    usersList = JSON.parse(localStorage.getItem('List'))
    console.log(usersList);
}



function searchUser() {
    if (
        validInputLogin(loginEmail, emailMsgLogin) &&
        validInputLogin(loginPassword, passwordMsgLogin)
    ) {

        var isFound = false
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].email == loginEmail.value && usersList[i].password == loginPassword.value){
                isFound = true
                localStorage.setItem('currentUser',usersList[i].name)
                break
            }

        }

        if (isFound) {
            console.log('found & valid');
            validMsgLogin.classList.add('d-none')
            notfoundMsgLogin.classList.add('d-none')
            setTimeout(function(){

                window.location.href = "welcome.html";
            },500)

            

        }else {
            console.log('not found');
            notfoundMsgLogin.classList.remove('d-none')
            validMsgLogin.classList.add('d-none')

        }
    }else{
        console.log('not valid');
        validMsgLogin.classList.remove('d-none')
        notfoundMsgLogin.classList.add('d-none')

    }
}





function validInputLogin(input, msg) {
    var regex = {
        loginEmail: /^[a-z0-9]+@(gmail|yahoo|outlook).com$/,
        loginPassword: /^[a-zA-Z0-9]{5,}$/
    }
    var text = input.value

    if (regex[input.id].test(text)) {

        input.classList.remove('is-invalid')
        validMsgLogin.classList.add('d-none')
        input.classList.add('is-valid')
        msg.classList.add('d-none')
        return true

    } else {
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
        msg.classList.remove('d-none')
        return false
    }
}


