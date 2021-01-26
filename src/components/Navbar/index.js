import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './index.module.scss';

// Material Components
import {
  Box,
  Drawer,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  useMediaQuery
} from '@material-ui/core';

// Material Icons
import {
  ArrowDropDown as ArrowDropDownIcon,
  Menu as MenuIcon
} from '@material-ui/icons';

import clsx from 'clsx';

const Navbar = () => {
  const [pageY, setPageY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMdUp = useMediaQuery('(min-width: 1080px)');

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = useCallback(() => {
    setPageY(window.scrollY);
  }, [setPageY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={clsx(styles.navbar, pageY > 20 ? styles.sticky : '')}>
      <img
        className={styles.logo}
        src="/static/images/logo.png"
        alt="Ambition Growth"
      />
      {isMdUp ? (
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
            <Link
              activeClass={styles.activeNavItem}
              to="AboutUs"
              smooth={true}
              offset={-10}
              spy={true}
              duration={400}
            >
              About Us
            </Link>
          </li>
          <li className={clsx(styles['nav-item'], styles['left-spacing'])}>
            <NavLink
              to="/investmentPlan"
              activeClassName={styles.activeNavItem}
            >
              Investment Plan
            </NavLink>
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
              <a href="#!">Insight</a>
              <ArrowDropDownIcon />
            </Box>
          </li>
          <li className={clsx(styles['nav-item'], styles['left-spacing'])}>
            <Link activeClass={styles.activeNavItem} to="ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      ) : (
        <Tooltip title="Menu" aria-labelledby="menu">
          <IconButton color="primary" onClick={openDrawer}>
            <MenuIcon fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>
      )}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          p={4}
          mt={2}
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="space-around"
          textAlign="left"
          component="ul"
        >
          <li
            className={clsx(styles['nav-item'], styles['top-spacing'])}
            onClick={scrollToTop}
          >
            <NavLink exact to="/" activeClassName={styles.activeNavItem}>
              Home
            </NavLink>
          </li>
          <li className={clsx(styles['nav-item'], styles['top-spacing'])}>
            <Link
              activeClass={styles.activeNavItem}
              to="AboutUs"
              smooth={true}
              offset={-10}
              spy={true}
              duration={400}
            >
              About Us
            </Link>
          </li>
          <li className={clsx(styles['nav-item'], styles['top-spacing'])}>
            <NavLink
              to="/investmentPlan"
              activeClassName={styles.activeNavItem}
            >
              Investment Plan
            </NavLink>
          </li>
          <li
            className={clsx(styles['nav-item'], styles['top-spacing'])}
            onClick={toggleDropdown}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <a href="#!">Insight</a>
              <ArrowDropDownIcon />
            </Box>
          </li>
          {isDropdownOpen && (
            <>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <Link
                  activeClass={styles.activeNavItem}
                  to="KYC"
                  smooth={true}
                  offset={-10}
                  spy={true}
                  duration={400}
                >
                  KYC
                </Link>
              </li>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <Link
                  activeClass={styles.activeNavItem}
                  to="OurMission"
                  smooth={true}
                  offset={-10}
                  spy={true}
                  duration={400}
                >
                  Our Mission
                </Link>
              </li>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <Link
                  activeClass={styles.activeNavItem}
                  to="PrivacyPolicy"
                  smooth={true}
                  offset={-10}
                  spy={true}
                  duration={400}
                >
                  Privacy Policy
                </Link>
              </li>
              <br />
            </>
          )}
          <li className={clsx(styles['nav-item'], styles['top-spacing'])}>
            <Link
              activeClass={styles.activeNavItem}
              to="ContactUs"
              smooth={true}
              offset={-10}
              spy={true}
              duration={400}
            >
              Contact Us
            </Link>
          </li>
        </Box>
      </Drawer>
      <Menu
        id="invest-drop-down"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={styles['nav-item']}>
          {' '}
          <Link
            activeClass={styles.activeNavItem}
            to="KYC"
            smooth={true}
            offset={-10}
            spy={true}
            duration={400}
          >
            KYC
          </Link>
        </MenuItem>
        <MenuItem className={styles['nav-item']}>
          <Link
            activeClass={styles.activeNavItem}
            to="OurMission"
            smooth={true}
            offset={-10}
            spy={true}
            duration={400}
          >
            Our Mission
          </Link>
        </MenuItem>
        <MenuItem className={styles['nav-item']}>
          <Link
            activeClass={styles.activeNavItem}
            to="PrivacyPolicy"
            smooth={true}
            offset={-10}
            spy={true}
            duration={400}
          >
            Privacy Policy
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Navbar;
