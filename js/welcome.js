
var currentUser = localStorage.getItem('currentUser')
if(currentUser != null){

    document.getElementById('currentUser').innerHTML= currentUser
}else{
    logout()
}


function logout(){
    localStorage.removeItem('currentUser')
    window.location.href = 'login.html'
}