<script setup lang="ts">
import { computed, ref } from 'vue'
import { filterItems } from '@/helpers/filter'
import TheInput from '@/components/common/TheInput.vue'
import EstateCard from '@/components/estate/EstateCard.vue'
import type { IData } from '@/types/estate'
import { estateData } from '@/assets/data/estate'
import TheButton from '@/components/common/TheButton.vue'
import { keysToSearch } from '@/assets/content/estate'
import TheCheckbox from '@/components/common/TheCheckbox.vue'

const data = ref(estateData)

const searchQuery = ref('')
const filteredItems = computed(() =>
  filterItems(data.value, searchQuery.value, keysToSearch as (keyof IData)[])
)

const selectedAll = ref(false)
const selectedList = ref([])

const selectCheck = (id) => {
  const index = selectedList.value.indexOf(id)
  if (index === -1) {
    selectedList.value.push(id)
  } else {
    selectedList.value.splice(index, 1)
  }
}
const handlerSelectedAll = () => {
  selectedList.value = []
  if (!selectedAll.value) data.value.forEach((item) => selectedList.value.push(item.id))
}

const deleteSelectedItems = () => {
  data.value = data.value.filter((item) => !selectedList.value.includes(item.id))
  selectedList.value = []
}
</script>

<template>
  <section class="estate-section">
    <TheInput
      icon="/img/icons/search.svg"
      placeholder="Введите ЖК / корпус / № квартиры / № паркинга"
      type="search"
      v-model="searchQuery"
      class="estate-section__field"
    />
    <div class="estate-section__tools">
      <TheCheckbox text="Все" v-model="selectedAll" @click="handlerSelectedAll" />
      <TheButton
        text="Удалить"
        icon="/img/icons/delete.svg"
        icon-side="right"
        class="estate-section__tools-button"
        @click="deleteSelectedItems"
      />
    </div>
    <div class="estate-section__list">
      <EstateCard
        v-for="item in filteredItems"
        :key="item.id"
        class="card"
        :data="item as IData"
        :selectedList="selectedList"
        @checkbox="selectCheck"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.estate-section {
  margin-top: 3rem;
  &__field {
    margin-bottom: 2.9rem;
    @include ltPhone {
      margin-bottom: 1.5rem;
    }
  }
  &__tools {
    display: flex;
    align-items: center;
    margin-bottom: 3.6rem;
    @include ltPhone {
      margin-bottom: 2rem;
    }

    &-button {
      margin-left: 1.3rem;
      padding: 0.9rem 1.3rem;
      border-radius: 0;
      background: #e5e5e5;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    @include ltSmallTablet {
      gap: 1rem;
    }
    @include ltPhone {
      grid-template-columns: auto;
    }
  }
}
</style>
