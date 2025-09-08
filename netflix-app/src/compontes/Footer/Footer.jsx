import styles from './Footer.module.css';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_links}>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={styles.footer_language}>
          <select name="language">
            <option value="en">English</option>
            <option value="Amharic">Amharic</option>
            
          </select>  <ul className={styles.iconList}>
  <li>
    <a href="#" aria-label="Instagram">
      <InstagramIcon />
    </a>
  </li>
  <li>
    <a href="#" aria-label="Facebook">
      <FacebookIcon />
    </a>
  </li>
  <li>
    <a href="#" aria-label="Twitter">
      <TwitterIcon />
    </a>
  </li>
</ul>
          
        </div>

        <div className={styles.footer_copy}>
          <p> <CopyrightOutlinedIcon style={{ fontSize: 16, color: '#888', verticalAlign: 'middle' }} /> {new Date().getFullYear()} Netflix Clone</p>
          
        </div>
     

        
      </div>
    </footer>
  );
};

export default Footer;
