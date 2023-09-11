<script setup lang="ts">
	import useFetchShows from "@/composables/FetchData";
	import Loader from "@/components/Loader.vue";

	const props = defineProps({
		id: {
			type: Number,
			required: true,
		},
	});

	const { loadShowEpisodes } = useFetchShows();

	const { data: episodes, isFinished } = loadShowEpisodes(props.id);

	const openURL = (url: string) => {
		window.open(url, "_blank");
	};
</script>
<template>
	<v-list v-if="isFinished">
		<v-list-item
			v-for="(episode, i) in episodes"
			:key="i"
			@click="() => openURL(episode.url)"
			:prepend-avatar="episode.image?.medium"
			:title="episode.name"
			:subtitle="'Episode ' + episode.number"
			class="pa-5"
		>
			<template v-slot:append>
				<v-icon>mdi-play</v-icon>
			</template>
		</v-list-item>
	</v-list>
	<Loader v-else />
</template>
