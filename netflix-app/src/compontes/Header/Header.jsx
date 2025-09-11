import { useState } from "react";
import netflixlogo from "../../resource/Image/Logonetflix.png";
import styles from "./Header.module.css";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header_outer_container}>
  <div className={styles.header_container}>
    <div className={styles.logo}>
      <img src={netflixlogo} alt="Netflix Logo" />
    </div>
    <button
      className={styles.menu_button}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>

    <div
      className={`${styles.menu_wrapper} ${
        menuOpen ? styles.active : ""
      }`}
    >
      {/* <div className={styles.logo}>
        <img src={netflixlogo} alt="Netflix Logo" />
      </div> */}

      <ul className={styles.nav_links}>
        <li>Home</li>
        <li>Tvshows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>Mylist</li>
        <li>Languages</li>
      </ul>

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







// import netflixlogo from '../../resource/Image/Logonetflix.png'; 
// import styles from './Header.module.css';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


// const Header = () => {
//   return (
//     <div className={styles.header_outer_container}>
//       <div className={styles.header_container}>
//         <div className={styles.header_left}>
//           <ul className={styles.nav_links}>
//             <li className={styles.imglogo}><img src={netflixlogo} alt="Netflix Logo" width="100" /></li>
//             <li>Home</li>
//             <li>Tvshows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>Mylist</li>
//             <li>Languages</li>
//           </ul>
//         </div>
//         <div className={styles.header_right}>
//           <ul className={styles.nav_icons}>
//             <li><SearchIcon /></li>
//             <li><NotificationsIcon /></li>
//             <li><AccountBoxIcon /></li>
//             <li><ArrowDownwardIcon /></li>
//           </ul>
//         </div>
        
//       </div>
//     </div>

    
//   );
// };

// export default Header;
