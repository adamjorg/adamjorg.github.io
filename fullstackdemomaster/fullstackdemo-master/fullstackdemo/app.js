function insertHighscore() {

  let data = {
    username: prompt("Username:"),
    highscore: prompt("Highscore:")
  }

  fetch('/highscore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Highscore inserted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function getHighscore() {
  fetch("/highscore/" + prompt("Username:"))
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

function getHighscores() {
  fetch("/highscores")
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

function deleteHighscore() {

  let data = {
    highscoreID: prompt("HighscoreID:")
  }

  fetch('/highscore', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Highscore deleted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateHighscore() {

  let data = {
    highscoreID: prompt("HighscoreID"),
    highscore: prompt("Highscore:")
  }

  fetch('/highscore', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Highscore updated:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

//Confirm SignUp
function ConfirmSignUp() {


  let username = document.getElementById("username-input").value;
  let password = document.getElementById("password-original").value;
  let passwordCheck = document.getElementById("password-check").value;

  let data = {
    username: username,
    password: password
  }

  if(password != passwordCheck){
    alert("Your Passwords Do Not Match Each Other!!")
    return;
  }

  fetch('/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('User inserted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  alert("CONGRATULATIONS!! You Now Have An Account.")
}

//Confirm logIn
function ConfirmlogIn() {

  let usernameConfirm = document.getElementById("username-confirm").value;
  let passwordConfirm = document.getElementById("password-confirm").value;

  
  let body = {
    username: usernameConfirm,
    password: passwordConfirm
  }
  console.log("check password")
  

  fetch('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.loginWasSuccessful){
      sessionStorage.setItem("username", body.username);
      sessionStorage.setItem("password", body.password);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// delete user
async function deleteUser() {

  let data = {
    username: sessionStorage.getItem("username"),
    password: sessionStorage.getItem("password")
  }

  fetch('/user', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}