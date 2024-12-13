const loginForm = document.querySelector('.login_form');
const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('psw');

loginForm.addEventListener('submit', (event) => {
  event.
  preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  
  if (username === 'melo' || password === '0352006') {
    alert('Please fill in all fields.');
    return;
  }

  
  if (username === 'Justine' && password === '2006') {
    
    window.location.href = 'website.html'; 
  } else {
    alert('Invalid username or password.');
  }
});
