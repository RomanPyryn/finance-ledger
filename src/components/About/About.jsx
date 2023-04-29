import {} from 'react-icons/io';
import IMAGES from 'assets/img';
import Button from 'components/Button/Button';
import {
  AboutSection,
  AboutImgBox,
  AboutContainer,
  AboutContent,
  AboutText,
} from './About.styled';

function About() {
  return (
    <AboutSection>
      <AboutImgBox className="bg_img">
        <picture>
          <source
            srcSet={`${IMAGES.people_webp} 1x, ${IMAGES.people2x_webp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${IMAGES.people_jpg} 1x, ${IMAGES.people2x_jpg} 2x`}
            type="image/jpeg"
          />
          <img src={IMAGES.people_jpg} loading="eager" alt="City" />
        </picture>
      </AboutImgBox>
      <AboutContainer className="container">
        <AboutContent>
          <p>What you are looking for</p>
          <h2 className="section-title">We provide bespoke solutions</h2>
          <AboutText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </AboutText>
          <Button name={'button-about'} text={'Read More'} />
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
