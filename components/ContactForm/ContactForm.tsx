import React, { FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';

import Snowman from 'components/SvgIcons/Snowman';
import Sailing from 'components/SvgIcons/Sailing';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import ContactDetail from './ContactDetail';

import style from './ContactForm.module.scss';

type ContactFields = {
  email: string;
  message?: string;
};

const defaultValues: ContactFields = {
  email: '',
  message: '',
};

const ContactForm: FC<{}> = () => {
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const { handleSubmit, control, errors, formState, reset } = useForm({ defaultValues });
  const Breakpoint = useBreakpoint();

  const resetForm = (): void => {
    reset();
    setSnackbarMessage('');
  };

  const onSubmit = async (data: ContactFields): Promise<void> => {
    const res = await fetch('/api/contact', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setSnackbarMessage(json.message);
    setTimeout(() => resetForm(), 3000);
  };

  const emailError = errors.email ? errors.email.message : '';
  const submitText = formState.isSubmitting ? 'Sending...' : 'Get in touch';

  const isMobile = Breakpoint.isBelow('xs');

  return (
    <Paper classes={{ root: style.container }} square={isMobile} elevation={Number(!isMobile)}>
      <Snackbar message={snackbarMessage} open={Boolean(snackbarMessage.length)} />
      <Typography variant="h2">
        Got a project?
        <br />
        Let&apos;s have a chat!
      </Typography>
      <Grid container spacing={3} justify="space-between">
        <Grid item sm={12} md={7} lg={7}>
          <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <Controller
              name="email"
              as={
                <TextField
                  type="email"
                  placeholder="Your email"
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
              as={<TextField placeholder="Tell us more about your project" fullWidth multiline rowsMax={3} />}
              control={control}
            />
            <Button type="submit" disabled={formState.isSubmitting}>
              {submitText}
            </Button>
          </form>
        </Grid>
        <Grid container item sm={12} md={5} lg={5}>
          <ContactDetail icon={Snowman} title="Zagreb Office">
            Vukovarska 269D
          </ContactDetail>
          <ContactDetail icon={Sailing} title="Split Office">
            Makarska 26A
          </ContactDetail>
          <ContactDetail title="Contact info">
            Split+Zagreb, Croatia
            <br />
            +385 91 322 1274
            <span>info@profico.hr</span>
          </ContactDetail>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactForm;
