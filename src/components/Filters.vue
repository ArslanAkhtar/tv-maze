<template>
	<v-row justify="center" align="center" class="mt-3">
		<v-col cols="12" sm="6" md="4" xl="2">
			<v-text-field
				outlined
				color="yellow"
				density="compact"
				@update:modelValue="
					(e) => {
						$emit('search-change', e);
					}
				"
				@clearable="false"
				variant="solo"
				label="Search Shows"
				append-inner-icon="mdi-magnify"
			></v-text-field>
		</v-col>
		<v-col cols="12" sm="6" md="4" xl="2">
			<v-select
				density="compact"
				color="yellow"
				:items="genreFilters"
				label="Genres"
				clearable
				clear-icon="mdi-close-circle"
				multiple
				variant="solo"
				@update:modelValue="
					(genres) => {
						$emit('genre-change', genres);
					}
				"
			></v-select>
		</v-col>
		<v-col cols="12" sm="6" md="4" xl="2">
			<v-select
				density="compact"
				color="yellow"
				clearable
				clear-icon="mdi-close-circle"
				:items="rating"
				label="Rating"
				variant="solo"
				@update:modelValue="
					(rating) => {
						$emit('rating-change', rating);
					}
				"
			></v-select>
		</v-col>
	</v-row>
</template>
<script lang="ts" setup>
	defineProps(["genreFilters"]);
	defineEmits(["search-change", "genre-change", "rating-change"]);
	const rating = Array(9)
		.fill(1)
		.map((item: number, index: number) => `${index + 1} +`);
</script>
