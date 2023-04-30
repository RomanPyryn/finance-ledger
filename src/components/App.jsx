import { lazy, Suspense } from 'react';

const Header = lazy(() => import('components/Header'));
const Hero = lazy(() => import('components/Hero'));
const About = lazy(() => import('components/About'));
const Cases = lazy(() => import('components/Cases'));
const Blog = lazy(() => import('components/Blog'));
const Team = lazy(() => import('components/Team'));
const Contact = lazy(() => import('components/Contact'));
const Footer = lazy(() => import('components/Footer'));

export const App = () => {
  return (
    <Suspense>
      <Header />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </Suspense>
  );
};
