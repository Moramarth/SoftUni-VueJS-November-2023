<script>
import Card from './components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        { idx: 1, type: 'Vue', img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
        { idx: 2, type: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
        { idx: 3, type: 'Vue', img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
        { idx: 4, type: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
      ],
      selectedItem: [],
      guessedItems: [],
    };
  },
  watch: {
    selectedItem: {
      handler(newVal) {
        if (newVal.length === 2 && (newVal[0].type === newVal[1].type))
          this.guessedItems.push(newVal[0].type);
      },
      deep: true,
    },
  },
  methods: {
    handleSelect(idx, type) {
      if (this.selectedItem.length < 2)
        this.selectedItem.push({ idx, type });

      else if (this.selectedItem.length === 2)
        this.selectedItem = [{ idx, type }];
    },
  },
};
</script>

<template>
  <div class="myGrid">
    <Card
      v-for="card in cards"
      :key="card.idx"
      :type="card.type"
      :img="card.img"
      :idx="card.idx"
      :active-items="selectedItem"
      :guessed-items="guessedItems"
      @on-click="handleSelect"
    />
  </div>
</template>

<style scoped>
.myGrid {
  max-width: 400px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  gap: 1rem;
}
</style>
