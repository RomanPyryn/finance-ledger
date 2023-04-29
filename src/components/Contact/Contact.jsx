import IMAGES from 'assets/img';
import Button from 'components/Button/Button';
import {
  ContactSection,
  ContactImgBox,
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactForm,
  ContactInput,
} from './Contact.styled';

function Contact() {
  return (
    <ContactSection>
      <ContactImgBox className="bg_img">
        <picture>
          <source
            srcSet={`${IMAGES.contact_webp} 1x, ${IMAGES.contact2x_webp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${IMAGES.contact_jpg} 1x, ${IMAGES.contact2x_jpg} 2x`}
            type="image/jpeg"
          />
          <img src={IMAGES.contact_jpg} loading="eager" alt="City" />
        </picture>
      </ContactImgBox>
      <ContactContainer className="container">
        <ContactContent>
          <ContactTitle className="section-title">
            Request Callback
          </ContactTitle>
          <ContactForm>
            <ContactInput
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ContactInput
              type="email"
              name="email"
              placeholder="Enter email*"
            />
            <Button name={'button-contact'} text={'Send'} type={'submit'} />
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;
