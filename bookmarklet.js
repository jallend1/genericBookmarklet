javascript: (function () {
  const selectMostRecentItem = () => {
    const callNumberField = document.querySelector(
      '#staff-content-container > ng-component > eg-grid > div > eg-grid-body > div > div:nth-child(1) > div:nth-child(6) > eg-grid-body-cell > span'
    );
    const callNumber = callNumberField.innerText;
    const callNumberWithoutPrefix = callNumber.slice(2);
    return callNumberWithoutPrefix;
  };

  // Potential feature: Get title from item record
  const getTitle = () => {
    const titleField = document.querySelector(
      '#staff-content-container > ng-component > eg-grid > div > eg-grid-body > div > div:nth-child(1) > div:nth-child(10) > eg-grid-body-cell > span > a'
    );
    const title = titleField.innerText;
    const titleWithoutPrefix = title.slice(11);
    return titleWithoutPrefix;
  };

  // Potential feature: Copy request number to clipboard
  const copyItemToClipboard = () => {
    const requestNumber = selectMostRecentItem();
    navigator.clipboard.writeText(requestNumber);
  };

  const insertDivAtBottom = () => {
    const div = document.createElement('div');
    div.id = 'bookmarklet';
    div.style =
      'position: fixed; bottom: 0; left: 0; width: 100%; height: 50px; color: white; font-size: 2rem; background-color: red; z-index: 9999; text-align: center;';
    div.textContent =
      "Jason's Slip Mode for Science Experience activated! Refresh to exit.";
    document.body.appendChild(div);
  };

  document.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      // copyItemToClipboard();
      setTimeout(
        () =>
          window.open(
            'https://regal-pithivier-abc90d.netlify.app/' +
              selectMostRecentItem(),
            '_blank'
          ),
        500
      );
    }
  });

  insertDivAtBottom();
})();
