<script>
import AddressForm from './components/AddressForm.vue';
import GeneralForm from './components/GeneralForm.vue';

export default {
  components: { GeneralForm, AddressForm },
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
    onGeneralFormSubmit(generalData) {
      this.activeForm = 'address';
      this.data.general = { ...generalData };
    },
    onSubmit(addressData) {
      this.data.address = { ...addressData };
      console.log('THE DATA', this.data);
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
