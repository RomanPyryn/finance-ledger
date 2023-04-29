import {} from 'react-icons/fa';
import IMAGES from 'assets/img';

import {
  HeroSection,
  HeroContainer,
  HeroTitleBox,
  HeroTitle,
  HeroSubTitle,
	HeroImgBox,
	HeroLayout,
} from './Hero.styled';
import Button from 'components/Button/Button';

function Hero() {
  return (
    <HeroSection>
      <HeroContainer className="container">
        <HeroTitleBox>
          <HeroTitle>The Sky Is The Limit</HeroTitle>
          <HeroSubTitle>
            We provide world class financial assistance
          </HeroSubTitle>
        </HeroTitleBox>
        <Button name={'button-hero'} text={'Read More'} />
      </HeroContainer>
			<HeroImgBox className="bg_img">
				<HeroLayout className='layout'></HeroLayout>
        <picture>
          <source
            srcSet={`${IMAGES.showcase_webp} 1x, ${IMAGES.showcase2x_webp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${IMAGES.showcase_jpg} 1x, ${IMAGES.showcase2x_jpg} 2x`}
            type="image/jpeg"
          />
          <img src={IMAGES.showcase_jpg} loading="eager" alt="City" />
        </picture>
      </HeroImgBox>
    </HeroSection>
  );
}

export default Hero;
