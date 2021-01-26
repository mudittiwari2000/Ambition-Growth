import React from 'react';

// Utilities
import clsx from 'clsx';
import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/banner_illustration.png';

// Material Components
import { Button } from '@material-ui/core';

const BannerSection = () => {
  return (
    <section className={clsx(styles.banner_section, 'container')}>
      <aside className={styles.left}>
        <div className={styles.sub_header__container}>
          <p className={styles.sub_header__text}>
            {' '}
            It’s About Planning For The Future
          </p>
          <div className={styles.sub_header__line}></div>
        </div>
        <h1 className={styles.head__text}>
          Financial <span style={{ color: '#6a54f0' }}>Dreams</span> <br />
          Delivered
        </h1>
        <p className={styles.paragraph}>
          Ambition Growth is a promising and widespread financial investment
          firm with one point objective – to help traders and investors grow
          their money. We have a noticeable presence across the country with
          specialized consultation in the Equities, Commodities and Currencies{' '}
          markets.
        </p>
        <div className={styles.btn_group}>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            className={clsx(styles.btn_outlined, styles.btn)}
          >
            Discover More
          </Button>
          <Button
            size="large"
            className={clsx(styles.btn_contained, styles.btn)}
          >
            View More
          </Button>
        </div>
      </aside>
      <Fade bottom>
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

export default BannerSection;
