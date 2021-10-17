const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
    installBtn.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('dumb up', 'installBtn-clicked' );
    const promptEvent = window.defferedPrompt; 
    if (!promptEvent) {
        return;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('dumbs up', 'appinstalled', event);
    window.defferedPrompt = null;
});
