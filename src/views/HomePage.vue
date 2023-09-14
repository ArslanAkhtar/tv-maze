<script lang="ts" setup>
	import Card from "../components/Card.vue";
	import useFilteredShows from "../composables/Filters";
	import { onMounted, onUnmounted } from "vue";
	import Filters from "@/components/Filters.vue";
	import Loader from "@/components/Loader.vue";
	import LoadMore from "@/components/LoadMore.vue";
	import NoData from "@/components/NoData.vue";
	import useInfiniteScroll from "@/composables/InfiniteScroll";
	import { ErrorMessages } from "@/helpers/enum";
	const {
		fetchedShows,
		shows,
		query,
		genreFilters,
		selectedRating,
		selectedGenres,
	} = useFilteredShows();

	const { target, displayCount, stop } = useInfiniteScroll();

	onMounted(async () => {
		try {
			await fetchedShows();
		} catch (error) {
			console.error("Error fetching shows:", error);
		}
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
				v-for="show in shows.slice(0, displayCount)"
				:key="show?.id"
				cols="12"
				sm="6"
				md="3"
				xl="2"
			>
				<Card :item="show" />
			</v-col>
		</v-row>
		<NoData
			v-if="shows !== null && shows.length === 0"
			:text="ErrorMessages.NoData"
		/>
	</v-container>
	<LoadMore
		ref="target"
		v-if="shows && shows.length > 0 && displayCount < shows.length"
	/>
</template>
