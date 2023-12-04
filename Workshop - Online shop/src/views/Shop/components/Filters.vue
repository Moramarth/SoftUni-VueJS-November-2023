<script>
export default {

};
</script>

<template>
  <h1>This is filters component</h1>
  <div>
    <ul role="list" class="categories">
      <li>
        <button class="primary">
          Women's Dresses
        </button>
      </li>
      <li>
        <button class="secondary outline">
          Women's Shoes
        </button>
      </li>
      <li>
        <button class="secondary outline">
          Men's Shirts
        </button>
      </li>
      <li>
        <button class="secondary outline">
          Men's Shoes
        </button>
      </li>
      <li>
        <button class="secondary outline">
          Men's Watches
        </button>
      </li>
      <li>
        <button class="secondary outline">
          Women's Watches
        </button>
      </li>
      <li>
        <button class="secondary outline">
          Sunglasses
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
