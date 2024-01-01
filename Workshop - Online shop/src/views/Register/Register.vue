<script>
import { useVuelidate } from '@vuelidate/core';
import AddressForm from './components/AddressForm.vue';
import GeneralForm from './components/GeneralForm.vue';

export default {
  components: { GeneralForm, AddressForm },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      activeForm: 'general',
      data: {
        general: {
          name: '',
          pass: '',
          confirmPass: '',
          phone: 0,
          email: '',
          gender: '',
          dateOfBirth: '',
        },
        address: {
          address1: '',
          address2: '',
          city: '',
        },
      },
    };
  },
  methods: {
    async onGeneralFormSubmit(generalData) {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.activeForm = 'address';
        this.data.general = { ...generalData };
      }
    },
    async onSubmit(addressData) {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.data.address = { ...addressData };
      }
    },
    onBack() {
      this.activeForm = 'general';
    },
  },
};
</script>

<template>
  <GeneralForm v-if="activeForm === 'general'" :initial-data="data.general" @on-submit="onGeneralFormSubmit" />
  <AddressForm
    v-else
    :initial-data="data.address"
    @on-submit="onSubmit"
    @on-back="onBack"
  />
</template>

<style lang="scss" scoped>

</style>
