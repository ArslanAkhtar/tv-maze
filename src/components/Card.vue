<script setup lang="ts">
import { router } from '@/router'
import type { Show } from '@/helpers/types'
const props = defineProps<{
  item?: Show
}>()

const year = props.item?.premiered?.split('-')[0] || ''
const openDetails = (id: number | undefined) => {
  router.push({
    name: 'show',
    params: { id }
  })
}
</script>

<template>
  <v-card class="mx-auto rounded-lg movie-card">
    <v-img
      @click="() => openDetails(item?.id)"
      class="align-end text-white"
      :src="item?.image?.medium"
      cover
    />
    <div class="rating" v-if="item?.rating.average">
      <v-icon size="small" icon="mdi-star"></v-icon> {{ item?.rating.average }}
    </div>
    <v-card-title class="text-sm card-title"
      >{{ item?.name }} {{ year ? '( ' + year + ' )' : '' }}</v-card-title
    >
    <div class="genre mx-3 mb-3">
      <v-chip
        v-for="genre in item?.genres"
        :key="genre"
        class="ma-1"
        text-color="white"
        size="small"
      >
        {{ genre }}
      </v-chip>
    </div>
  </v-card>
</template>

<style scoped>
.movie-card {
  position: relative;
  transition: 0.1s all ease-in-out;
  height: 500px;
}
@media (max-width: 1280px) {
  .movie-card {
    height: 400px;
  }
}
@media (max-width: 960px) {
  .movie-card {
    height: unset !important;
  }
}
/* .movie-card :hover {
  transform: scale(0.5);
} */
.movie-card .rating {
  position: absolute;
  border-radius: 8px;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  padding: 6px 12px;
  color: goldenrod;
  display: flex;
  align-items: center;
  gap: 5px;
}
.movie-card .v-img {
  cursor: pointer;
}
.movie-card .v-card-title {
  font-size: 18px !important;
}
</style>
