import { FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "19ch",
  },
}));

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(() => {
    return false;
  });

  const classes = useStyles();

  const { form, name, label, disabled } = props;

  const { control } = form;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <FormControl
          className={clsx(classes.margin)}
          margin="normal"
          fullWidth
          variant="outlined"
        >
          <InputLabel htmlFor={name} error={invalid}>
            {label}
          </InputLabel>
          <OutlinedInput
            id={name}
            name={name}
            label={label}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onChange={onChange}
            error={invalid}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error={invalid}>{error?.message}</FormHelperText>
        </FormControl>
      )}
    ></Controller>
  );
}

export default PasswordField;
