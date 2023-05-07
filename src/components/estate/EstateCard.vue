<script setup lang="ts">
import type { IData } from '@/types/estate'
import EstateStatus from '@/components/estate/EstateStatus.vue'
import TheCheckbox from '@/components/common/TheCheckbox.vue'
import EstateInfo from '@/components/estate/EstateInfo.vue'

defineProps<{ data: IData; selectedList: string[] }>()
</script>

<template>
  <div class="estate-card">
    <TheCheckbox
      @change="$emit('checkbox', data.id)"
      :isChecked="selectedList.includes(data.id)"
      class="estate-card__checkbox"
    />
    <EstateInfo :data="data" />
    <div class="estate-card__additional">
      <EstateStatus :text="data.status" class="estate-card__additional-status" />
      <img src="/img/picture/scheme.jpg" alt="scheme" class="estate-card__additional-img" />
      <p class="estate-card__additional-added">Добавлено {{ data.added }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.estate-card {
  position: relative;
  border: 0.1rem solid #e5e5e5;
  background: #ffffff;
  display: grid;
  grid-template-columns: min-content 1.2fr 1fr;
  gap: 3.5rem;
  padding: 2.5rem 3.5rem;
  @include ltMidDesktop {
    grid-template-columns: min-content auto auto;
    gap: 2.5rem;
  }
  @include ltDesktop {
    padding: 1.5rem;
  }
  @include ltBigTablet {
    grid-template-columns: auto;
    gap: 0.5rem;
  }
  @include ltPhone {
    grid-template-columns: auto auto;
    gap: 0.5rem;
  }
  @include ltSmallPhone {
    grid-template-columns: auto;
  }

  &__checkbox {
    @include ltBigTablet {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }

  &__additional {
    display: grid;
    &-status {
      margin-bottom: 2.7rem;
      justify-self: end;
      align-self: center;
      @include ltDesktop {
        margin-right: -1.5rem;
      }
      @include ltBigTablet {
        grid-row: 1/2;
        grid-column: 2/3;
      }
      @include ltPhone {
        grid-row: 1/2;
        grid-column: 1/2;
      }
      @include ltSmallPhone {
        grid-row: 1/2;
        grid-column: 2/3;
      }
    }
    &-img {
      margin-bottom: 1.5rem;
      justify-self: end;
      @include ltBigTablet {
        grid-row: 1/3;
        grid-column: 1/2;
        margin-bottom: 0;
      }
      @include ltPhone {
        grid-row: 2/3;
        grid-column: 1/2;
      }
      @include ltSmallPhone {
        grid-row: 1/3;
        grid-column: 1/2;
      }
    }
    &-added {
      justify-self: end;
      @include ltBigTablet {
        grid-row: 2/3;
        grid-column: 2/3;
      }
      @include ltPhone {
        grid-row: 3/4;
        grid-column: 1/2;
      }
      @include ltSmallPhone {
        grid-row: 2/3;
        grid-column: 2/3;
        text-align: end;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
