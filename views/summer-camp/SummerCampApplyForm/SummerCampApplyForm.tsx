import React, { useState } from 'react';
import Form, { FormSubmitHandler } from 'components/Forms/Form';
import FormInput from 'components/Forms/FormInput';
import cx from 'classnames';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  MenuItem,
  Paper,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { acceptedMimeTypes, FormValidator } from 'utils/static/FormValidation';
import { Laptop, Upload } from 'components/SvgIcons/SummerCamp';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';
import { convertFileToBase64 } from 'utils/static/convertFileToBase64';

import styles from './SummerCampApplyForm.module.scss';

type FieldOfInterest = '' | 'Project manager' | 'Mobile' | 'Frontend' | 'Backend';

interface ApplyFormValues {
  name: string;
  phone: string;
  email: string;
  fieldOfInterest: FieldOfInterest;
  cv: File | string;
  motivationLetter: File | string;
}

const fieldsOfInterest: Exclude<FieldOfInterest, ''>[] = ['Project manager', 'Mobile', 'Frontend', 'Backend'];
const defaultValues: ApplyFormValues = {
  name: '',
  phone: '',
  email: '',
  fieldOfInterest: '',
  cv: '',
  motivationLetter: '',
};

const SummerCampApplyForm: React.FC = () => {
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const { isMobile } = useBreakpoint();

  const handleSubmit: FormSubmitHandler<ApplyFormValues> = async (data, { reset }): Promise<void> => {
    const res = await fetch('/api/summer-camp', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        ...(data.cv && typeof data.cv !== 'string' ? { cv: await convertFileToBase64(data.cv) } : {}),
        ...(data.motivationLetter && typeof data.motivationLetter !== 'string'
          ? { motivationLetter: await convertFileToBase64(data.motivationLetter) }
          : {}),
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
    <Box className={styles.container}>
      <Snackbar message={snackbarMessage} open={Boolean(snackbarMessage.length)} />
      <Container maxWidth="xl" disableGutters={isMobile}>
        <Paper className={styles.inner}>
          <Box>
            <Box className={styles.titleWrapper}>
              <Typography variant="h2" component="span" className={styles.year}>
                2021
              </Typography>
              <Typography variant="h2" className={styles.title}>
                Your Profico Summer Camp starts here
              </Typography>
            </Box>
            <img className={styles.bgImg} src={addAssetPrefix('/images/summerCamp/palm-tree.png')} alt="Palm tree" />
          </Box>
          <Form<ApplyFormValues> defaultValues={defaultValues} className={styles.form} onSubmit={handleSubmit}>
            {({ watch, setValue, trigger, formState: { errors, isSubmitting } }) => {
              const { fieldOfInterest, cv, motivationLetter } = watch();

              const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
                const { files, name } = event.target;
                const inputName = name as keyof ApplyFormValues;

                if (files) {
                  setValue(inputName, files[0]);
                  trigger(inputName);
                }
              };

              const cvFilename = typeof cv !== 'string' ? cv.name : '';
              const motivationFilename = typeof motivationLetter !== 'string' ? motivationLetter.name : '';

              return (
                <>
                  <FormInput
                    name="name"
                    placeholder="Name"
                    validate={FormValidator.isNotEmpty}
                    className={styles.input}
                    fullWidth
                  />
                  <FormInput
                    name="phone"
                    placeholder="Phone"
                    validate={FormValidator.all(FormValidator.isNotEmpty, FormValidator.isValidPhoneNumber)}
                    className={styles.input}
                    fullWidth
                  />
                  <FormInput
                    name="email"
                    placeholder="Email"
                    validate={FormValidator.all(FormValidator.isNotEmpty, FormValidator.isValidEmail)}
                    className={styles.input}
                    fullWidth
                  />
                  <FormInput
                    validate={FormValidator.isNotEmpty}
                    name="fieldOfInterest"
                    label="Select field of interest"
                    className={cx(styles.input, styles.select)}
                    InputProps={{ classes: { formControl: styles.formControl } }}
                    InputLabelProps={{
                      shrink: fieldOfInterest !== '',
                      classes: { root: styles.label, shrink: styles.shrinked },
                    }}
                    SelectProps={{
                      classes: { icon: styles.icon, select: styles.selectInputInner },
                      startAdornment: (
                        <InputAdornment position="start">
                          <Laptop />
                        </InputAdornment>
                      ),
                      MenuProps: {
                        disablePortal: true,
                        keepMounted: true,
                        classes: { paper: styles.dropdown },
                      },
                    }}
                    fullWidth
                    select
                  >
                    {fieldsOfInterest.map(field => (
                      <MenuItem key={field} value={field} className={styles.dropdownItem}>
                        <Typography variant="body2">{field}</Typography>
                      </MenuItem>
                    ))}
                  </FormInput>
                  <FormInput
                    name="cv"
                    validate={FormValidator.all(FormValidator.isNotEmpty, FormValidator.isValidFile)}
                    renderInput={() => (
                      <FormControl className={styles.file} fullWidth>
                        <Input
                          name="cv"
                          id="cv-file-input"
                          type="file"
                          inputProps={{ accept: acceptedMimeTypes }}
                          style={{ display: 'none' }}
                          onChange={handleUpload}
                        />
                        <label htmlFor="cv-file-input">
                          <Button
                            variant="outlined"
                            startIcon={<Upload />}
                            component="span"
                            className={styles.uploadButton}
                            classes={{ label: styles.buttonLabel }}
                            fullWidth
                          >
                            Upload CV / Resume
                          </Button>
                        </label>
                        {errors.cv && errors.cv.message ? (
                          <FormHelperText id="cv-error" className={styles.cvError} error>
                            {errors.cv.message}
                          </FormHelperText>
                        ) : (
                          <FormHelperText className={styles.selectedFileName}>
                            {cvFilename || 'Maximum file size is 5MB'}
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                  <FormInput
                    name="motivationLetter"
                    validate={FormValidator.all(FormValidator.isNotEmpty, FormValidator.isValidFile)}
                    renderInput={() => (
                      <FormControl margin="dense" fullWidth>
                        <Input
                          name="motivationLetter"
                          id="motivation-letter-file-input"
                          type="file"
                          inputProps={{ accept: acceptedMimeTypes }}
                          style={{ display: 'none' }}
                          onChange={handleUpload}
                        />
                        <label htmlFor="motivation-letter-file-input">
                          <Button
                            variant="outlined"
                            startIcon={<Upload />}
                            component="span"
                            className={styles.uploadButton}
                            classes={{ label: styles.buttonLabel }}
                            fullWidth
                          >
                            Upload motivation letter
                          </Button>
                        </label>
                        {errors.motivationLetter && errors.motivationLetter.message ? (
                          <FormHelperText id="motivation-letter-error" className={styles.cvError} error>
                            {errors.motivationLetter.message}
                          </FormHelperText>
                        ) : (
                          <FormHelperText className={styles.selectedFileName}>
                            {motivationFilename || 'Maximum file size is 5MB'}
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                  <Button
                    type="submit"
                    classes={{ disabled: styles.disabled }}
                    startIcon={null}
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    <Typography variant="h5" component="span">
                      {isSubmitting ? 'Sending...' : 'Apply'}
                    </Typography>
                  </Button>
                </>
              );
            }}
          </Form>
        </Paper>
      </Container>
    </Box>
  );
};

export default SummerCampApplyForm;
