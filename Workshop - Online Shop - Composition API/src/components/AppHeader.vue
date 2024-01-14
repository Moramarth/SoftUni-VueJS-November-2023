<script>
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import Menubar from 'primevue/menubar';
import { useCartStore } from '../stores/cartStore';
import { useUserStore } from '../stores/userStore';

export default {
  components: {
    RouterLink,
    Menubar,
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-box',
          route: '/',
        },
        {
          label: 'Shop',
          icon: 'pi pi-box',
          route: '/shop',
        },
        {
          label: 'About',
          icon: 'pi pi-box',
          route: 'about',
        },
        {
          label: 'Contacts',
          icon: 'pi pi-box',
          route: '/contacts',
        },
        {
          label: 'Register',
          icon: 'pi pi-box',
          route: '/register',
        },
        {
          label: 'Login',
          icon: 'pi pi-box',
          route: '/login',
        },
        {
          label: 'Profile',
          icon: 'pi pi-box',
          route: '/profile',
        },
        {
          label: 'My favourites',
          icon: 'pi pi-box',
          route: '/favourites',
        },
        {
          label: 'Cart',
          icon: 'pi pi-box',
          route: '/cart',
        },
      ],
    };
  },
  computed: {
    ...mapState(useCartStore, ['products']),
    ...mapState(useUserStore, ['isAuthenticated', 'profile']),
  },
  methods: {
    ...mapActions(useUserStore, ['userStoreLogout']),
  },

};
</script>

<template>
  <header>
    <Menubar :model="items">
      <template #start>
        <ul>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q0hUaUi7lLLC5UOslM9ul_B8NyXTKNn9BcBGtCXV&s"
              alt="logo"
            >
          </li>
        </ul>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <RouterLink
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            :href="href"
            v-bind="props.action"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </RouterLink>
        <a
          v-else
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
    </Menubar>
  </header>
</template>

<style scoped>
img {
  height: 2rem;
}
/* .profileLink{
  display: flex;
  gap: 0.25rem;
  align-items: center;
}
.profileLink img{
  width: 2rem;
  height: auto;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid var(--primary);
  margin: 0 auto;
} */
</style>
