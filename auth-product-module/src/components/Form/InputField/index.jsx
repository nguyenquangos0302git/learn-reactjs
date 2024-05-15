import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  
};

function InputField(props) {

  const { form, name, label, disabled } = props;

  const { control } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={
        (
          {
            field: {
              onChange, onBlur, value, name
            },
            fieldState: {
              invalid, error
            }
          }) => (
            <TextField
              margin="normal"
              variant="outlined"
              fullWidth 
              name={name}
              value={value}
              label={label}
              onChange={onChange}
              onBlur={onBlur}
              error={invalid}
              helperText={error?.message}
            />
          )
      }
    >
      
    </Controller>
  );
}

export default InputField;