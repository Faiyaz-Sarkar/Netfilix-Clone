export const validEmail = () => {
  const signInEmail = document.getElementById("signInEmail");
  signInEmail.onkeyup = () => {
    let formInput = document.querySelector("form input");
    let input = signInEmail.value;
    let emailRegex =
      /^[A-Za-z0-9]+(?:[._+&][A-Za-z\d]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/gm;
    let numberRegex = /^[01].[36789][\d]{8}$/g;
    // let emailErrorMsg = document.getElementById("emailErrorMsg");
    if (input.match(emailRegex) || input.match(numberRegex)) {
      // formInput.style.boxShadow = "1px 1px 8px 1px #ddd";
      console.log("valid");
    } else {
      formInput.style.border = "1px solid red";
      console.log("invalid");
    }
  };
};

export const validName = () => {
  let firstName = document.getElementById("firstName");
  let nameRegex = /^((?=.*[A-Z])(?=.*[a-z]).{3,16})(?:[\d]*)$/g;
  firstName.onkeyup = () => {
    if (firstName.value.match(nameRegex)) {
      nameErrorMsg.classList.remove("block");
      nameErrorMsg.classList.add("hidden");
      return true;
    } else {
      nameErrorMsg.classList.remove("hidden");
      nameErrorMsg.classList.add("block");
      return false;
    }
  };
};
let dateValidation = /^(0[1-9]|1[0-2])\/(.[0-3]|.[0-9])\/[1-3][0-9]$/g;

export const passwordValidation = () => {
  let Password = document.getElementById("Password");
  Password.onkeyup = () => {
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{4,}$/g;
    if (Password.value.match(passRegex)) {
      passwordErrorMsg.classList.remove("block");
      passwordErrorMsg.classList.add("hidden");
      return true;
    } else {
      passwordErrorMsg.classList.remove("hidden");
      passwordErrorMsg.classList.add("block");
      return false;
    }
  };
};

export const retypePassword = () => {
  let Password2 = document.getElementById("Password2");
  let Password = document.getElementById("Password");
  Password2.onkeyup = () => {
    if (Password2.value.match(Password.value)) {
      let retypePasswordErrorMsg = document.getElementById(
        "retypePasswordErrorMsg"
      );
      retypePasswordErrorMsg.classList.remove("block");
      retypePasswordErrorMsg.classList.add("hidden");
      return true;
    } else {
      retypePasswordErrorMsg.classList.remove("hidden");
      retypePasswordErrorMsg.classList.add("block");
      return false;
    }
  };
};
