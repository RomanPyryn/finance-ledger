const headerScroll = () => {
  const header = document.querySelector('header');
  const screenWidth = window.screen.width;
  let height = 50;
  if (screenWidth < 767) {
    height = 70;
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY >= height) {
      return (header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)');
    } else {
      return (header.style.backgroundColor = 'transparent');
    }
  });
};
export default headerScroll;
