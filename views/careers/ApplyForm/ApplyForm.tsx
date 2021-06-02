import React, { FC, useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';
import Form, { FormSubmitHandler } from 'components/Forms/Form';
import FormInput from 'components/Forms/FormInput';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import useJobPosition from 'utils/hooks/useJobPosition';
import Tag from 'types/posts/tag';
import File from 'components/SvgIcons/File';

import { FormControl, FormHelperText, Input } from '@material-ui/core';
import { Edges } from 'types/common';
import { acceptedMimeTypes, FormValidator } from 'utils/static/FormValidation';
import { convertFileToBase64 } from 'utils/static/convertFileToBase64';

import style from './ApplyForm.module.scss';

interface ApplyFormProps {
  title: string;
  jobTags?: Edges<Tag>;
}

type ContactFields = {
  name: string;
  phone: string;
  email: string;
  cv?: File | string;
  repo?: string;
  message?: string;
};

const defaultValues: ContactFields = {
  name: '',
  phone: '',
  email: '',
  cv: '',
  repo: '',
  message: '',
};

const ApplyForm: FC<ApplyFormProps> = ({ jobTags, title }) => {
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const { isMobile } = useBreakpoint();

  const jobPosition = useJobPosition(jobTags);

  const handleSubmit: FormSubmitHandler<ContactFields> = async (data, { reset }): Promise<void> => {
    const res = await fetch('/api/career', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        ...(data.cv && typeof data.cv !== 'string' ? { cv: await convertFileToBase64(data.cv) } : {}),
        position: title,
      }),
    });
    const json = await res.json();

    setSnackbarMessage(json.message);
    setTimeout(() => {
      reset();
      setSnackbarMessage('');
    }, 3000);
  };

  return (
    <Paper
      id="apply-form"
      className={style.container}
      classes={{ root: style.root }}
      square={isMobile}
      elevation={Number(!isMobile)}
    >
      <Snackbar message={snackbarMessage} open={Boolean(snackbarMessage.length)} />
      <Typography variant="h2" color="inherit">
        Apply for
        <br />
        this job
      </Typography>
      <Form<ContactFields> onSubmit={handleSubmit} defaultValues={defaultValues} className={style.form}>
        {({ formState: { isSubmitting, errors }, setValue, watch, trigger }) => {
          const { cv } = watch();

          const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { files } = event.target;
            if (files) {
              setValue('cv', files[0]);
              trigger('cv');
            }
          };

          const cvFilename = cv && typeof cv !== 'string' ? cv.name : '';

          return (
            <Grid container justify="space-between">
              <Grid item sm={12} md={5} lg={5}>
                <FormInput
                  name="name"
                  validate={FormValidator.all(FormValidator.isNotEmpty, FormValidator.maxLength(100))}
                  placeholder="Name"
                  fullWidth
                />
                <FormInput
                  name="phone"
                  validate={FormValidator.all(FormValidator.isNotEmpty, FormValidator.isValidPhoneNumber)}
                  type="tel"
                  placeholder="Phone"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <FormInput
                  name="email"
                  validate={FormValidator.all(FormValidator.isNotEmpty, FormValidator.isValidEmail)}
                  type="email"
                  placeholder="Email"
                  fullWidth
                />
                <FormInput
                  name="cv"
                  validate={FormValidator.isValidFile}
                  renderInput={() => (
                    <FormControl fullWidth>
                      <Input
                        name="cv"
                        id="file-input"
                        type="file"
                        inputProps={{ accept: acceptedMimeTypes }}
                        className={style.input}
                        style={{ display: 'none' }}
                        onChange={handleUpload}
                      />
                      <label htmlFor="file-input">
                        <Button variant="outlined" startIcon={<File />} component="span" className={style.uploadButton}>
                          Upload CV / Resume
                        </Button>
                      </label>
                      {errors.cv && errors.cv.message ? (
                        <FormHelperText id="cv-error" className={style.cvError} error>
                          {errors.cv.message}
                        </FormHelperText>
                      ) : (
                        <FormHelperText className={style.selectedFileName}>
                          {cvFilename || 'Maximum file size is 5MB'}
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <FormInput
                  name="repo"
                  placeholder="Links to your Website/Github/Bitbucket"
                  fullWidth
                  multiline
                  rowsMax={3}
                />
                <FormInput
                  name="message"
                  placeholder="Tell us something about yourself"
                  fullWidth
                  multiline
                  rowsMax={3}
                />
                <Button
                  type="submit"
                  data-ga-event-name="job_application_submit"
                  data-ga-job-position={jobPosition?.tag || ''}
                  disabled={isSubmitting}
                  className={style.submitButton}
                >
                  {isSubmitting ? 'Sending...' : 'Apply'}
                </Button>
              </Grid>
            </Grid>
          );
        }}
      </Form>
    </Paper>
  );
};

export default ApplyForm;
