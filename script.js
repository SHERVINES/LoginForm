const userInput = document.querySelector(".user-input");
const passInput = document.querySelector(".pass-input");
const userMsg = document.querySelector(".username-msg");
const passMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".login-button");

signinBtn.addEventListener("click", signIn);

function signIn(event) {
  event.preventDefault();
  const userValue = userInput.value;
  const passValue = passInput.value;

  userMsg.innerText = "";
  passMsg.innerText = "";
  signinMsg.innerText = "";
  let ifsendData = true;
  if (
    userValue.length === 0 ||
    userValue.indexOf("@") === -1 ||
    userValue.indexOf(".") === -1
  ) {
    userMsg.innerText = "Please enter a valid username";
    ifsendData = false;
  }
  if (passValue.length === 0) {
    passMsg.innerText = "Please enter your password";
    ifsendData = false;
  } else if (passValue.length <= 4) {
    passMsg.innerText = "Your password is too short";
    ifsendData = false;
  }

  if (ifsendData) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        username: userValue,
        password: passValue,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => {
        if (response.ok) {
          signinMsg.innerText = "Signed in successfully";
        }
      });
  
  }
}
