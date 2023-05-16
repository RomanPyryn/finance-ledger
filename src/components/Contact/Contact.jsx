import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { IoIosWarning } from 'react-icons/io';
import { toast } from 'react-toastify';
import IMAGES from 'assets/img';
import {
  ContactSection,
  ContactImgBox,
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactInput,
  ContactBtn,
} from './Contact.styled';

let schema = object({
  name: string()
    .min(3, 'Too short name.')
    .max(16, 'Name too long.')
    .required(
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
  const handleSubmit = (values, actions) => {
    toast.success(`Hi, "${values.name}"! We will contact you soon.`);
    actions.resetForm();
  };

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
            <Form name="contact" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <ContactInput
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage component="div" name="name" />
              <ContactInput
                type="email"
                name="email"
                placeholder="Enter email*"
              />
              <ErrorMessage component="div" name="email" />
              <ContactBtn type="submit">Send</ContactBtn>
            </Form>
          </Formik>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;
