<script>
import FormItem from './FormItem.vue';

export default {
  components: { FormItem },
  props: {
    initialData: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        pass: '',
        confirmPass: '',
        phone: 0,
        email: '',
        gender: '',
        dateOfBirth: '',
      }),
    },
  },
  emits: ['onSubmit'],
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
    <h2>Step 1: General Information</h2>

    <form action="" @submit.prevent="handleSubmit">
      <FormItem
        v-model="formData.name"
        class="full-row"
        field="name"
        label="Name"
        required
      />

      <FormItem
        field="pass"
        label="Password"
        required
      >
        <input id="pass" v-model="formData.pass" type="password">
      </FormItem>

      <FormItem
        field="confirmPass"
        label="Confirm password"
        required
      >
        <input id="confirmPass" v-model="formData.confirmPass" type="password">
      </FormItem>

      <FormItem
        v-model="formData.email"
        field="email"
        label="Email"
        required
      />

      <FormItem
        field="phone"
        label="Phone number"
        required
      >
        <input id="phone" v-model="formData.phone" type="number">
      </FormItem>

      <FormItem
        field="gender"
        label="Gender"
        required
      >
        <select id="gender" v-model="formData.gender">
          <option disabled value="">
            Select
          </option>
          <option value="Male">
            Male
          </option>
          <option value="Female">
            Female
          </option>
          <option value="Other">
            Other
          </option>
        </select>
      </FormItem>
      <button type="submit" class="full-row">
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
