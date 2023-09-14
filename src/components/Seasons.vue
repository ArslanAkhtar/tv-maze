<script setup lang="ts">
	import Episodes from "@/components/Episodes.vue";
	import type { Season } from "@/helpers/types";
	import type { PropType } from "vue";

	defineProps({
		seasons: {
			type: Array as PropType<Season[]>,
			required: true,
		},
	});
</script>

<template>
	<div class="seasons" v-if="seasons">
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
</template>
