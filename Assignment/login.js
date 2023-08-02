document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'test@sunbasedata.com' && password === 'Test@123') {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = 'customer_list.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});

  
  
  