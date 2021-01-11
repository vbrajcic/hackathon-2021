import React, { FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';

import useBreakpoint from 'utils/hooks/useBreakpoint';

import style from './ApplyForm.module.scss';

type ContactFields = {
  name: string;
  email: string;
  message?: string;
};

const defaultValues: ContactFields = {
  name: '',
  email: '',
  message: '',
};

const ApplyForm: FC<{}> = () => {
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const { handleSubmit, control, errors, formState, reset } = useForm({ defaultValues });
  const Breakpoint = useBreakpoint();

  const resetForm = (): void => {
    reset();
    setSnackbarMessage('');
  };

  const onSubmit = async (data: ContactFields): Promise<void> => {
    // const res = await fetch('/api/contact', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    // const json = await res.json();
    setSnackbarMessage(JSON.stringify(data));
    setTimeout(() => resetForm(), 3000);
  };

  const emailError = errors.email ? errors.email.message : '';
  const submitText = formState.isSubmitting ? 'Sending...' : 'Apply';

  const isMobile = Breakpoint.isBelow('xs');

  return (
    <Paper className={style.container} classes={{ root: style.root }} square={isMobile} elevation={Number(!isMobile)}>
      <Snackbar message={snackbarMessage} open={Boolean(snackbarMessage.length)} />
      <Typography variant="h2" color="inherit">
        Apply for
        <br />
        this job
      </Typography>
      <Grid container spacing={3} justify="space-between">
        <Grid item sm={12} md={7} lg={7}>
          <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <Controller
              name="name"
              as={
                <TextField
                  type="name"
                  placeholder="Name"
                  fullWidth
                  helperText={emailError}
                  error={Boolean(emailError)}
                />
              }
              control={control}
            />
            <Controller
              name="email"
              as={
                <TextField
                  type="email"
                  placeholder="Email"
                  fullWidth
                  helperText={emailError}
                  error={Boolean(emailError)}
                />
              }
              rules={{
                required: { value: true, message: 'Email is required' },
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
              }}
              control={control}
            />
            <Controller
              name="message"
              as={<TextField placeholder="Tell us something about yourself" fullWidth multiline rowsMax={3} />}
              control={control}
            />
            <Button type="submit" disabled={formState.isSubmitting}>
              {submitText}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ApplyForm;
