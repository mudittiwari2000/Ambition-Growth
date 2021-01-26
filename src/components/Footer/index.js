import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import clsx from 'clsx'
import styles from './index.module.scss'

// Material Components
import {
  Box,
  InputBase,
  IconButton,
  Button,
  Paper,
  Menu,
  MenuItem
} from '@material-ui/core'

// Material Icons
import {
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Pinterest as PinterestIcon,
  YouTube as YouTubeIcon,
  ArrowDropUp as ArrowDropUpIcon
} from '@material-ui/icons'

const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
              <EmailIcon color="primary" fontSize="large" />
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
              size="large"
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
              <NavLink
                activeClass={styles.activeNavItem}
                to="/AboutUs"
                smooth={true}
                offset={-10}
                spy={true}
                duration={400}
              >
                About Us
              </NavLink>
            </li>
            <li className={clsx(styles['nav-item'], styles['left-spacing'])}>
              <NavLink
                to="/InvestmentPlan"
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
                <ArrowDropUpIcon />
              </Box>
            </li>
            <li className={clsx(styles['nav-item'], styles['left-spacing'])}>
              <Link activeClass={styles.activeNavItem} to="ContactUs">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <Menu
          id="invest-drop-down"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={styles['nav-item']}>
            {' '}
            <NavLink
              activeClass={styles.activeNavItem}
              to="/KYC"
              smooth={true}
              offset={-10}
              spy={true}
              duration={400}
            >
              KYC
            </NavLink>
          </MenuItem>
          <MenuItem className={styles['nav-item']}>
            <NavLink
              activeClass={styles.activeNavItem}
              to="/OurMission"
              smooth={true}
              offset={-10}
              spy={true}
              duration={400}
            >
              Our Mission
            </NavLink>
          </MenuItem>
          <MenuItem className={styles['nav-item']}>
            <NavLink
              activeClass={styles.activeNavItem}
              to="/PrivacyPolicy"
              smooth={true}
              offset={-10}
              spy={true}
              duration={400}
            >
              Privacy Policy
            </NavLink>
          </MenuItem>
        </Menu>
      </div>
    </footer>
  )
}

export default Footer
