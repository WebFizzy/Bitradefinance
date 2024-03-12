function togglePasswordVisibility() {
  var password = document.getElementById('password_confirmation');
  var togglePassword = document.getElementById('togglePassword');
  if (password.type === "password") {
      password.type = "text";
      togglePassword.classList.remove('fa-eye');
      togglePassword.classList.add('fa-eye-slash');
  } else {
      password.type = "password";
      togglePassword.classList.remove('fa-eye-slash');
      togglePassword.classList.add('fa-eye');
  }
}

document.querySelector('.play-icon').addEventListener('click', function() {
  var video = document.querySelector('.youtube-video');
  video.style.display = 'block';
  this.style.display = 'none';
  document.querySelector('img').style.display = 'none';
});


function togglePasswordVisible() {
  var password = document.getElementById('signInPassword');
  var togglePassword = document.getElementById('togglePassword');
  if (password.type === "password") {
      password.type = "text";
      togglePassword.classList.remove('fa-eye');
      togglePassword.classList.add('fa-eye-slash');
  } else {
      password.type = "password";
      togglePassword.classList.remove('fa-eye-slash');
      togglePassword.classList.add('fa-eye');
  }
}

// Navbar
  const navMenu = document.querySelector('.out-log')
  const navOpenBtn = document.querySelector('.acct-log1')
  const navCloseBtn = document.querySelector('.acct-log2')

  const openNavHandler = () => {
    navMenu.style.display = 'block'
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block'
  }

  const closeNavHandler = () => {
    navMenu.style.display = 'none'
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none'
  }

  navOpenBtn.addEventListener('click', openNavHandler)
  navCloseBtn.addEventListener('click', closeNavHandler)

    //== close nav menu on click of nav link on small screen

  const navItems = navMenu.querySelectorAll('a');  
  if(window.innerWidth > 168) {
    navItems.forEach(item => {
      item.addEventListener('click', closeNavHandler)
    })
  }


