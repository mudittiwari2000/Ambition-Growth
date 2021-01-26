import React from 'react';

// Utilities
import clsx from 'clsx';
import { Fade } from 'react-reveal';

// Stylesheet
import styles from './index.module.scss';

// Assets
import illustration from '../../assets/images/about_us_illustration.png';

const AboutUsSection = () => {
  return (
    <section
      id="AboutUs"
      className={clsx(styles.about_us__section, 'container')}
    >
      <h3 className={styles.main_header}>About Us</h3>
      <main className={styles.flex_container}>
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
          <h4 className={styles.right__header}>
            Traders and investors are getting outstaning benefits for our
            Strategy. Your Investment will Divert in &mdash;
          </h4>
          <ul className={styles.right__list}>
            <li className={styles.right__list_item}>
              <h6 className="text_clr__brand uppercase">Equities</h6>
              <p className={styles.right__list_item__text}>
                For stocks listed under NSE and BSE.
              </p>
            </li>
            <li className={styles.right__list_item}>
              <h6 className="text_clr__brand uppercase">Commodities</h6>
              <p className={styles.right__list_item__text}>
                Maximizing your profits in MCX, NCDEX, and COMEX.
              </p>
            </li>
            <li className={styles.right__list_item}>
              <h6 className="text_clr__brand uppercase">Currencies</h6>
              <p className={styles.right__list_item__text}>
                For Domestic and International trading in FOREX.
              </p>
            </li>
            <li className={styles.right__list_item}>
              <h6 className="text_clr__brand uppercase">Derivatives</h6>
              <p className={styles.right__list_item__text}>
                BSE, NSE, and Nifty Futures and Options has excelled to be a
                prolific financial advisory and a reliable trading partner for
                traders and investors.
                <br />
                We are profoundly chosen today as:
              </p>
              <br />
              <ul className={styles.dashed_list}>
                <li>
                  <p>A prominent wealth creator.</p>
                </li>
                <li>
                  <p>An agency with strong domain expertise in advisory.</p>
                </li>
                <li>
                  <p>
                    A dependable firm that leverages traders &amp;
                    investors&apos; profitability.
                  </p>
                </li>
                <li>
                  <p>
                    The best resource for short term traders as well as long
                    term investors.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </main>
    </section>
  );
};

export default AboutUsSection;
