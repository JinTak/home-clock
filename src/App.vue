<template>
  <div id="app">
    <Clock />
  </div>
</template>

<script>
import Clock from './components/Clock.vue'

export default {
  name: 'app',
  components: {
    Clock
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
body {
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
}
p {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
