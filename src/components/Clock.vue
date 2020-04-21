<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}<span class="ampm">{{ ampm }}</span></p>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      time: '',
      date: '',
      ampm: '',
      week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      timerID: null
    }
  },
  methods: {
    updateTime() {
      let cd = new Date();
      this.ampm = cd.getHours() >= 12 ? 'PM' : 'AM';

      this.time = cd.getHours() + ':' + this.zeroPadding(cd.getMinutes(), 2);

      this.date = this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + '-' + this.zeroPadding(cd.getFullYear(), 4) +  ' ' + this.week[cd.getDay()];

    },
    zeroPadding(num, digit) {
      let zero = '';
      for(let i = 0; i < digit; i++) {
          zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  },
  mounted() {
    this.timerID = setInterval(this.updateTime, 1000);
    this.updateTime();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#clock {
  font-family: "Righteous", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px #24cdff, 0 0 20px rgba(10, 175, 230, 0);

  .time {
    letter-spacing: 0.05em;
    font-size: 255px;
    padding: 5px 0;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 40px;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
  .ampm {
    font-size: 50px;
  }
}
</style>
