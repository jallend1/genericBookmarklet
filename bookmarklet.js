javascript: (function () {
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      window.open('https://www.google.com', '_blank');
    }
  });
})();
