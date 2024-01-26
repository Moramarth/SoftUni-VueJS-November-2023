<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
  activeItem: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['onSelect']);

function onSelect(selected) {
  const val = props.activeItem === selected ? '' : selected;
  emit('onSelect', val);
};
</script>

<template>
  <div>
    <ul role="list" class="categories">
      <li v-for="category in props.categories" :key="category">
        <button :class="[activeItem === category ? 'primary' : 'secondary outline']" @click="onSelect(category)">
          {{ category.toUpperCase() }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.categories li{
  margin: 0;
}

.categories .btn{
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 0;
}
</style>
