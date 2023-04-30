const headerScroll = () => {
  const header = document.querySelector('header');
  const screenWidth = window.screen.width;
  let width = 70;
  if (screenWidth < 767) {
    width = 120;
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY >= width) {
      return (header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)');
    } else {
      return (header.style.backgroundColor = 'transparent');
    }
  });
};
export default headerScroll;
