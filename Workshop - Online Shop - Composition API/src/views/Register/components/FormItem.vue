<script setup>
import { computed } from 'vue';

const props = defineProps({
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

});

const emit = defineEmits(['update:modelValue']);

const hasErrors = computed(() => {
  if (props.v$) {
    return props.v$[props.field]?.$errors.length;
  }
  return 0;
});

function onChange(event) {
  emit('update:modelValue', event.target.value);
}
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
      <li v-for="error in v$[field].$errors" :key="error.$uid">
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
