javascript: (function () {
  const selectMostRecentItem = () => {
    const callNumberField = document.querySelector('#staff-content-container > ng-component > eg-grid > div > eg-grid-body > div > div:nth-child(1) > div:nth-child(6) > eg-grid-body-cell > span');
    const callNumber = callNumberField.innerText;
    const callNumberWithoutPrefix = callNumber.slice(2);
    return callNumberWithoutPrefix;
  };

  const copyItemToClipboard = () => {
    // const mostRecentItem = selectMostRecentItem();
    const requestNumber = selectMostRecentItem();
    navigator.clipboard.writeText(requestNumber);
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      copyItemToClipboard();
      window.open('https://regal-pithivier-abc90d.netlify.app/' + selectMostRecentItem(), '_blank');
    }
  });
})();
