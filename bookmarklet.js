javascript: (function () {
  const RECEIPT_PRINTER_URL = 'https://regal-pithivier-abc90d.netlify.app/';

  // Targets the just scanned item, and returns the WorldShare
  // number after removing IL prefix from the call number
  const selectMostRecentItem = () => {
    const callNumberField = document.querySelector(
      '#staff-content-container > ng-component > eg-grid > div > eg-grid-body > div > div:nth-child(1) > div:nth-child(6) > eg-grid-body-cell > span'
    );
    const callNumber = callNumberField.innerText;
    const callNumberWithoutPrefix = callNumber.slice(2);
    return callNumberWithoutPrefix;
  };

  // Inserts noisy alert box at bottom of page so user is
  // prepared for what kinda mess they're getting into
  const scienceModeAlert = () => {
    const div = document.createElement('div');
    div.id = 'science-mode-alert';
    div.style =
      'position: fixed; bottom: 0; left: 0; width: 100%; height: 50px; color: white; font-size: 2rem; background-color: red; z-index: 9999; text-align: center;';
    div.textContent =
      "Jason's Slip Mode for Science Experience activated! Refresh to exit.";
    document.body.appendChild(div);
  };

  // Listens for enter keypress, waits 500ms to allow data to load, then opens up the
  //  receipt printer with WorldShare request number as URL parameter for barcode printing
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      setTimeout(
        () =>
          window.open(RECEIPT_PRINTER_URL + selectMostRecentItem(), '_blank'),
        500
      );
    }
  });

  scienceModeAlert();
})();
