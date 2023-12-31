<script>
import FormItem from './FormItem.vue';

export default {
  components: { FormItem },
  props: {
    initialData: {
      type: Object,
      required: true,
      default: () => ({
        address1: '',
        address2: '',
        city: '',
      }),
    },
  },
  emits: ['onSubmit', 'onBack'],
  data() {
    return {
      formData: { ...this.initialData },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('onSubmit', this.formData);
    },
  },
};
</script>

<template>
  <div>
    <h2>Step 2: Address Information</h2>
    <form action="" @submit.prevent="handleSubmit">
      <FormItem
        v-model="formData.address1"
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
