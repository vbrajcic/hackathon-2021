import React from 'react';

import { FilledTextFieldProps, TextField } from '@material-ui/core';
import { Controller, ControllerProps, useFormContext, Validate } from 'react-hook-form';

interface FormInputProps extends Omit<FilledTextFieldProps, 'variant' | 'name'> {
  name: ControllerProps['name'];
  validate?: Validate<string> | Record<string, Validate<string>>;
  renderInput?: ControllerProps['render'];
}

const FormInput: React.FC<FormInputProps> = ({ name, validate, helperText, renderInput, ...props }) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = errors[name];
  const hasError = Boolean(error);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ validate }}
      render={
        renderInput ||
        (p => (
          <TextField {...props} {...p.field} error={hasError} helperText={hasError ? error?.message : helperText} />
        ))
      }
    />
  );
};

export default FormInput;
