<script lang="ts" setup>
	import Header from "../components/SiteHeader.vue";
	import Footer from "../components/SiteFooter.vue";
</script>

<template>
	<v-app id="layout">
		<v-layout>
			<Header />
			<v-main>
				<slot />
			</v-main>
		</v-layout>
		<Footer />
	</v-app>
</template>
