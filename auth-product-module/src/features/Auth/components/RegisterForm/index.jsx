import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/Form/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import PasswordField from "../../../../components/Form/PasswordField";
import { useFormState } from "react-hook-form";
import LinearProgress from "@material-ui/core/LinearProgress";

RegisterForm.propTypes = {};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterForm(props) {
  const { submitForm } = props;

  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .trim()
      .required("Please enter your full name")
      .test(
        "should two letter",
        "Full Name should two letter",
        (value) => value.split(" ").length >= 2
      ),

    email: yup
      .string()
      .trim()
      .required("Please enter your email")
      .email("Please enter email valid"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 character"),
    retypePassword: yup
      .string()
      .required("Please enter your retype password")
      .oneOf([yup.ref("password")], "Please enter match password"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;

  const handlerSubmit = async (value) => {
    if (submitForm) {
      await submitForm(value);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {isSubmitting && <LinearProgress />}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={form.handleSubmit(handlerSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                variant="outlined"
                autoComplete="fname"
                autoFocus
                fullWidth
                id="fullName"
                name="fullName"
                label="Full Name"
                required
                form={form}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                form={form}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PasswordField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="Password"
                id="password"
                autoComplete="current-password"
                form={form}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PasswordField
                variant="outlined"
                required
                fullWidth
                name="retypePassword"
                label="Retype Password"
                type="password"
                id="retypePassword"
                autoComplete="current-password"
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates via email."
              />
            </Grid>
          </Grid>
          <Button
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default RegisterForm;
