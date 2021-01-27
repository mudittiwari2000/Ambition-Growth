import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import clsx from 'clsx';
import styles from './index.module.scss';

// Material Components
import {
  Box,
  InputBase,
  IconButton,
  Button,
  Paper,
  Menu,
  MenuItem,
  useMediaQuery
} from '@material-ui/core';

// Material Icons
import {
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Pinterest as PinterestIcon,
  YouTube as YouTubeIcon,
  ArrowDropUp as ArrowDropUpIcon,
  Contacts as ContactsIcon,
  Home as HomeIcon
} from '@material-ui/icons';

const Footer = () => {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorInvestmentEl, setAnchorInvestmentEl] = useState(null);

  const isMdUp = useMediaQuery('(min-width: 1280px)');

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openInvestmentMenu = (event) => {
    setAnchorInvestmentEl(event.currentTarget);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInvestmentClose = () => {
    setAnchorInvestmentEl(null);
  };

  return (
    <footer className={styles.footer__section}>
      <div className={styles.footer__section_upper}>
        <aside className={styles.footer__section_upper_left}>
          <div className={styles.sub_header__container}>
            <p className={styles.sub_header__text}>KNOW OUR COMPANY</p>
            <div className={styles.sub_header__line}></div>
          </div>
          <h1 className={styles.head__text}>Stay Tuned For Our Updates</h1>
        </aside>

        <aside className={styles.footer__section_upper_right}>
          <Paper component="form" className={styles.root}>
            <div className={styles.icon_container}>
              <EmailIcon
                color="primary"
                fontSize={isMdUp ? 'large' : 'small'}
              />
            </div>
            <InputBase
              className={styles.input}
              placeholder="Enter Your Email"
              inputProps={{ 'aria-label': 'enter your email' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size={isMdUp ? 'large' : 'medium'}
              className={styles.iconButton}
              aria-label="Submit"
            >
              Submit
            </Button>
          </Paper>
          <ul className={styles.footer__section_upper_right_social_list}>
            <li>
              <IconButton
                className={styles.footer__section_upper_right_social_list_item}
              >
                <FacebookIcon />
              </IconButton>
            </li>
            <li>
              <IconButton
                className={styles.footer__section_upper_right_social_list_item}
              >
                <InstagramIcon />
              </IconButton>
            </li>
            <li>
              <IconButton
                className={styles.footer__section_upper_right_social_list_item}
              >
                <TwitterIcon />
              </IconButton>
            </li>
            <li>
              <IconButton
                className={styles.footer__section_upper_right_social_list_item}
              >
                <PinterestIcon />
              </IconButton>
            </li>
            <li>
              <IconButton
                className={styles.footer__section_upper_right_social_list_item}
              >
                <YouTubeIcon />
              </IconButton>
            </li>
          </ul>
          <ul className={styles.footer__section_upper_right_contact_list}>
            <li
              className={styles.footer__section_upper_right_contact_list_item}
            >
              <a href="mailto:ambitiongrowth@yahoo.com">
                ambitiongrowth@yahoo.com&nbsp; <EmailIcon />
              </a>
            </li>
            <li
              className={styles.footer__section_upper_right_contact_list_item}
            >
              <a href="tel:+918889899900">
                +91 8889899900 &nbsp;
                <ContactsIcon />
              </a>
            </li>
            <li
              className={styles.footer__section_upper_right_contact_list_item}
            >
              <address>
                323 Tilwara Rd, Ward no.32, Jabalpur, 482003 &nbsp;
                <HomeIcon />
              </address>
            </li>
          </ul>
        </aside>
      </div>
      <div className={styles.footer__section_lower}>
        <aside className={styles.footer__section_lower_left}>
          &copy; Copyright 2021. All Rights Reserved.
        </aside>
        <nav className={styles.footer__section_lower_right}>
          <ul className={styles['nav-menu']}>
            <li
              className={clsx(styles['nav-item'], styles['left-spacing'])}
              onClick={scrollToTop}
            >
              <NavLink exact to="/" activeClassName={styles.activeNavItem}>
                Home
              </NavLink>
            </li>
            <li className={clsx(styles['nav-item'], styles['left-spacing'])}>
              <NavLink activeClassName={styles.activeNavItem} to="/AboutUs">
                About Us
              </NavLink>
            </li>
            <li
              className={clsx(styles['nav-item'], styles['left-spacing'])}
              onClick={(event) => openInvestmentMenu(event)}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                Investment Plan
                <ArrowDropUpIcon />
              </Box>
            </li>
            <li
              className={clsx(styles['nav-item'], styles['left-spacing'])}
              onClick={(event) => openMenu(event)}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                Insight
                <ArrowDropUpIcon />
              </Box>
            </li>
            <li className={clsx(styles['nav-item'], styles['left-spacing'])}>
              {pathname === '/' ? (
                <Link
                  activeClass={styles.activeNavItem}
                  to="ContactUs"
                  smooth={true}
                  duration={500}
                >
                  Contact Us
                </Link>
              ) : (
                <NavLink exact to="/" activeClassName={styles.activeNavItem}>
                  Contact Us
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
        <Menu
          id="insights-drop-down"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={styles['nav-item']}>
            <NavLink activeClassName={styles.activeNavItem} to="/KYC">
              KYC
            </NavLink>
          </MenuItem>
          <MenuItem className={styles['nav-item']}>
            <NavLink activeClassName={styles.activeNavItem} to="/OurMission">
              Our Mission
            </NavLink>
          </MenuItem>
          <MenuItem className={styles['nav-item']}>
            <NavLink activeClassName={styles.activeNavItem} to="/PrivacyPolicy">
              Privacy Policy
            </NavLink>
          </MenuItem>
        </Menu>
        <Menu
          id="investmest-drop-down"
          anchorEl={anchorInvestmentEl}
          keepMounted
          open={Boolean(anchorInvestmentEl)}
          onClose={handleInvestmentClose}
        >
          <MenuItem className={styles['nav-item']}>
            <NavLink activeClassName={styles.activeNavItem} to="/MutualFunds">
              Mutual Funds
            </NavLink>
          </MenuItem>
          <MenuItem className={styles['nav-item']}>
            <NavLink
              activeClassName={styles.activeNavItem}
              to="/LongtermInvestment"
            >
              Longterm Investment
            </NavLink>
          </MenuItem>
          <MenuItem className={styles['nav-item']}>
            <NavLink
              activeClassName={styles.activeNavItem}
              to="/AmbitionGrowthInvestment"
            >
              Ambition Growth Investment
            </NavLink>
          </MenuItem>
        </Menu>
      </div>
    </footer>
  );
};

export default Footer;
