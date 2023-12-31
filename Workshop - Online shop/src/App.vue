<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contacts from './views/Contacts.vue';
import Shop from './views/Shop/Shop.vue';
import Cart from './views/Cart.vue';
import Register from './views/Register/Register.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    Home,
    About,
    Contacts,
    Shop,
    Cart,
    Register,
  },
  data() {
    return {
      view: 'Home',
      cartProducts: [],
    };
  },
  methods: {
    handleNavSelection(selectedview) {
      this.view = selectedview;
    },
    onAddToCart(productId) {
      this.cartProducts.push(productId);
    },
  },
};
</script>

<template>
  <AppHeader :cart-products="cartProducts" @on-select="handleNavSelection" />
  <main>
    <component :is="view" @on-add-to-cart="onAddToCart" />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
