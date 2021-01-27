import React from 'react';

import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/ambition_growth_investment_illustration.png';

const AmbitionGrowthInvestmentSection = () => {
  return (
    <section className={styles.ambition_growth_investment__section}>
      <aside className={styles.left}>
        <h3 className={styles.head__text}>
          What is Ambition Growth Investment?
        </h3>
        <p className={styles.paragraph}>
          <strong>Ambition Growth</strong> Investment involves maximum Ten
          investors in one company&apos;s Dmat account which provides minimum
          risk and secure returns in a week.
        </p>
        <div className={styles.slot}>
          <h5 className={styles.slot__head}>Slots for Investment &mdash;</h5>
          <ul className={styles.slot__list}>
            <li>Rs. 15,000/&ndash; per investor</li>
            <li>Rs. 25,000/&ndash; per investor</li>
            <li>Rs. 55,000/&ndash; per investor</li>
          </ul>
        </div>
        <div className={styles.benefits}>
          <h5 className={styles.benefits__head}>
            Benefits of <strong>Ambition Growth</strong> &mdash;
          </h5>
          <ul className={styles.benefits__list}>
            <li>Reduced Stress Levels.</li>
            <li>Present in Both &ndash; High and Lows.</li>
            <li>Takes Emotion out of the Equation.</li>
            <li>Save Money on Commissions.</li>
            <li>Compounding (Multiplies your money).</li>
            <li>Drop in Investment Risk.</li>
          </ul>
        </div>
      </aside>
      <Fade right>
        <figure className={styles.right}>
          <img
            className={styles.illustration}
            src={illustration}
            alt="Finance illustration"
          />
        </figure>
      </Fade>
    </section>
  );
};

export default AmbitionGrowthInvestmentSection;
