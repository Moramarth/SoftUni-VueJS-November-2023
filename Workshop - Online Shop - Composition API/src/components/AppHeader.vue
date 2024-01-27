<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Menubar from 'primevue/menubar';
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Shop',
    icon: 'pi pi-box',
    route: '/shop',
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    route: 'about',
  },
  {
    label: 'Contacts',
    icon: 'pi pi-phone',
    route: '/contacts',
  },
  {
    label: 'Cart',
    icon: 'pi pi-shopping-cart',
    route: '/cart',
  },
  {
    label: 'Register',
    icon: 'pi pi-box',
    route: '/register',
    visible: () => !userStore.isAuthenticated,
  },
  {
    label: 'Login',
    icon: 'pi pi-box',
    route: '/login',
    visible: () => !userStore.isAuthenticated,
  },
  {
    label: 'Profile',
    icon: 'pi pi-user',
    route: '/profile',
    visible: () => userStore.isAuthenticated,
  },
  {
    label: 'My favourites',
    icon: 'pi pi-star',
    route: '/favourites',
    visible: () => userStore.isAuthenticated,
  },
  {
    label: 'Logout',
    icon: 'pi pi-logout',
    route: '/',
    command: userStore.userStoreLogout,
    visible: () => userStore.isAuthenticated,
  },
]);
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
      <template #item="{ item, props }">
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
      </template>
    </Menubar>
  </header>
</template>

<style scoped>
.p-menubar.p-component{
  justify-content: space-between;
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background-color: var(--primary-color);
}

img {
  height: 2rem;
}
</style>
