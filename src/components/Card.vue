<script setup lang="ts">
	import type { Show } from "@/helpers/types";
	import { loadingImagePlaceholder } from "@/helpers/constants";
	import {
		imgURL,
		getYear,
		formateTitle,
		navigateToRoute,
	} from "@/helpers/utility";
	import { RouteNavigation } from "@/helpers/enum";

	defineProps<{
		item?: Show;
	}>();
</script>

<template>
	<v-card class="mx-auto rounded-lg movie-card">
		<v-img
			@click="
				() => navigateToRoute(RouteNavigation.ShowDetails, { id: item?.id })
			"
			class="align-end text-white"
			:src="imgURL(item?.image?.original)"
			:lazy-src="loadingImagePlaceholder"
			cover
		/>
		<div class="rating" v-if="item?.rating.average">
			<v-icon size="small" icon="mdi-star" />
			{{ item?.rating.average }}
		</div>
		<v-card-title class="text-sm card-title">{{
			formateTitle(item?.name, getYear(item?.premiered))
		}}</v-card-title>
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
