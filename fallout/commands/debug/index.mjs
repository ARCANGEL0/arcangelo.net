const output = [
    'This line is exactly 80 characters.',
    `Screen Width: ${window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth}`,
    `Screen Height: ${window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight}`,
    `Device Info: ${navigator.userAgent}`,
    `Platform: ${navigator.platform}`,
    `Language: ${navigator.language || navigator.userLanguage}`,
    `Cookies Enabled: ${navigator.cookieEnabled}`,
    `Online Status: ${navigator.onLine}`,
    `Viewport Size: ${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
    `Referrer: ${document.referrer}`,
    `Browser Version: ${navigator.appVersion}`,
    `JavaScript Enabled: ${typeof window !== 'undefined' && typeof window.alert === 'function'}`,
    `Screen Color Depth: ${window.screen.colorDepth} bits`,
    `Screen Resolution: ${window.screen.width}x${window.screen.height}`,
    `Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    `Connection Type: ${navigator.connection ? navigator.connection.effectiveType : 'N/A'}`,
    `Memory: ${navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'N/A'}`,
    `Hardware Concurrency: ${navigator.hardwareConcurrency || 'N/A'} logical processors`
];

export { output };
