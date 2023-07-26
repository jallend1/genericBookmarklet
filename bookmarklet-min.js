javascript: document.addEventListener('keyup', function (e) {
  'Enter' === e.key &&
    setTimeout(
      () =>
        window.open(
          'https://regal-pithivier-abc90d.netlify.app/' +
            document
              .querySelector(
                '#staff-content-container > ng-component > eg-grid > div > eg-grid-body > div > div:nth-child(1) > div:nth-child(6) > eg-grid-body-cell > span'
              )
              .innerText.slice(2),
          '_blank'
        ),
      500
    );
}),
  (() => {
    const e = document.createElement('div');
    (e.id = 'science-mode-alert'),
      (e.style =
        'position: fixed; bottom: 0; left: 0; width: 100%; height: 50px; color: white; font-size: 2rem; background-color: red; z-index: 9999; text-align: center;'),
      (e.textContent =
        "Jason's Slip Mode for Science Experience activated! Refresh to exit."),
      document.body.appendChild(e);
  })();
