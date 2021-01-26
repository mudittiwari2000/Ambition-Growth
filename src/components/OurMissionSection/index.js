import React from 'react';

// Utilities
import clsx from 'clsx';
import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/our_mission_illustration.png';

const OurMissionSection = () => {
  return (
    <section
      id="OurMission"
      className={clsx(styles.our_mission__section, 'container')}
    >
      <Fade left>
        <figure className={styles.left}>
          <img
            className={styles.illustration}
            src={illustration}
            alt="Finance illustration"
          />
        </figure>
      </Fade>
      <aside className={styles.right}>
        <div className={styles.sub_header__container}>
          <p className={styles.sub_header__text}>KNOW OUR COMPANY</p>
          <div className={styles.sub_header__line}></div>
        </div>
        <h2 className={styles.head__text}>Our Mission & Vision</h2>
        <p className={styles.paragraph}>
          Traders and investors are the prime focus of our business and we got
          dynamic, vibrant and aggressive goals to fulfill their market
          aspirations and previous losses in financial market.
        </p>
        <h6 className={styles.right__list__head}>Our Goals are to &mdash;</h6>
        <ol className={styles.right__list}>
          <li>Produce tangible profits through steadfast and smart payout.</li>
          <li>Add extra value to your money in multiple ways</li>
          <li>
            Become the leading and emerging markets' best financial advisory
            group to deliver supreme investment outcomes.
          </li>
          <li>
            To influence the life of traders and investors with ours exceptional
            financial advisory and smart incorporation of high-end technology
            with human skills.
          </li>
        </ol>
        <div className={styles.right__footer}>
          <h5 className={styles.right__footer_head}>
            Our Belief &amp; Philosophy &ndash;
          </h5>
          <p className={styles.paragraph}>
            <strong>Ambition Growth</strong> believes in one policy &mdash;
            customer first! Our financial advisory and activities well concur
            with this policy. Also, our philosophy is simple and versatile
            &ndash; To provide customized services for varying investor needs
            and enhance their prosperity under all market conditions. For this,
            we have deputed market experts to provide world class services like
            Equity tips, Commodity tips, and Currency tips to help trades and
            investors in all needs.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default OurMissionSection;
