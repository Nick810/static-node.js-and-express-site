if (window.location.href === 'http://localhost:3000/') {
  TweenMax.from('.portfolio-intro div h1', 1.3, { opacity: 0, x: 200 });
  TweenMax.from('.portfolio-intro div p', 1.3, { opacity: 0, x: 200, delay: 0.8 });
  TweenMax.staggerFrom('.cell', 1.5, { opacity: 0, y: 40, delay: 1.3 }, 0.4);
}
