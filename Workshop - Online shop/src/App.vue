<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
    };
  },
};
</script>

<template>
  <AppHeader :cart-products="cartProducts" />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
