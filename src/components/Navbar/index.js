import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/images/logo.png'
import styles from './index.module.scss'

// Material Components
import {
  Box,
  Drawer,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  useMediaQuery
} from '@material-ui/core'

// Material Icons
import {
  ArrowDropDown as ArrowDropDownIcon,
  Menu as MenuIcon
} from '@material-ui/icons'

import clsx from 'clsx'

const Navbar = () => {
  const { pathname } = useLocation()
  const [pageY, setPageY] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isInvestmentDropdownOpen, setInvestmentDropdownOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorInvestmentEl, setAnchorInvestmentEl] = useState(null)
  const isMdUp = useMediaQuery('(min-width: 1080px)')

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const openInvestmentMenu = (event) => {
    setAnchorInvestmentEl(event.currentTarget)
  }

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
  }

  const toggleInvestmentDropdown = () => {
    setInvestmentDropdownOpen((prev) => !prev)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleInvestmentClose = () => {
    setAnchorInvestmentEl(null)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const handleScroll = useCallback(() => {
    setPageY(window.scrollY)
  }, [setPageY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return (
    <nav className={clsx(styles.navbar, pageY > 20 ? styles.sticky : '')}>
      <NavLink exact to="/">
        <img className={styles.logo} src={logo} alt="Ambition Growth" />
      </NavLink>
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
              <ArrowDropDownIcon />
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
              <ArrowDropDownIcon />
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
            <NavLink activeClass={styles.activeNavItem} to="/AboutUs">
              About Us
            </NavLink>
          </li>
          <li
            className={clsx(styles['nav-item'], styles['top-spacing'])}
            onClick={(event) => toggleInvestmentDropdown(event)}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              Investment Plan
              <ArrowDropDownIcon />
            </Box>
          </li>
          {isInvestmentDropdownOpen && (
            <>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <NavLink activeClass={styles.activeNavItem} to="/MutualFunds">
                  Mutual Funds
                </NavLink>
              </li>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <NavLink
                  activeClass={styles.activeNavItem}
                  to="/LongtermInvestment"
                >
                  Longterm Investment
                </NavLink>
              </li>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <NavLink
                  activeClass={styles.activeNavItem}
                  to="/AmbitionGrowthInvestment"
                >
                  Ambition Growth Investment
                </NavLink>
              </li>
              <br />
            </>
          )}
          <li
            className={clsx(styles['nav-item'], styles['top-spacing'])}
            onClick={toggleDropdown}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              Insight
              <ArrowDropDownIcon />
            </Box>
          </li>
          {isDropdownOpen && (
            <>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <NavLink activeClass={styles.activeNavItem} to="/KYC">
                  KYC
                </NavLink>
              </li>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <NavLink activeClass={styles.activeNavItem} to="/OurMission">
                  Our Mission
                </NavLink>
              </li>
              <li className={clsx(styles['nav-item'], styles['dropdown-item'])}>
                <NavLink activeClass={styles.activeNavItem} to="/PrivacyPolicy">
                  Privacy Policy
                </NavLink>
              </li>
              <br />
            </>
          )}
          <li className={clsx(styles['nav-item'], styles['top-spacing'])}>
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
        </Box>
      </Drawer>
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
    </nav>
  )
}

export default Navbar
