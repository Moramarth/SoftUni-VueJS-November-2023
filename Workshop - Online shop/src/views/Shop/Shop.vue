<script>
import { products } from '../../constants/products';
import Filters from './components/Filters.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  components: {
    Filters,
    ProductCard,
  },
  emits: ['onAddToCart'],
  data() {
    return {
      selectedFilter: '',
      products,
    };
  },
  computed: {
    displayProducts() {
      if (this.selectedFilter === '')
        return this.products;

      return this.products.filter(product => product.category === this.selectedFilter);
    },
  },
  methods: {
    onFilterSelect(selected) {
      this.selectedFilter = selected;
    },
  },
};
</script>

<template>
  <div class="container">
    <section id="shop">
      <h2>Shop Our Collections</h2>
      <p>
        From casual wear to formal attire, we have something for every occasion. Browse through our diverse range of
        products and find the perfect outfit that suits your style.
      </p>
    </section>
  </div>
  <Filters :active-item="selectedFilter" @on-select="onFilterSelect" />
  <div class="products">
    <ProductCard
      v-for="product in displayProducts"
      :key="`products-${product.id}`"
      :product="product"
      @on-add-to-cart="$emit('onAddToCart', $event)"
    />
  </div>
</template>

<style  scoped>
.products {
  display: grid;
  grid-template-columns: repeat(var(--product-cols, 1), 1fr);
  gap: 1rem;
}

@media screen and (min-width: 560px) {
  .products {
    --product-cols: 2;
  }
}

@media screen and (min-width: 768px) {
  .products {
    --product-cols: 3;
  }
}

@media screen and (min-width: 1024px) {
  .products {
    --product-cols: 4;
  }
}
</style>
