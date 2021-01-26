import React from 'react';

// Utilities
import clsx from 'clsx';
import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/contact_us_illustration.png';

// Material Components
import {
  Button,
  Checkbox,
  InputAdornment,
  TextField,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  makeStyles,
  withStyles,
  useMediaQuery
} from '@material-ui/core';
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
  const [error, setError] = React.useState(false);
  const isImageVisible = useMediaQuery('(min-width: 1280px)');

  return (
    <section
      id="ContactUs"
      className={clsx(styles.contact_us__section, 'container')}
    >
      <aside className={styles.left}>
        <h3 className={styles.contact_us__header}>Request a Call Back</h3>
        <form>
          <CssTextField
            required
            label="Full Name"
            id="contact-us-full-name"
            className={clsx(classes.margin, styles.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
            variant="outlined"
          />
          <CssTextField
            required
            label="Mobile Number"
            id="contact-us-mobile"
            type="tel"
            className={clsx(classes.margin, styles.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SmartphoneIcon />
                </InputAdornment>
              )
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
                    I accept the{' '}
                    <span className={styles.terms_of_use}>Terms of Use</span>.
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
          >
            Submit
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
    </section>
  );
};

export default ContactUsSection;
