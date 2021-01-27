import React from 'react';

// Utilities
import clsx from 'clsx';
import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/KYC_illustration.png';

// Material Components
import { Button, useMediaQuery } from '@material-ui/core';

const KYCSection = () => {
  const isMdUp = useMediaQuery('(min-width: 1280px)');

  return (
    <section id="KYC" className={clsx(styles.KYC__section)}>
      {isMdUp && (
        <img
          className={styles.bg_img}
          src={illustration}
          alt="KYC illustration"
        />
      )}
      <Fade bottom>
        <main className={styles.left}>
          <ul className={styles.left__list}>
            <li className={styles.left__list_item}>
              <h6 className="uppercase ">What is KYC?</h6>
              <p className={styles.left__list_item__text}>
                KYC stands for Know Your Customer process of identifying and
                verifying identity of customers.
              </p>
            </li>
            <li className={styles.left__list_item}>
              <h6 className="uppercase ">Why do I have to do KYC?</h6>
              <p className={styles.left__list_item__text}>
                As per guidelines of SEBI, all customers of a Bank or waller,
                who wish to avail higher balance of ability to transfer money
                needs to complete KYC.
              </p>
            </li>
            <li className={styles.left__list_item}>
              <h6 className="uppercase ">
                Why does <span>Ambition Growth</span> require KYC?
              </h6>
              <p className={styles.left__list_item__text}>
                <strong>Ambition Growth</strong>&apos; objective of KYC is to
                identify theft, prevent terrorist financing, money laundering
                and financial fraud. KYC allows us to understand the customer
                better and manage risks prudently.
              </p>
            </li>
          </ul>
          <Button
            size="large"
            className={clsx(styles.btn_contained, styles.btn)}
          >
            View More
          </Button>
        </main>
      </Fade>
    </section>
  );
};

export default KYCSection;
