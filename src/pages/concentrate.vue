<template>
  <div class="concentrate">
    <h1>Concentrate</h1>
    <div class="columns is-multiline">
      <label v-for="(v, i) in randArr" :key="v" class="column card" :class="'card'+v">
        <input type="checkbox" :id="'card-'+i" :value="v" :v-model="openCards" @click="checkCards" />
        <span class="card-bg"></span>
      </label>
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
    this.randArr = this.createArray()
  },
  data() {
    return {
      randArr: [],
      openCards: [],
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
    checkCards() { //TODO
      if (this.openCards.length == 2) {
        if (this.openCards[0] == this.openCards[1]) {
          let idList = window.$('input:checked').attr('id').get().map(id => id.split('-')[1])
          for (let id of idList) {
            this.randArr.splice(id, 1)
          }
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input[type=checkbox] {
  display: none; /* チェックボックスを非表示にする */
}

.card input + .card-bg:before {
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
