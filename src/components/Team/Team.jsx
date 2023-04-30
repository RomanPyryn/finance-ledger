import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import IMAGES from 'assets/img';
import {
  TeamSection,
  TeamText,
  TeamList,
  TeamItem,
  TeamItemContent,
  TeamItemName,
  TeamAction,
  TeamOverlay,
  TeamOverlayList,
} from './Team.styled';

function Team() {
  return (
    <TeamSection>
      <div className="container">
        <p>Who we are</p>
        <h2 className="section-title">Our Professional Team</h2>
        <TeamText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </TeamText>
        <TeamList>
          <TeamItem className="team-item">
            <TeamAction>
              <picture>
                <source
                  srcSet={`${IMAGES.person1_webp} 1x, ${IMAGES.person12x_webp} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${IMAGES.person1_jpg} 1x, ${IMAGES.person12x_jpg} 2x`}
                  type="image/jpeg"
                />
                <img src={IMAGES.person1_jpg} loading="eager" alt="City" />
              </picture>
              <TeamOverlay>
                <TeamOverlayList>
                  <li>
                    <a href="https://facebook.com/">
                      <FaFacebook className="team-social-icon" size={35} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter className="team-social-icon" size={35} />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/">
                      <FaYoutube className="team-social-icon" size={40} />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/">
                      <FaLinkedinIn className="team-social-icon" size={35} />
                    </a>
                  </li>
                </TeamOverlayList>
              </TeamOverlay>
            </TeamAction>
            <TeamItemContent>
              <TeamItemName>John Doe</TeamItemName>
              <p>President</p>
            </TeamItemContent>
          </TeamItem>
          <TeamItem className="team-item">
            <TeamAction>
              <picture>
                <source
                  srcSet={`${IMAGES.person2_webp} 1x, ${IMAGES.person22x_webp} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${IMAGES.person2_jpg} 1x, ${IMAGES.person22x_jpg} 2x`}
                  type="image/jpeg"
                />
                <img src={IMAGES.person2_jpg} loading="eager" alt="City" />
              </picture>
              <TeamOverlay>
                <TeamOverlayList>
                  <li>
                    <a href="https://facebook.com/">
                      <FaFacebook className="team-social-icon" size={35} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter className="team-social-icon" size={35} />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/">
                      <FaYoutube className="team-social-icon" size={40} />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/">
                      <FaLinkedinIn className="team-social-icon" size={35} />
                    </a>
                  </li>
                </TeamOverlayList>
              </TeamOverlay>
            </TeamAction>
            <TeamItemContent>
              <TeamItemName>Jane Doe</TeamItemName>
              <p>Vice President</p>
            </TeamItemContent>
          </TeamItem>
          <TeamItem className="team-item">
            <TeamAction>
              <picture>
                <source
                  srcSet={`${IMAGES.person3_webp} 1x, ${IMAGES.person32x_webp} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${IMAGES.person3_jpg} 1x, ${IMAGES.person32x_jpg} 2x`}
                  type="image/jpeg"
                />
                <img src={IMAGES.person3_jpg} loading="eager" alt="City" />
              </picture>
              <TeamOverlay>
                <TeamOverlayList>
                  <li>
                    <a href="https://facebook.com/">
                      <FaFacebook className="team-social-icon" size={35} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter className="team-social-icon" size={35} />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/">
                      <FaYoutube className="team-social-icon" size={40} />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/">
                      <FaLinkedinIn className="team-social-icon" size={35} />
                    </a>
                  </li>
                </TeamOverlayList>
              </TeamOverlay>
            </TeamAction>
            <TeamItemContent>
              <TeamItemName>Steve Smith</TeamItemName>
              <p>Steve Smith</p>
            </TeamItemContent>
          </TeamItem>
        </TeamList>
      </div>
    </TeamSection>
  );
}

export default Team;
