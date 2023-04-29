import IMAGES from 'assets/img';
import { CasesSection, CasesText } from './Cases.styled';

function Cases() {
  return (
    <CasesSection>
			<div className="container">
				<p>This is what we do</p>
      <h2 className="section-title">Business Cases</h2>
      <CasesText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </CasesText>
      <ul>
        <li>
          <picture>
            <source
              srcSet={`${IMAGES.cases1_webp} 1x, ${IMAGES.cases12x_webp} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${IMAGES.cases1_jpg} 1x, ${IMAGES.cases12x_jpg} 2x`}
              type="image/jpeg"
            />
            <img src={IMAGES.cases1_jpg} loading="eager" alt="City" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`${IMAGES.cases2_webp} 1x, ${IMAGES.cases22x_webp} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${IMAGES.cases2_jpg} 1x, ${IMAGES.cases22x_jpg} 2x`}
              type="image/jpeg"
            />
            <img src={IMAGES.cases2_jpg} loading="eager" alt="City" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`${IMAGES.cases3_webp} 1x, ${IMAGES.cases32x_webp} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${IMAGES.cases3_jpg} 1x, ${IMAGES.cases32x_jpg} 2x`}
              type="image/jpeg"
            />
            <img src={IMAGES.cases3_jpg} loading="eager" alt="City" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`${IMAGES.cases4_webp} 1x, ${IMAGES.cases42x_webp} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${IMAGES.cases4_jpg} 1x, ${IMAGES.cases42x_jpg} 2x`}
              type="image/jpeg"
            />
            <img src={IMAGES.cases4_jpg} loading="eager" alt="City" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`${IMAGES.cases5_webp} 1x, ${IMAGES.cases52x_webp} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${IMAGES.cases5_jpg} 1x, ${IMAGES.cases52x_jpg} 2x`}
              type="image/jpeg"
            />
            <img src={IMAGES.cases5_jpg} loading="eager" alt="City" />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={`${IMAGES.cases6_webp} 1x, ${IMAGES.cases62x_webp} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${IMAGES.cases6_jpg} 1x, ${IMAGES.cases62x_jpg} 2x`}
              type="image/jpeg"
            />
            <img src={IMAGES.cases6_jpg} loading="eager" alt="City" />
          </picture>
        </li>
      </ul>
			</div>
    </CasesSection>
  );
}

export default Cases;
