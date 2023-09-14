<script setup lang="ts">
	defineProps({
		text: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="no-data-found">
		<img alt="Vue logo" class="logo" src="@/assets/no-data.svg" width="320" />
		<div class="text-h4 font-weight-bold">{{ text }}</div>
	</div>
</template>
