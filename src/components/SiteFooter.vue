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

		<div class="pt-0">
			I'm Muhammad Arslan, and I am an experienced full-stack developer with
			over 8+ years of expertise in the field. I am proficient in front-end
			technologies such as React, Svelte, Vue.js, and the upcoming Nuxt.js 3, I
			create captivating and responsive user interfaces. On the back-end, I
			excel in serverless architecture, Node.js, and Express.js, which makes me
			develop scalable and efficient server-side solutions. I have a vast
			experience working on projects with global clients and diverse teams with
			a one-team model following agile methodologies like Sprint planning and
			Scrum which includes various tools e.g. Jira, Kanban model, Trello, Slack,
			Teams, Git versioning, and CI/CD pipelines. With a commitment to write
			clean code and a passion for continuous learning, I am dedicated to
			deliver high-quality software solutions. I believe in collaborative and
			detail-oriented team environment, I thrive to take on new challenges and
			exceeding client expectations. Connect with Me today to bring your project
			to life with my expertise.
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
