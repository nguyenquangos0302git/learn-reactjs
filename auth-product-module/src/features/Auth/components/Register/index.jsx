import React from "react";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

Register.propTypes = {};

function Register(props) {
  const { closeDialog } = props;
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const submitForm = async (value) => {
    try {
      value.username = value.email;
      const action = register(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      enqueueSnackbar("Register Success", { variant: "success" });
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm submitForm={submitForm} />
    </div>
  );
}

export default Register;
