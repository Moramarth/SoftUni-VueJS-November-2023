import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop/Shop.vue';
import Contacts from '../views/Contacts.vue';
import Cart from '../views/Cart.vue';
import About from '../views/About.vue';
import Register from '../views/Register/Register.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Favourites from '../views/Favourites.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/cart', component: Cart },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/favourites', component: Favourites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
