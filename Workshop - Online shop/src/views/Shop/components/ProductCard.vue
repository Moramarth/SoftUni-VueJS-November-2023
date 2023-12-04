<script>
export default {

};
</script>

<template>
  <h1>This is product card component</h1>
  <article>
    <img src="https://i.dummyjson.com/data/products/81/1.jpg" alt="img">
    <h2>Round Silver Frame Sun Glasses</h2>
    <p>
      A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor
      activities, social gatherings,
    </p>
    <p><b>Price</b>: 55$</p>
    <footer>
      <button class="secondary outline">
        Add to cart 🛒
      </button>
    </footer>
  </article>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
</style>
