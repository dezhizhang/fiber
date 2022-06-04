

let scheduledHostCallback = null;
const messageChannel = new MessageChannel();
messageChannel.port1.onmessage = performWorkUnitlDeadline;

let deadLine = 0;
let yieldTnterval = 5;

function getCurrentTime() {
    return performance.now();
}

function performWorkUnitlDeadline() {
    const currentTime = getCurrentTime();

    deadLine = currentTime + yieldTnterval;

    const hasMoreWork = scheduledHostCallback();
    if(hasMoreWork) {
        messageChannel.port2.postMessage(null);
    }
}

export function requestHostCallback(callback) {
    scheduledHostCallback = callback;
    messageChannel.port2.postMessage(null);

}

export function shouldYieldToHost() {
    const currentTime = getCurrentTime();
    return currentTime >= deadLine;
}