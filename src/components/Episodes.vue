<script setup lang="ts">
	import useFetchShows from "@/composables/FetchData";
	import Loader from "@/components/Loader.vue";
	import { imgURL, openExternalURL } from "@/helpers/utility";
	import Error from "@/components/Error.vue";

	const props = defineProps({
		id: {
			type: Number,
			required: true,
		},
	});

	const { loadShowEpisodes } = useFetchShows();
	const {
		data: episodes,
		isFetching,
		error: ErrorText,
	} = loadShowEpisodes(props.id);
</script>
<template>
	<v-list :height="300">
		<v-list-item
			v-if="episodes"
			v-for="(episode, i) in episodes"
			:key="i"
			@click="() => openExternalURL(episode.url)"
			:prepend-avatar="imgURL(episode.image?.medium)"
			class="pa-5"
			elevation="1"
		>
			<template v-if="episode.name" v-slot:title>
				{{ episode.name }}
			</template>
			<template v-if="episode.number" v-slot:subtitle>
				Episode {{ episode.number }}
			</template>
			<template v-slot:append>
				<v-icon>mdi-play</v-icon>
			</template>
		</v-list-item>
		<Loader v-else-if="isFetching" />
		<div class="d-flex justify-center align-center" style="height: 100%" v-else>
			<Error :text="ErrorText" />
		</div>
	</v-list>
</template>
