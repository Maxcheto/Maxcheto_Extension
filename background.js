chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const blockedWebsites = [
    "192.",
    "imtlazarus",
    "xnxx",
    "xxx",
    "furm",
    "tiktok",
    "porn",
    "x.com",
    "jovencitas",
    "strip",
    "management",
    "policy",
    "cam",
    "love"
  ]; // Agrega otros sitios web bloqueados si es necesario
  
  const whitelistedWebsites = [
    "xbox"
  ]; // Lista blanca de sitios permitidos

  const url = new URL(details.url);
  const hostname = url.hostname.toLowerCase();

  // Verifica si el sitio está en la lista blanca
  for (const website of whitelistedWebsites) {
    if (hostname.includes(website)) {
      return; // Si el sitio está en la lista blanca, permite la navegación
    }
  }

  // Verifica si el sitio está en la lista de sitios bloqueados
  for (const website of blockedWebsites) {
    if (hostname.includes(website)) {
      chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("html/block.html") });
      break;
    }
  }
});
