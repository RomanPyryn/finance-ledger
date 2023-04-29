import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { MainFooter, FooterList } from './Footer.styled';

function Footer() {
  return (
    <MainFooter>
      <div className="container">
        <FooterList>
          <li>
            <a href="https://facebook.com/">
              <FaFacebook className="social-icon" size={40} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <FaTwitter className="social-icon" size={40} />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/">
              <FaYoutube className="social-icon" size={40} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/">
              <FaLinkedinIn className="social-icon" size={40} />
            </a>
          </li>
        </FooterList>
        <p>Copyright © 2021 - FinanceLedger</p>
      </div>
    </MainFooter>
  );
}

export default Footer;
