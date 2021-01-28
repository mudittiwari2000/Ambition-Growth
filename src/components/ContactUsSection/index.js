import React, { useCallback, useState } from 'react';

// Utilities
import clsx from 'clsx';
import { Fade } from 'react-reveal';
import emailjs from 'emailjs-com';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/contact_us_illustration.png';

// Material Components
import {
  Button,
  Checkbox,
  InputAdornment,
  CircularProgress,
  TextField,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  Snackbar,
  Slide,
  makeStyles,
  withStyles,
  useMediaQuery
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

// Material Icons
import {
  Smartphone as SmartphoneIcon,
  Person as PersonIcon
} from '@material-ui/icons';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f5f5f5'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f5f5f5'
      }
    }
  }
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ContactUsSection = () => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const isImageVisible = useMediaQuery('(min-width: 1280px)');

  const sendEmail = useCallback(async () => {
    try {
      setLoading(true);
      const response = await emailjs.send(
        'service_3429yk8',
        'template_1saiiie',
        {
          full_name: fullName,
          phone_number: phoneNumber
        },
        'user_RysYQ8Jhz16Ax9oz6uSXA'
      );
      console.log(response);
      setLoading(false);
      setSnackbarOpen(true);
    } catch (err) {
      console.error(err);
    }
  }, [fullName, phoneNumber]);

  const handleFullNameField = (event) => {
    setFullName(event.target.value);
  };
  const handlePhoneNumberField = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <section
      id="ContactUs"
      className={clsx(styles.contact_us__section, 'container')}
    >
      <aside className={styles.left}>
        <h3 className={styles.contact_us__header}>Request a Call Back</h3>
        <form onSubmit={handleFormSubmit}>
          <CssTextField
            required
            value={fullName}
            onChange={handleFullNameField}
            label="Full Name"
            id="contact-us-full-name"
            className={clsx(classes.margin, styles.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
              autoComplete: 'off'
            }}
            variant="outlined"
          />
          <CssTextField
            required
            value={phoneNumber}
            onChange={handlePhoneNumberField}
            label="Mobile Number"
            id="contact-us-mobile"
            type="tel"
            className={clsx(classes.margin, styles.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SmartphoneIcon />
                </InputAdornment>
              ),
              autoComplete: 'off'
            }}
            variant="outlined"
          />
          <FormControl
            required
            error={error}
            component="fieldset"
            className={styles.formControl}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!error}
                    onChange={() => setError((prev) => !prev)}
                    name="acceptTerms"
                  />
                }
                label={
                  <p>
                    I acknowledge I have read the{' '}
                    <a href="#!" className={styles.terms_of_use}>
                      Terms of Use
                    </a>
                  </p>
                }
              />
            </FormGroup>
            {error && (
              <FormHelperText>
                You need to accept the Terms of Use
              </FormHelperText>
            )}
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={styles.submitBtn}
            disabled={error}
          >
            {isLoading ? <CircularProgress fullWidth /> : 'Submit'}
          </Button>
        </form>
      </aside>
      {isImageVisible && (
        <Fade bottom>
          <figure className={styles.right}>
            <img
              className={styles.illustration}
              src={illustration}
              alt="Contact Us illustration"
            />
          </figure>
        </Fade>
      )}
      <Snackbar
        open={snackbarOpen}
        TransitionComponent={Slide}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          elevation={6}
          variant="filled"
          severity="success"
        >
          Your Request to Call back has been received!
        </MuiAlert>
      </Snackbar>
    </section>
  );
};

export default ContactUsSection;
