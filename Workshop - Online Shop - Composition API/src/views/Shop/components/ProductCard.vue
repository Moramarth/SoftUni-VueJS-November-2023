<script setup>
import { computed } from 'vue';
import { useCartStore } from '../../../stores/cartStore';
import { useUserStore } from '../../../stores/userStore';

const props = defineProps({
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
});

const emit = defineEmits(['onAddToCart']);
const userStore = useUserStore();
const cartStore = useCartStore();

const isDisabled = computed(() => {
  const current = cartStore.getProduct(props.product.id);
  if (!current)
    return false;

  return current.quantity >= props.product.stock;
});

const isInFavourites = computed(() => {
  if (userStore.favouritesIDs.length > 0)
    return userStore.favouritesIDs.includes(props.product.id);
  return false;
});

function onFavouriteClick() {
  if (isInFavourites.value) {
    userStore.removeFavouriteProduct(props.product.id);
  }
  else {
    userStore.addFavouriteProduct(props.product.id);
  }
};
</script>

<template>
  <article>
    <span v-if="isInFavourites" class="icon">❤️</span>
    <img :src="props.product.thumbnail" alt="img">

    <slot name="title">
      <h2>{{ props.product.title }}</h2>
    </slot>

    <p>
      {{ props.product.description }}
    </p>
    <p><b>Price</b>: {{ props.product.price }}$</p>
    <footer>
      <button class="secondary outline" @click="emit('onAddToCart', props.product.id)">
        Add to cart 🛒
      </button>
      <button
        v-if="userStore.isAuthenticated"
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
