<script setup lang="ts">
defineProps<{ text?: string; isChecked?: boolean }>()
</script>

<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="isChecked"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="checkbox__real"
    />
    <span class="checkbox__fake"></span>
    <span v-if="text" class="checkbox__text">{{ text }}</span>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  &__real {
    display: none;
    &:checked + .checkbox__fake {
      border-color: #c4c4c4;
      background: #fce66f;
      &:after {
        content: '';
        display: block;
        transform: rotate(45deg);
        width: 0.5rem;
        height: 1rem;
        border: solid #000000;
        margin: auto;
        border-width: 0 0.2rem 0.2rem 0;
      }
    }
  }
  &__fake {
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    border: 0.1rem solid #c4c4c4;
    cursor: pointer;
  }
  &__text {
    margin-left: 1rem;
    font-size: 1.3rem;
    color: #000000;
  }
}
</style>
