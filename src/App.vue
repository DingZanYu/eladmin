<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>
<script>
const debounce = (fn, delay) => {

let timer = null;

return function () {

	let context = this;

	let args = arguments;

	clearTimeout(timer);

	timer = setTimeout(function () {

		fn.apply(context, args);

	}, delay);

}

}

// 解决ERROR ResizeObserver loop completed with undelivered notifications.

//问题的

const _ResizeObserver = window.ResizeObserver;

window.ResizeObserver = class ResizeObserver extends _ResizeObserver {

constructor(callback) {

	callback = debounce(callback, 16);

	super(callback);

}

}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
