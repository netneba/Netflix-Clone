// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';

// Material UI Icons 
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import netflixlogo from '../../resource/Image/Logonetflix.png'; 

const Header = () => {
  return (
    <div className={styles.header_outer_container}>
      <div className={styles.header_container}>

        <div className={styles.header_left}>
          <ul className={styles.nav_links}>
            <li><img src={netflixlogo} alt="Netflix Logo" width="100" /></li>
            <li>Home</li>
            <li>Tvshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Languages</li>
          </ul>
        </div>

        <div className={styles.header_right}>
          <ul className={styles.nav_icons}>
            <li><SearchIcon /></li>
            <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDownwardIcon /></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Header;
