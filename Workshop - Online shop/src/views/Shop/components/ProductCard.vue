<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../../../stores/cartStore';
import { useUserStore } from '../../../stores/userStore';

export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        id: -1,
        title: 'DEFAULT ITEM',
        description: 'DEFAULT ITEM',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: 'DEFAULT ITEM',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/41/thumbnail.webp',
        images: [
          'https://i.dummyjson.com/data/products/41/1.jpg',
        ],
      }),
    },
  },
  emits: ['onAddToCart'],
  computed: {
    ...mapState(useCartStore, ['getProduct']),
    ...mapState(useUserStore, ['favouritesIDs', 'isAuthenticated']),
    isDisabled() {
      const current = this.getProduct(this.product.id);
      if (!current)
        return false;

      return current.quantity >= this.product.stock;
    },
    isInFavourites() {
      if (this.favouritesIDs.length > 0)
        return this.favouritesIDs.includes(this.product.id);
      else return false;
    },
  },
  methods: {
    ...mapActions(useUserStore, ['addFavouriteProduct', 'removeFavouriteProduct']),
    onFavouriteClick() {
      if (this.isInFavourites) {
        this.removeFavouriteProduct(this.product.id);
      }
      else {
        this.addFavouriteProduct(this.product.id);
      }
    },
  },
};
</script>

<template>
  <article>
    <span v-if="isInFavourites" class="icon">❤️</span>
    <img :src="product.thumbnail" alt="img">

    <slot name="title">
      <h2>{{ product.title }}</h2>
    </slot>

    <p>
      {{ product.description }}
    </p>
    <p><b>Price</b>: {{ product.price }}$</p>
    <footer>
      <button class="secondary outline" @click="$emit('onAddToCart', product.id)">
        Add to cart 🛒
      </button>
      <button
        v-if="isAuthenticated"
        class="secondary outline"
        :disabled="isDisabled"
        @click="onFavouriteClick"
      >
        {{ isInFavourites ? 'Remove from favourites' : 'Add to favourites' }}
      </button>
    </footer>
  </article>
</template>

<style scoped>
article{
  position: relative;
}

.icon{
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
}
</style>
