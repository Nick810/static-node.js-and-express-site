if (window.location.href === 'http://localhost:3000/') {
  TweenMax.from('.portfolio-intro div h1', 1.3, { opacity: 0, x: 200 });
  TweenMax.from('.portfolio-intro div p', 1.3, { opacity: 0, x: 200, delay: 0.8 });
  TweenMax.staggerFrom('.cell', 1.5, { opacity: 0, y: 40, delay: 1.3 }, 0.4);
} else if (window.location.href.includes('project')) {
  const halfOfPDivFromTop = parseInt((document.querySelector('.lead.text-light').offsetHeight +
                                document.querySelector('.lead.text-light').offsetTop) / 2)

  window.onscroll = () => {
    if (document.documentElement.scrollTop > halfOfPDivFromTop) {
      TweenMax.staggerTo('.image', 1.5, { opacity: 1, x: 0}, 0.4);
    }
  }
}
