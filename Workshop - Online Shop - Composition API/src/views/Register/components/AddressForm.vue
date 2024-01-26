<script setup>
import { computed, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import FormItem from './FormItem.vue';

const props = defineProps({
  initialData: {
    type: Object,
    required: true,
    default: () => ({
      address1: '',
      address2: '',
      city: '',
    }),
  },
});

const emit = defineEmits(['onSubmit', 'onBack']);

const formData = reactive({ ...props.initialData });

const rules = computed(() => ({
  address1: {
    required,
    minLength: minLength(5),
  },
  city: {
    required,
  },
}));

const v$ = useVuelidate(rules, formData);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (isValid) {
    emit('onSubmit', formData);
  }
};
</script>

<template>
  <div>
    <h2>Step 2: Address Information</h2>
    <form action="" @submit.prevent="handleSubmit">
      <FormItem
        v-model="formData.address1"
        :v$="v$"
        class="full-row"
        field="address1"
        label="Address Line 1"
        required
      />
      <FormItem
        v-model="formData.address2"
        field="address2"
        class="full-row"
        label="Address Line 2"
      />
      <FormItem
        v-model="formData.city"
        :v$="v$"
        field="city"
        label="City"
        required
      />
      <button type="button" class="secondary" @click="$emit('onBack')">
        Go back
      </button>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

form .full-row{
    grid-column: 1 / 3;
}
</style>
