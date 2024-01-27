<script setup>
import { reactive, ref } from 'vue';
import Steps from 'primevue/steps';
import AddressForm from './components/AddressForm.vue';
import GeneralForm from './components/GeneralForm.vue';

const activeForm = ref('general');
const items = [{ label: 'General Info' }, { label: 'Address' }];
const currentStepIndex = {
  general: 0,
  address: 1.0,
};
const data = reactive({
  general: {
    name: '',
    pass: '',
    confirmPass: '',
    phone: undefined,
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
  <div class="steps">
    <Steps :model="items" :active-step="currentStepIndex[activeForm]" />
  </div>

  <GeneralForm v-if="activeForm === 'general'" :initial-data="data.general" @on-submit="onGeneralFormSubmit" />
  <AddressForm
    v-else
    :initial-data="data.address"
    @on-submit="onSubmit"
    @on-back="onBack"
  />
</template>

<style  scoped>
.steps {
  margin-bottom: 1rem;
}
</style>
