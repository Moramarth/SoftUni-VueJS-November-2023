<script setup>
import { reactive, ref } from 'vue';
import AddressForm from './components/AddressForm.vue';
import GeneralForm from './components/GeneralForm.vue';

const activeForm = ref('general');
const data = reactive({
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
});

async function onGeneralFormSubmit(generalData) {
  activeForm.value = 'address';
  data.general = { ...generalData };
};

async function onSubmit(addressData) {
  data.address = { ...addressData };
};

function onBack() {
  activeForm.value = 'general';
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

<style lang="scss" scoped></style>
