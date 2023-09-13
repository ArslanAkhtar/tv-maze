<script setup lang="ts">
	import { navigateToRoute } from "@/helpers/utility";
	import { RouteNavigation } from "@/helpers/enum";
</script>

<template>
	<v-app-bar app>
		<v-toolbar-title>
			<v-btn icon @click="navigateToRoute(RouteNavigation.Home)">
				<v-icon icon="mdi-home-floor-a" />
			</v-btn>
		</v-toolbar-title>
		<v-btn icon>
			<v-icon icon="$vuetify" />
		</v-btn>
	</v-app-bar>
</template>
