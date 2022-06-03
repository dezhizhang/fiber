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
