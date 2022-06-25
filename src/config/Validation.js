const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z ]*$/;

// Validate Login
export const validateLogin = ({ email }) => {
  if (emailRegex.test(email) === false) {
    return SimpleToast.show("Please enter valid email");
  }

  return true;
};
