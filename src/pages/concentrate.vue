<template>
  <div class="container">
    <h1 class="title">Concentrate</h1>
    <div class="columns">
      <div class="column is-4"></div>
      <div class="column is-4 has-text-centered"><span>{{stopWatch}}</span></div>
      <div class="column is-4 has-text-right"><button class="button is-rounded is-success is-medium" @click="reset">Reset</button></div>
    </div>
    <div class="columns is-multiline">
      <div v-for="(v, i) in randArr" :key="i" class="column is-one-quarter">
        <div class="card">
          <div class="card-content">
            <label :class="'card'+v">
              <input type="checkbox" :id="'card-'+i" :value="i+'-'+v" v-model="openCards" @click="timerOn" />
              <span class="card-bg"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConcentrateApp',
  props: {
    cardNum: Number,
  },
  created() {
    this.reset()
  },
  data() {
    return {
      randArr: [],
      openCards: [],
      elapsedTime: 0,
      timerId: null,
    }
  },
  methods: {
    createArray() {
      let array = [...Array(this.cardNum)].map((_, i) => i)
      array = [...array, ...array]
      for (let i = array.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
      }
      return array;
    },
    reset() {
      this.timerOff()
      this.elapsedTime = 0
      this.randArr = this.createArray()
    },
    timerOn() {
      if (this.timerId == null) {
        this.timerId = setInterval(() => {this.elapsedTime++}, 1000)
      }
    },
    timerOff() {
      clearInterval(this.timerId)
      this.timerId = null
    },
  },
  computed: {
    stopWatch() {
      const t = this.elapsedTime
      const h = Math.floor(t / 3600)
      const m = Math.floor((t - h * 3600) / 60)
      const s = t - h * 3600 - m * 60
      const padding = (d) => {
        const dStr = '0' + d
        return (dStr.length > 3) ? dStr.substring(1) : dStr.substring(dStr.length - 2)
      }
      return padding(h) + ':' + padding(m) + ':' + padding(s)
    }
  },
  watch: {
    openCards(openCards) {
      if (openCards.length == 2) {
        let that = this
        let cardIds = openCards.map(v => v.split('-')[1])
        setTimeout(function() {
          if (cardIds[0] == cardIds[1]) {
            that.randArr = that.randArr.filter(v => v != cardIds[0])
          }
          that.openCards = []
        }, 1000)
      }
    },
    randArr(randArr) {
      if (randArr.length == 0) {
        this.timerOff()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0;
}

input[type=checkbox] {
  display: none; /* チェックボックスを非表示にする */
}

input + .card-bg:before {
  content: "";
  display: inline-block;
  position: relative;
  top: 0.25em;
  margin: 0 5px 0 0;
  background-image: none, url("../assets/saturns.jpg");
  background-size: 68% auto, 100%;
  background-position: top 55% left 50%, 0 0;
  background-repeat: no-repeat, no-repeat;
  width: 225px;
  height: 225px;
}

.card0 input:checked + .card-bg:before {
  background-image: url("../assets/97916f5d.png");
}
.card1 input:checked + .card-bg:before {
  background-image: url("../assets/71ebb16b.png");
}
.card2 input:checked + .card-bg:before {
  background-image: url("../assets/86a6f0a1.png");
}
.card3 input:checked + .card-bg:before {
  background-image: url("../assets/649a4666.png");
}
.card4 input:checked + .card-bg:before {
  background-image: url("../assets/767b7863.png");
}
.card5 input:checked + .card-bg:before {
  background-image: url("../assets/6111fcf9.png");
}
</style>
