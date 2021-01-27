import React from 'react';

// Utilities
import clsx from 'clsx';
import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/our_mission_illustration.png';

const LongTermInvestmentSection = () => {
  return (
    <section
      className={clsx(styles.long_term_investment__section, 'container')}
    >
      <Fade left>
        <figure className={styles.left}>
          <img
            className={styles.illustration}
            src={illustration}
            alt="Longterm Fund illustration"
          />
        </figure>
      </Fade>
      <aside className={styles.right}>
        <h1 className={styles.head__text}>What is Longterm Funds?</h1>
        <p className={styles.paragraph}>
          A long-term investment is an account on the asset side of a
          company&apos;s balance sheet that represents the company&apos;s
          investments, including stocks, bonds, real estate and cash. Long-term
          investments are assets that a company intends to hold for more than a
          year.
        </p>
      </aside>
    </section>
  );
};

export default LongTermInvestmentSection;
