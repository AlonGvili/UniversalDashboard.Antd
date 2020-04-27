export function getApiPath() {
    return "";
}

export function getWsApiPath() {
    var protocol = "ws://";
    if (window.location.protocol.toLowerCase().startsWith("https")) {
        protocol = "wss://";
    }

    return protocol + window.location.hostname + (window.location.port ? ':' + window.location.port : ''); 
}