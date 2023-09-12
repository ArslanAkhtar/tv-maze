<script setup lang="ts">
	import useFetchShows from "@/composables/FetchData";
	import Loader from "@/components/Loader.vue";
	import { defaultImage } from "@/helpers/constants";

	const props = defineProps({
		id: {
			type: Number,
			required: true,
		},
	});

	const { loadShowEpisodes } = useFetchShows();

	const { data: episodes } = loadShowEpisodes(props.id);

	const openURL = (url: string) => {
		window.open(url, "_blank");
	};
</script>
<template>
	<v-list :height="300">
		<v-list-item
			v-if="episodes"
			v-for="(episode, i) in episodes"
			:key="i"
			@click="() => openURL(episode.url)"
			:prepend-avatar="episode.image?.medium || defaultImage"
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
		<Loader v-else />
	</v-list>
</template>
