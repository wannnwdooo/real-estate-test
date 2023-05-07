<script setup lang="ts">
import { colorsMap } from '@/assets/content/estate'

defineProps<{ text: string; color?: string }>()

const getColor = (text: string): string => colorsMap[text] || ''
</script>

<template>
  <button class="status" :class="[getColor(text), color]">{{ text }}</button>
</template>

<style scoped lang="scss">
.status {
  padding: 0.6rem 0.9rem;
  border: none;

  &:before {
    content: '\2022';
    margin-right: 0.5rem;
  }

  &.red {
    background: #ffe4e4;
    color: #dd4c5d;
  }
  &.blue {
    background: #d6f5ff;
    color: #0291c1;
  }
  &.light-gray {
    background: #ededed;
    color: #686868;
  }
  &.dark-gray {
    background: #cccccc;
    color: #808080;
  }
}
</style>
