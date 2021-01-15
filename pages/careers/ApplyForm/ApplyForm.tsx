import React, { FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';
import { FormControl, FormHelperText, Input } from '@material-ui/core';

import useBreakpoint from 'utils/hooks/useBreakpoint';
import File from 'components/SvgIcons/File';

import style from './ApplyForm.module.scss';

type ContactFields = {
  name: string;
  phone: string;
  email: string;
  cv?: File;
  repo?: string;
  message?: string;
};

const defaultValues: ContactFields = {
  name: '',
  phone: '',
  email: '',
  cv: undefined,
  repo: '',
  message: '',
};

const ApplyForm: FC<{}> = () => {
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const { handleSubmit, control, errors, formState, reset } = useForm({ defaultValues });
  const { isMobile } = useBreakpoint();

  const resetForm = (): void => {
    reset();
    setSelectedFile(null);
    setSnackbarMessage('');
  };

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setSelectedFile(files[0]);
    }
  };

  const onSubmit = async (data: ContactFields): Promise<void> => {
    const res = await fetch('/api/career', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        cv: await toBase64(selectedFile as File),
      }),
    });
    const json = await res.json();
    setSnackbarMessage(json.message);
    setTimeout(() => resetForm(), 3000);
  };

  const nameError = errors.name ? errors.name.message : '';
  const phoneError = errors.phone ? errors.phone.message : '';
  const emailError = errors.email ? errors.email.message : '';
  const cvError = errors.cv ? errors.cv : '';
  const submitText = formState.isSubmitting ? 'Sending...' : 'Apply';

  return (
    <Paper className={style.container} classes={{ root: style.root }} square={isMobile} elevation={Number(!isMobile)}>
      <Snackbar message={snackbarMessage} open={Boolean(snackbarMessage.length)} />
      <Typography variant="h2" color="inherit">
        Apply for
        <br />
        this job
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Grid container justify="space-between">
          <Grid item sm={12} md={5} lg={5}>
            <Controller
              name="name"
              as={
                <TextField type="name" placeholder="Name" fullWidth helperText={nameError} error={Boolean(nameError)} />
              }
              control={control}
            />
            <Controller
              name="phone"
              as={
                <TextField
                  type="tel"
                  placeholder="Phone"
                  fullWidth
                  helperText={phoneError}
                  error={Boolean(phoneError)}
                />
              }
              rules={{
                required: { value: true, message: 'Phone is required' },
                minLength: 9,
                maxLength: 13,
              }}
              control={control}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
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
              name="cv"
              type="file"
              as={
                <FormControl fullWidth>
                  <Input
                    id="file-input"
                    type="file"
                    inputProps={{ multiple: true }}
                    className={style.input}
                    style={{ display: 'none' }}
                    onChange={handleUpload}
                  />
                  <label htmlFor="file-input">
                    <Button variant="outlined" startIcon={<File />} component="span" className={style.uploadButton}>
                      Upload CV / Resume
                    </Button>
                  </label>
                  <FormHelperText>{selectedFile?.name}</FormHelperText>
                  {cvError && <FormHelperText error>{cvError.name}</FormHelperText>}
                </FormControl>
              }
              control={control}
            />
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Controller
              name="repo"
              as={<TextField placeholder="Links to your Website/Github/Bitbucket" fullWidth multiline rowsMax={3} />}
              control={control}
            />
            <Controller
              name="message"
              as={<TextField placeholder="Tell us something about yourself" fullWidth multiline rowsMax={3} />}
              control={control}
            />
            <Button type="submit" disabled={formState.isSubmitting} className={style.submitButton}>
              {submitText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ApplyForm;
