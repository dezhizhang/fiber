

import { requestHostCallback,shouldYieldToHost as shouldYield } from './SchedulerHostCallback';

let taskQueue = [];
let currentTask = null;
function scheduleCallback(callback) {
    taskQueue.push(callback);
    requestHostCallback(flushWork);
}

function flushWork() {
    return workLoop();
}

function workLoop() {
    currentTask = taskQueue[0];
    while(currentTask) {
        if(shouldYield()) {
            break;
        }
        const continuationCallback = currentTask();
        if(typeof continuationCallback === 'function') {
            currentTask = continuationCallback;
        }else {
            taskQueue.shift();
        }
        currentTask = taskQueue[0]
    }
    return currentTask;
}

export {

    shouldYield,
    scheduleCallback,
}