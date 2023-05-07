<script setup lang="ts">
import TheButton from '@/components/common/TheButton.vue'
import type { IData } from '@/types/estate'
import { getIcon } from '@/assets/content/estate'

defineProps<{ data: IData }>()
</script>

<template>
  <div class="estate-info">
    <p class="estate-info__price">{{ data.price }} руб.</p>
    <TheButton
      v-tooltip.bottom="data.extra"
      :icon="getIcon(data.type)"
      :text="data.type"
      class="estate-info__type"
    />
    <p class="estate-info__complex">
      {{ data.complex }},
      <span>корпус {{ data.block }}, </span>
      <span>{{ data.total_apartments }} кв. </span>
      <span>{{ data.year }} г.</span>
    </p>
    <div class="estate-info__description">
      <p v-if="data.parking">№ {{ data.parking }}</p>
      <p v-if="data.apartment">кв. {{ data.apartment }}</p>
      <p v-if="data.area">{{ data.area }} м²</p>
      <p v-if="data.rooms">{{ data.rooms }} комн. кв.</p>
      <p v-if="data.floor">{{ data.floor }} этаж</p>
    </div>
    <p class="estate-info__address">
      <img src="/img/icons/spot.svg" alt="spot" class="estate-info__img" />
      {{ data.address }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.estate-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @include ltBigTablet {
    padding: 1rem;
  }
  @include ltPhone {
    row-gap: 1rem;
  }

  &__price {
    font-weight: 700;
    font-size: 1.5rem;
    color: #ff0d29;
    @include ltBigTablet {
      justify-self: center;
    }
  }
  &__type {
    justify-self: center;
    &:active {
      transform: none;
    }
  }
  &__complex {
    grid-column: 1/3;
    margin-bottom: 1.5rem;
    @include ltSmallPhone {
      text-align: center;
    }
  }
  &__description {
    grid-column: 1/3;
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 1.6rem;
    @include ltDesktop {
      grid-template-columns: repeat(2, 1fr);
    }

    p:nth-child(odd) {
      text-align: start;
      border-right: 0.1rem solid #c4c4c4;
      @include ltBigTablet {
        text-align: center;
      }
    }
    p:nth-child(even) {
      padding-left: 2.7rem;
      @include ltDesktop {
        padding-left: 2rem;
      }
      @include ltBigTablet {
        padding-left: 0;
        text-align: center;
      }
    }
  }
  &__address {
    position: relative;
    grid-column: 1/3;
    @include ltSmallPhone {
      text-align: center;
    }
  }
  &__img {
    position: absolute;
    left: -2rem;
    top: 0.4rem;
    @include ltBigTablet {
      position: relative;
      left: 0;
      top: 0;
    }
  }
}
</style>
