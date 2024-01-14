<script>
import { mapState } from 'pinia';
import { useUserStore } from '../stores/userStore';

export default {
  computed: {
    ...mapState(useUserStore, ['favouritesIDs']),
  },
};
</script>

<template>
  <h1>My Favourites</h1>
  <ul v-if="favouritesIDs">
    <li v-for="id in favouritesIDs" :key="id">
      product {{ id }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
