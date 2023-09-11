<script setup lang="ts">
import useFetchShows from '@/composables/FetchData'
import Episodes from '@/components/Episodes.vue'
import Loader from '@/components/Loader.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const { loadShowSeasons } = useFetchShows()

const { data: seasons, isFinished } = loadShowSeasons(props.id)
</script>

<template>
  <div class="seasons" v-if="isFinished">
    <div class="text-h5 mb-5 font-weight-bold">Seasons:</div>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="season in seasons"
        :key="season.id"
        :title="'Season ' + season.number"
        expand-icon="mdi-chevron-down"
        collapse-icon="mdi-chevron-up"
      >
        <v-expansion-panel-text>
          <Episodes :id="season.id" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <Loader v-else />
</template>
