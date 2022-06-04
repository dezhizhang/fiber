

let scheduledHostCallback = null;
const messageChannel = new MessageChannel();
messageChannel.port1.onmessage = performWorkUnitlDeadline;

function performWorkUnitlDeadline() {
    
}

function scheduleCallback(callback) {
    requestHostCallback(callback);
}


export {

    scheduleCallback,
}