javascript: !(function () {
  const e = () =>
    document
      .querySelector(
        '#staff-content-container > ng-component > eg-grid > div > eg-grid-body > div > div:nth-child(1) > div:nth-child(6) > eg-grid-body-cell > span'
      )
      .innerText.slice(2);
  document.addEventListener('keyup', function (t) {
    'Enter' === t.key &&
      ((() => {
        const t = e();
        navigator.clipboard.writeText(t);
      })(),
      window.open(
        'https://regal-pithivier-abc90d.netlify.app/' + e(),
        '_blank'
      ));
  }),
    (() => {
      const e = document.createElement('div');
      (e.id = 'bookmarklet'),
        (e.style =
          'position: fixed; bottom: 0; left: 0; width: 100%; height: 50px; background-color: red; z-index: 9999; text-align: center;'),
        (e.textContent = 'Return slip mode activated! Refresh to exit.'),
        document.body.appendChild(e);
    })();
})();
