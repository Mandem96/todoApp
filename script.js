 let form = document.getElementById('form');
 form.addEventListener('submit', (e)=> {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value


    //localstorage

  localStorage.setItem('username',username)
  localStorage.setItem('password',password)

  alert("Your details are saved in the localstorage");



})