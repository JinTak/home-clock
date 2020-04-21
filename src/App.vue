<template>
  <div id="app">
    <clock />
    <color-picker></color-picker>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Clock from './components/Clock.vue'
import ColorPicker from './components/ColorPicker.vue'

export default {
  name: 'app',
  components: {
    Clock,
    ColorPicker
  },
  computed: {
    ...mapGetters(["read"]),
    color() {
      return this.read("activeColor");
    }
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
  background: #000000;
  background: radial-gradient(ellipse at center,#3d3d3d 0,#000 70%);
  background-size: 100%;
}
p {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
