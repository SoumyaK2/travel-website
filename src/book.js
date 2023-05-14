let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('.fa-xmark');

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');    
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');    
})
