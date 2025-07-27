globalThis.myEmail = undefined;
globalThis.myPassword = undefined;
globalThis.domain = 'https://skylands.uk';
// http://localhost:8080
// https://skylands.uk
globalThis.skylands = undefined;






// Setup BroadcastChannel
const channel = new BroadcastChannel('AuthChannel');

// Request auth data if missing
const loop = setInterval(() => {
    if (!globalThis.myEmail || !globalThis.myPassword) {
        channel.postMessage({ type: 'requestAuthData' });
    }
    if (globalThis.myEmail && globalThis.myPassword) clearInterval(loop);
}, 1000);

// Handle messages
channel.onmessage = (e) => {
    const { type, myEmail, myPassword } = e.data;

    // Receive auth data
    if (type === 'authData') {
        globalThis.myEmail = myEmail;
        globalThis.myPassword = myPassword;
    }

    // Respond to auth data requests
    if (type === 'requestAuthData' && globalThis.myEmail && globalThis.myPassword) {
        channel.postMessage({
            type: 'authData',
            myEmail: globalThis.myEmail,
            myPassword: globalThis.myPassword
        });
    }
};
