<script setup lang="ts">
interface IProps {
  icon?: string
  placeholder?: string
  type?: string
  modelValue?: string
}
defineProps<IProps>()
</script>

<template>
  <label class="field">
    <img :src="icon" alt="icon" class="field__icon" />
    <input
      class="field__input"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<style scoped lang="scss">
.field {
  display: flex;
  border: 0.1rem solid #c4c4c4;

  &__icon {
    margin-left: 3.3rem;
    @include ltBigTablet {
      margin-left: 1.1rem;
    }
    @include ltPhone {
      margin-left: 0.5rem;
    }
    @include ltSmallPhone {
      display: none;
    }
  }

  &__input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    background-color: transparent;

    font-size: 1.4rem;
    color: #9b9b9b;

    padding: 1rem 0;
    margin-left: 5.2rem;
    width: 100%;
    @include ltBigTablet {
      margin-left: 2.3rem;
    }
    @include ltPhone {
      margin-left: 1.1rem;
    }
  }
}
</style>
