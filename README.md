# fiber

```js
let div = document.querySelector("div");
let button = document.querySelector("button");
let startTime = 0;

function progress() {
  div.style.width = div.offsetWidth + 1 + "px";
  div.innerHTML = div.offsetWidth + "%";
  if (div.offsetWidth < 100) {
    console.log(Date.now() - startTime + "ms");
    startTime = Date.now();
    requestAnimationFrame(progress);
  }
}

button.onclick = function () {
  div.style.width = "0px";
  startTime = Date.now();
  requestAnimationFrame(progress);
};
```

### requestIdleCallback

```js
function sleep(duration) {
  let start = Date.now();
  while (start + duration > Date.now()) {}
}
let works = [
  () => {
    sleep(100);
    console.log("A1开始"), console.log("A1结束");
  },
  () => {
    console.log("B1开始"), console.log("B1结束");
  },
];
requestIdleCallback(workLoop, { timeout: 1000 });

function workLoop(deadline) {
  console.log("本帧的的时间", parseInt(deadline.timeRemaining()));
  while (deadline.timeRemaining() > 0 && works.length > 0) {
    perforUnitOfWork();
  }
  if (works.length > 0) {
    requestIdleCallback(workLoop);
  }
}

function perforUnitOfWork() {
  let work = works.shift();
  work();
}
```

### MessageChannel

```js
let channel = new MessageChannel();
let port1 = channel.port1;
let port2 = channel.port2;

port1.onmessage = function (event) {
  console.log("port1收到来自port2的数据", event.data);
};

port2.onmessage = function () {
  console.log("port2收到来自port1的数据", event.data);
};

port1.postMessage("发送给port2");
port2.postMessage("发送给port1");
```
