import IMAGES from 'assets/img';
import Button from 'components/Button/Button';
import {
  BlogSection,
  BlogImgBox,
  BlogContainer,
  BlogContent,
  BlogText,
} from './Blog.styled';

function Blog() {
  return (
    <BlogSection id="to-blog">
      <BlogImgBox className="bg_img">
        <picture>
          <source
            srcSet={`${IMAGES.blog_webp} 1x, ${IMAGES.blog2x_webp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${IMAGES.blog_jpg} 1x, ${IMAGES.blog2x_jpg} 2x`}
            type="image/jpeg"
          />
          <img src={IMAGES.blog_jpg} loading="eager" alt="City" />
        </picture>
      </BlogImgBox>
      <BlogContainer className="container">
        <BlogContent>
          <p>April 16 2023</p>
          <h2 className="section-title">Blog Post One</h2>
          <BlogText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </BlogText>
          <Button
            onName={'button-blog'}
            onText={'Read Our Blog'}
            onType={'text'}
          />
        </BlogContent>
      </BlogContainer>
    </BlogSection>
  );
}

export default Blog;
