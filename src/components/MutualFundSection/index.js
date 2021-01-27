import React from 'react';

import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/mutual_fund_illustration.png';

const MutualFundSection = () => {
  return (
    <section className={styles.mutual_fund__section}>
      <aside className={styles.left}>
        <h1 className={styles.head__text}>What is Mutual Funds?</h1>
        <p className={styles.paragraph}>
          Mutual Fund is a program or scheme where a cluster of investors pools
          their investment (money) together to a Fund Manager or Asset
          Management Company (AMC). The fund manager investers the money in
          securities like equity market &amp; debt market. The return generated
          from the invested money is pushed back to the investors according to
          their investment. AMC&apos;s charge a service amount from the
          investors to manage their portfolio.
        </p>
      </aside>
      <Fade bottom>
        <figure className={styles.right}>
          <img
            className={styles.illustration}
            src={illustration}
            alt="Mutual Fund illustration"
          />
        </figure>
      </Fade>
    </section>
  );
};

export default MutualFundSection;
