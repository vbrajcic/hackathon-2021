import React from 'react';

import { FormProvider, SubmitHandler, UnpackNestedValue, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';

type HtmlFormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
export type FormSubmitHandler<T> = (data: UnpackNestedValue<T>, methods: UseFormReturn<T>) => void | Promise<void>;

export interface FormProps<TValues = {}> extends UseFormProps<TValues>, Omit<HtmlFormProps, 'onSubmit'> {
  onSubmit: FormSubmitHandler<TValues>;
  children: React.ReactNode | ((props: UseFormReturn<TValues>) => React.ReactNode);
}

function Form<TValues>({
  onSubmit: onSubmitProp,
  children,
  mode = 'onTouched',
  context,
  criteriaMode,
  defaultValues,
  reValidateMode,
  resolver,
  shouldFocusError,
  shouldUnregister,
  ...props
}: FormProps<TValues>) {
  const methods = useForm({
    mode,
    context,
    criteriaMode,
    defaultValues,
    reValidateMode,
    resolver,
    shouldUnregister,
    shouldFocusError,
  });

  const onSubmit: SubmitHandler<TValues> = values => onSubmitProp(values, methods);

  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(onSubmit)}>
        {typeof children === 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  );
}

export default Form;
