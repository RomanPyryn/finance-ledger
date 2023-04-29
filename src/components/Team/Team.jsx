import {} from 'react-icons/io';
import IMAGES from 'assets/img';
import { TeamSection, TeamText, Teamlist, TeamItemName } from './Team.styled';

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
        <Teamlist>
          <li>
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
            <TeamItemName>John Doe</TeamItemName>
            <p>President</p>
          </li>
          <li>
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
            <TeamItemName>Jane Doe</TeamItemName>
            <p>Vice President</p>
          </li>
          <li>
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
            <TeamItemName>Steve Smith</TeamItemName>
            <p>Steve Smith</p>
          </li>
        </Teamlist>
      </div>
    </TeamSection>
  );
}

export default Team;
