javascript: (function () {
  const selectMostRecentItem = () => {
    const callNumberField = document.querySelector('#staff-content-container > ng-component > eg-grid > div > eg-grid-body > div > div:nth-child(1) > div:nth-child(6) > eg-grid-body-cell > span');
    const callNumber = callNumberField.innerText;
    const callNumberWithoutPrefix = callNumber.slice(2);
    return callNumberWithoutPrefix;
  };

  const copyItemToClipboard = () => {
    const requestNumber = selectMostRecentItem();
    navigator.clipboard.writeText(requestNumber);
  };

  const insertDivAtBottom = () => {
    const div = document.createElement('div');
    div.id = 'bookmarklet';
    div.style = 'position: fixed; bottom: 0; left: 0; width: 100%; height: 50px; background-color: red; z-index: 9999; text-align: center;';
    div.textContent = 'Return slip mode activated! Refresh to exit.';
    document.body.appendChild(div);
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      copyItemToClipboard();
      window.open('https://regal-pithivier-abc90d.netlify.app/' + selectMostRecentItem(), '_blank');
    }
  });

  insertDivAtBottom();
})();
