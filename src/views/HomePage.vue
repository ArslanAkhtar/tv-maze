<script lang="ts" setup>
	import Card from "../components/Card.vue";
	import useFilteredShows from "../composables/Filters";
	import { onMounted, onUnmounted } from "vue";
	import Filters from "@/components/Filters.vue";
	import { useIntersectionObserver } from "@vueuse/core";
	import { ref } from "vue";
	import Loader from "@/components/Loader.vue";
	const {
		fetchedShows,
		shows,
		query,
		genreFilters,
		selectedRating,
		selectedGenres,
	} = useFilteredShows();

	const paginationCount = ref(0);
	const showCount = 16;
	const target = ref(null);
	const { stop } = useIntersectionObserver(target, () => {
		paginationCount.value = paginationCount.value + 1;
	});

	onMounted(async () => {
		await fetchedShows();
	});

	onUnmounted(() => {
		stop();
	});
</script>

<template>
	<v-container>
		<Filters
			:genre-filters="genreFilters"
			@search-change="
				(text) => {
					query = text;
				}
			"
			@genre-change="
				(genres: string[]) => {
					selectedGenres = genres;
				}
			"
			@rating-change="
				(rating: string) => {
					selectedRating = rating;
				}
			"
		/>
		<Loader v-if="!shows" />
		<v-row>
			<v-col
				v-if="shows && shows.length > 0"
				v-for="show in shows.slice(0, paginationCount * showCount)"
				:key="show?.id"
				cols="12"
				sm="6"
				md="3"
				xl="2"
			>
				<Card :item="show" />
			</v-col>
		</v-row>
		<v-alert
			v-if="shows !== null && shows.length === 0"
			density="compact"
			type="warning"
			icon="mdi-alert"
			title="No Shows Found."
		></v-alert>
	</v-container>
	<div ref="target" v-if="shows && shows.length > 0"></div>
</template>

<style scoped></style>
