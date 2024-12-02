chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'scan_inbox') {
      console.log('Scanning inbox...');
      // Logic to scan inbox goes here
    } else if (message.action === 'unsubscribe') {
      console.log('Unsubscribing...');
      // Logic to unsubscribe from emails goes here
    } else if (message.action === 'delete_emails') {
      console.log('Deleting emails...');
      // Logic to delete emails goes here
    }
  });