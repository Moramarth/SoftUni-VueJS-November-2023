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
    v$: {
      type: Object,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    hasErrors() {
      return this.v$?.formData[this.field]?.$errors.length;
    },
  },
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<template>
  <div :class="hasErrors ? 'has-errors' : ''">
    <label :for="field"> {{ label }} </label>
    <slot>
      <input
        :id="field"
        :value="modelValue"
        type="text"
        @input="onChange"
      >
    </slot>
    <ul v-if="hasErrors" class="error-msg">
      <li v-for="error in v$?.formData[field].$errors" :key="error.$uid">
        {{ error.$message }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.has-errors> :deep(input),
.has-errors> :deep(select),
.has-errors> :deep(textarea) {
    border-color: red;
}

.has-errors .error-msg {
    color: red;
}
</style>
