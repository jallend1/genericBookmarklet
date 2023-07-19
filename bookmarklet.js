javascript: (function () {
  const selectMostRecentItem = () => {
    const items = document.querySelectorAll('.item');
    const mostRecentItem = items[items.length - 1];
    return mostRecentItem;
  };

  const copyItemToClipboard = () => {
    const mostRecentItem = selectMostRecentItem();
    const itemText = mostRecentItem.innerText;
    navigator.clipboard.writeText(itemText);
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      copyItemToClipboard();
      window.open('https://www.google.com', '_blank');
    }
  });
})();
