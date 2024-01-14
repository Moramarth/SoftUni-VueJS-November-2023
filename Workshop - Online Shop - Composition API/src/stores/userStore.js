import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      isAuthenticated: false,
      profile: null,
      favouritesIDs: [],
    };
  },
  actions: {
    setProfile(profileData) {
      this.profile = profileData;
      this.isAuthenticated = true;
      sessionStorage.setItem('user-profile', JSON.stringify(profileData));
    },
    addFavouriteProduct(id) {
      this.favouritesIDs.push(id);
    },
    removeFavouriteProduct(id) {
      this.favouritesIDs = this.favouritesIDs.filter(favourite => favourite !== id);
    },
    getPersistedProfile() {
      const persisted = sessionStorage.getItem('user-profile');
      if (!persisted)
        return;
      this.profile = JSON.parse(persisted);
      this.isAuthenticated = true;
    },
    userStoreLogout() {
      this.isAuthenticated = false;
      this.profile = null;
      sessionStorage.removeItem('user-profile');
    },
  },
});
