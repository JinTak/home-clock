<template>
  <div :class="{'color-picker': true, 'show': show}">
    <div @click="toggle" class="color-picker-toggle"></div>
    <div class="color-swatches">
      <span @click="switchColor(color)" v-for="color in neonColors" :key="color" class="color-swatch" :style="{'background-color': color}"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'color-picker',
  data() {
    return {
      show: false,
      colors: ["#CAEFD1", "#FDE0D9", "#24cdff", "orangered", "white"],
      neonColors: [
        '#E6FB04',
        '#FF6600',
        '#33FF00',
        '#00FFFF',
        '#0062FF',
        '#FF00FF',
        '#9D00FF'
      ]
    }
  },
  computed: {
    ...mapGetters(["read"]),
    color() {
      return this.read('activeColor')
    }
  },
  methods: {
    ...mapActions(["set"]),
    toggle() {
      this.show = !this.show;
    },
    switchColor(color) {
      this.set({prop: 'activeColor', data: color})
    }
  }
}
</script>

<style scoped lang="scss">
.color {
  &-picker {
    width: 100%;
    position: absolute;
    padding: 10px;
    bottom: -115px;
    left: 0;
    right: 0;
    transition: all .5s;
    
    &.show {
      bottom: 0;
    }

    &-toggle {
      position: relative;
      height: 50px;
      width: 50px;
      margin: 0 auto 30px;
      transition: all .65s;

      .show & {
        transform: rotateX(180deg);
      }

      &:before,
      &:after {
        content: "";
        height: 30px;
        width: 5px;
        position: absolute;
        background-color: #ffffff;
        transform-origin: top;
        border-radius: 5px;
        box-shadow: 0 0 10px 5px rgba(255,255,255,.3);
      }

      &:before {
        left: 55%;
        transform: translate(-50%) rotate(40deg);
      }
      &:after {
        left: 50%;
        transform: translate(-50%) rotate(-40deg);
      }
    }
  }
  &-swatches {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s;

  }

  &-swatch {
    display: inline-block;
    flex: 1 1 auto;
    height: 100%;
    margin: 0 5px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>