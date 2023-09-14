<script setup lang="ts">
	import useFetchShows from "@/composables/FetchData";
	import Seasons from "@/components/Seasons.vue";
	import { useRoute } from "vue-router";
	import { computed } from "vue";
	import Loader from "@/components/Loader.vue";
	import DOMPurify from "dompurify";

	const { showDetails, loadShowSeasons } = useFetchShows();

	const route = useRoute();
	const id = parseInt(route.params.id.toString());

	const { data: show, isFinished } = showDetails(id);

	const { data: seasons, error: errorFetchingSeasons } = loadShowSeasons(id);

	const backgroundImageStyle = computed(
		() =>
			`linear-gradient(to right, black 60%, transparent 110%), url('${show?.value?.image?.original}')`
	);
</script>
<template>
	<div class="wrapper">
		<v-container v-if="isFinished" class="container">
			<v-row>
				<v-col cols="12" md="4">
					<v-img :src="show?.image?.medium" aspect-ratio="1"></v-img>
				</v-col>
				<v-col cols="12" md="8">
					<div class="text-h4 font-weight-bold">{{ show.name }}</div>
					<div
						class="text-p"
						v-html="DOMPurify.sanitize(show.summary || '')"
					></div>
					<div class="show-detail">
						<div class="text-h6 font-weight-bold">Genre:</div>
						<div class="text-p">
							<v-chip
								class="ma-2"
								label
								v-for="genre in show?.genres"
								:key="genre"
							>
								{{ genre }}
							</v-chip>
						</div>
					</div>
					<div class="show-detail" v-if="show.rating.average">
						<div class="text-h6 font-weight-bold">Rating:</div>
						<div class="text-p font-weight-bold">
							{{ show?.rating?.average }}
						</div>
					</div>
					<div class="show-detail" v-if="show.language">
						<div class="text-h6 font-weight-bold">Language:</div>
						<div class="text-p font-weight-bold">{{ show?.language }}</div>
					</div>
					<div class="show-detail" v-if="show.premiered">
						<div class="text-h6 font-weight-bold">Premiered:</div>
						<div class="text-p font-weight-bold">{{ show?.premiered }}</div>
					</div>
					<div class="show-detail" v-if="show.status">
						<div class="text-h6 font-weight-bold">Status:</div>
						<div class="text-p font-weight-bold">{{ show?.status }}</div>
					</div>
					<Seasons :seasons="seasons" v-if="seasons" />
				</v-col>
			</v-row>
		</v-container>
		<Loader v-else />
	</div>
</template>

<style scoped>
	.wrapper {
		background-image: v-bind(backgroundImageStyle);
		background-size: initial;
		min-height: 100vh;
		background-position: top right;
	}
	.container {
		padding: 40px;
	}
</style>
