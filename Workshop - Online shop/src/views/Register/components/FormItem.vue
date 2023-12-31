<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    field: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<template>
  <div>
    <label :for="field"> {{ label }} </label>
    <slot>
      <input
        :id="field"
        :value="modelValue"
        type="text"
        @input="onChange"
      >
    </slot>
  </div>
</template>

<style scoped>

</style>
