<script setup lang="ts">
const props = defineProps<{ text: string; icon?: string; iconSide?: string }>()

const iconSide = props.iconSide || 'left'
</script>

<template>
  <button class="btn">
    <img v-if="iconSide === 'left' && icon" :src="icon" alt="icon" class="btn__icon-left" />
    {{ text }}
    <img v-if="iconSide === 'right' && icon" :src="icon" alt="icon" class="btn__icon-right" />
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: flex;
  padding: 0.5rem 2.2rem;
  background: transparent;
  border: none;
  box-shadow: 0 0 2px rgba(94, 119, 157, 0.25);
  border-radius: 32px;
  transition: 0.6s;
  cursor: pointer;

  &:active {
    transform: scale(0.92);
    transition: all 0.3s ease;
  }

  &__icon {
    &-left {
      margin-right: 1.1rem;
    }
    &-right {
      margin-left: 1.1rem;
    }
  }
}
</style>
