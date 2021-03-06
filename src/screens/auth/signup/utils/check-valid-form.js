import { toast } from "react-toastify";

const formRegex = {
  email: /^.+@.+\.com$/,
  name: /^[a-zA-Z]+(\s*\w*)*$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
};

export const signupValidation = (state, dispatch) => {
  let flag = true;

  if (state.email === "" || !formRegex.email.test(state.email)) {
    toast.error("Enter valid email")
    flag=false
  }
  if (state.password === "" || !formRegex.password.test(state.password)) {
    toast.error("Enter valid password min ");
    flag = false;
  }
  if (state.firstName === "" || !formRegex.name.test(state.firstName)) {
    dispatch({
      type: "SET_FIRST_NAME_ERROR",
      payload: true,
    });
    flag = false;
  }
  if (state.lastName === "" || !formRegex.name.test(state.lastName)) {
    dispatch({
      type: "SET_LAST_NAME_ERROR",
      payload: true,
    });
    flag = false;
  }
  if (
    state.confirmPassword === "" ||
    state.password !== state.confirmPassword
  ) {
    dispatch({
      type: "SET_CNFRM_PASSWORD_ERROR",
      payload: true,
    });
    flag = false;
  }

  return flag;
};
