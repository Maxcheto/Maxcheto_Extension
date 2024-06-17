chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const blockedWebsites = [
      ""
    ]; // Agrega otros sitios web bloqueados si es necesario
    // ¡ADVERTENCIA NO DEJAR EL CODIGO TERMINADO ASI ("")!
  
    const url = new URL(details.url);
    const hostname = url.hostname.toLowerCase();
  
    for (const website of blockedWebsites) {
      if (hostname.includes(website)) {
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("html/disp_inabilitado.html") });
        break;
      }
    }
  });