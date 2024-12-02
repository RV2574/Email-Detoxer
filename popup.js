document.getElementById('scan').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'scan_inbox' });
  });
  document.getElementById('unsubscribe').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'unsubscribe' });
  });
  document.getElementById('delete').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'delete_emails' });
  });