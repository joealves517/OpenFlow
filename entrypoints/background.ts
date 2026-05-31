export default defineBackground(() => {
  // Open index.html in a new tab when the extension icon is clicked
  browser.action.onClicked.addListener(async () => {
    await browser.tabs.create({
      url: browser.runtime.getURL('/index.html')
    });
  });

  // Listen for messages from content scripts or other pages
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openEditor') {
      browser.tabs.create({
        url: browser.runtime.getURL('/index.html?page=editor')
      });
      sendResponse({ success: true });
      return true;
    }

    if (message.action === 'fetchCorsUrl') {
      const url = message.url;
      fetch(url)
        .then(async res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const mimeType = res.headers.get('content-type') || 'audio/mpeg';
          const arrayBuffer = await res.arrayBuffer();
          
          // Send Uint8Array directly using Structured Clone algorithm (Supported in Chrome 99+)
          const uint8Array = new Uint8Array(arrayBuffer);
          sendResponse({ success: true, uint8Array, mimeType });
        })
        .catch(err => {
          console.error("[Background Fetch Error]", err);
          sendResponse({ success: false, error: err.message });
        });
      return true; // Keep message channel open for async response
    }
    
    return true;
  });
});
