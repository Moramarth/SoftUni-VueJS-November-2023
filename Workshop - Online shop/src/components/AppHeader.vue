<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  props: {
    cartProducts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q0hUaUi7lLLC5UOslM9ul_B8NyXTKNn9BcBGtCXV&s"
            alt="logo"
          >
        </li>
      </ul>
      <ul>
        <li>
          <RouterLink to="/">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/shop">
            Shop
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts">
            Contacts
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/profile" class="profileLink">
            Profile <img src="" alt="">
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/favourites">
            My favourites
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/register">
            Register
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/">
            Logout
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login">
            Login
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" role="button">
            Cart<span v-if="cartProducts.length">({{ cartProducts.length }})</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  padding: 0.25rem 1rem;
}

nav img {
  height: 2rem;
}
</style>
