<template>
	<v-footer class="text-center d-flex flex-column">
		<div>
			<v-btn
				v-for="icon in icons"
				:key="icon.name"
				class="mx-4"
				:icon="icon.name"
				@click="openExternalLink(icon.link)"
				variant="text"
			></v-btn>
		</div>

		<v-divider></v-divider>

		<div class="copyright">
			{{ new Date().getFullYear() }} — <strong>Muhammad Arslan</strong>
		</div>
	</v-footer>
</template>

<script setup lang="ts">
	const icons = [
		{
			name: "mdi-web",
			link: "https://www.muhammadarslan.nl/#home",
		},
		{
			name: "mdi-linkedin",
			link: "https://www.linkedin.com/in/arslan-akhtar",
		},
		{
			name: "mdi-github",
			link: "https://github.com/ArslanAkhtar",
		},
	];

	const openExternalLink = (url: string) => {
		window.open(url, "_blank");
	};
</script>
