import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';
import Snowman from 'components/SvgIcons/Snowman';
import Sailing from 'components/SvgIcons/Sailing';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import cn from 'clsx';
import Form, { FormSubmitHandler } from 'components/Forms/Form';
import FormInput from 'components/Forms/FormInput';

import { Link } from '@material-ui/core';

import ContactDetail from './ContactDetail';

import style from './ContactForm.module.scss';

type ContactFields = {
  email: string;
  message?: string;
};

interface ContactFormProps {
  gaName?: string;
  className?: string;
  classes?: {
    root?: string;
    form?: string;
  };
}

const defaultValues: ContactFields = {
  email: '',
  message: '',
};

const ContactForm: FC<ContactFormProps> = ({ gaName = '', className, classes }) => {
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const { isMobile } = useBreakpoint();

  const handleSubmit: FormSubmitHandler<ContactFields> = async (data, { reset }): Promise<void> => {
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
    setTimeout(() => {
      reset();
      setSnackbarMessage('');
    }, 3000);
  };

  return (
    <Paper
      id="contact-form"
      classes={{ root: style.container }}
      className={cn(className, classes?.root)}
      square={isMobile}
      elevation={Number(!isMobile)}
    >
      <Snackbar message={snackbarMessage} open={Boolean(snackbarMessage.length)} />
      <Typography variant="h2">
        Got a project?
        <br />
        Let&apos;s have a chat!
      </Typography>
      <Grid container spacing={3} justify="space-between">
        <Grid item sm={12} md={7} lg={7}>
          <Form defaultValues={defaultValues} onSubmit={handleSubmit} className={cn(style.form, classes?.form)}>
            {({ formState: { isSubmitting } }) => (
              <>
                <FormInput name="email" type="email" placeholder="Your email" fullWidth className={style.input} />
                <FormInput
                  name="message"
                  placeholder="Tell us more about your project"
                  fullWidth
                  multiline
                  rowsMax={3}
                  className={style.input}
                />
                <Button type="submit" data-ga-event-name="contact_form_submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Contact us'}
                </Button>
              </>
            )}
          </Form>
        </Grid>
        <Grid container item sm={12} md={5} lg={5}>
          <ContactDetail icon={Snowman} title="Zagreb Office">
            Radnička cesta 39
          </ContactDetail>
          <ContactDetail icon={Sailing} title="Split Office">
            Makarska 26A
          </ContactDetail>
          <ContactDetail title="Contact info">
            Split+Zagreb, Croatia
            <br />
            {isMobile ? <Link href="tel:+385 91 395 9711">+385 91 395 9711</Link> : '+385 91 395 9711'}
            <Link
              data-ga-event-name="contact"
              data-ga-name={gaName}
              display="block"
              href="mailto:info@profico.hr"
              className={style.email}
            >
              info@profico.hr
            </Link>
          </ContactDetail>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactForm;
