import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { IoIosWarning } from 'react-icons/io';
import IMAGES from 'assets/img';
import Button from 'components/Button/Button';
import {
  ContactSection,
  ContactImgBox,
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactInput,
} from './Contact.styled';

let schema = object({
  name: string().required(
    <div>
      <IoIosWarning className="warning-icon" size={16} /> This is a required
      field
    </div>
  ),
  email: string()
    .email()
    .required(
      <div>
        <IoIosWarning className="warning-icon" size={16} /> This is a required
        field
      </div>
    ),
});

const initialValues = {
  name: '',
  email: '',
};

function Contact() {
  const handleSubmit = (values, actions) => {};

  return (
    <ContactSection id="to-contact">
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
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <Form>
              <ContactInput
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" />
              <ContactInput
                type="email"
                name="email"
                placeholder="Enter email*"
              />
              <ErrorMessage name="email" />
              <Button
                onName={'button-contact'}
                onText={'Send'}
                onType={'submit'}
              />
            </Form>
          </Formik>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;
