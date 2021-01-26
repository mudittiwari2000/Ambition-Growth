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
  InputAdornment,
  TextField,
  makeStyles,
  withStyles
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

  return (
    <section
      id="ContactUs"
      className={clsx(styles.contact_us__section, 'container')}
    >
      <aside className={styles.left}>
        <h3 className={styles.contact_us__header}>Request a Call Back</h3>
        <form>
          <CssTextField
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
            label="Mobile Number"
            id="contact-us-mobile"
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitBtn}
          >
            Submit
          </Button>
        </form>
      </aside>
      <Fade bottom>
        <figure className={styles.right}>
          {/* <img
            className={styles.illustration}
            src={illustration}
            alt="Finance illustration"
          /> */}
        </figure>
      </Fade>
    </section>
  );
};

export default ContactUsSection;
