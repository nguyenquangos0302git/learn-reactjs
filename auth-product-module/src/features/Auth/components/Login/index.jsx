import React from "react";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { login, register } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import LoginForm from "../LoginForm";

Login.propTypes = {};

function Login(props) {
  const { closeDialog } = props;
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const submitForm = async (value) => {
    try {
      const action = login(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <LoginForm submitForm={submitForm} />
    </div>
  );
}

export default Login;
