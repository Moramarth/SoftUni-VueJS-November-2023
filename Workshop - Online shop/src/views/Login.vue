<script>
import { loginUser } from '../dataProviders/auth';

export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      const userData = await loginUser(this.user);
      this.isLoading = false;
    },
  },
};
</script>

<template>
  <article class="card">
    <h1>Login</h1>
    <h3>Username: kminchelle </h3>
    <h3>password: 0lelplR</h3>

    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="user.username"
          required
          type="text"
          :disabled="isLoading"
        >
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="user.password"
          required="password"
          type="password"
          :disabled="isLoading"
        >
      </div>
      <button :disabled="isLoading">
        <span v-if="isLoading" class="loader" />
        <span v-else>Submit</span>
      </button>
    </form>
  </article>
</template>

<style scoped>
.card {
    max-width: 640px;
    margin: 0 auto;
}

.card h1,
.card h3 {
    margin-bottom: 1rem;
    text-align: center;
}

.loader {
    width: 24px;
    height: 24px;
    border: 5px solid white;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>
