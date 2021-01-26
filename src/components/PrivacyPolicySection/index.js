import React from 'react';

// Utilities
import clsx from 'clsx';

// Stylesheet
import styles from './index.module.scss';

const PrivacyPolicySection = () => {
  return (
    <section
      id="PrivacyPolicy"
      className={clsx(styles.privacy_policy__section, 'container')}
    >
      <h3 className={styles.main__header}>Privacy Policy</h3>
      <h5 className={styles.main__sub_header}>
        <strong>Ambition Growth</strong> respects and values the Right to
        Privacy of each and every individual. We are esteemed by the
        relationship and by becoming our clients, you have a promise from our
        side that we shall remain loyal to all our clients and non-clients whose
        information resides with us. This Privacy Policy of{' '}
        <strong>Ambition Growth</strong> applies to the current clients as well
        as former clients. You will find the guidelines governing our Privacy
        Policy below &ndash;
      </h5>
      <ul className={styles.main__list}>
        <li className={styles.main__list_item}>
          <p className={styles.main__list_item__text}>
            Your information, whether public or private, will NOT be sold,
            rented, exchanged, trasferred or given to any company or individual
            for any reason without your consent.
          </p>
        </li>
        <li className={styles.main__list_item}>
          <p className={styles.main__list_item__text}>
            Your information will be used SOLELY for providing the services to
            you for which you have subscribed to us, and not for any other
            purposes.
          </p>
        </li>
        <li className={styles.main__list_item}>
          <p className={styles.main__list_item__text}>
            Your information given to us represents your identity with us, if
            any changes are brought in the fields of which you have provided us
            the information, you shall bring it to our notice by either calling
            us or sending an email to us.
          </p>
        </li>
        <li className={styles.main__list_item}>
          <p className={styles.main__list_item__text}>
            In addition to the service provided to you, your information (mobile
            number, E-mail ID, etc.) can be brought in use for sending you
            newsletters, surveys, contest information, or information about any
            new services of the company which will be for your benefit and while
            subscribing for ours services, you afree that{' '}
            <strong>Ambition Growth</strong> has the right to do.
          </p>
        </li>
        <li className={styles.main__list_item}>
          <p className={styles.main__list_item__text}>
            By subscribing to our services, you consent to our Privacy Policy,
            and Terms of Use.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default PrivacyPolicySection;
