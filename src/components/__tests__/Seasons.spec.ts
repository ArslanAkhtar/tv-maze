import { describe, it, expect } from "vitest";
import useFetchShows from "@/composables/FetchData";
import Seasons from "../Seasons.vue";
import { mount } from "@vue/test-utils";
import { vuetify } from "@/main";
import expectedAPIResponse from "./mockData/mockSeason.json";
import Episodes from "../Episodes.vue";
import Loader from "../Loader.vue";

describe("Seasons Component", () => {
	const id = 1;
	const wrapper = mount(Seasons, {
		props: { id: id },
		global: {
			components: {
				Episodes,
				Loader,
			},
		},
		plugins: [vuetify],
	});
	it("matches data from api based on id prop", async () => {
		const { loadShowSeasons } = useFetchShows();
		const { data } = await loadShowSeasons(wrapper.props().id);
		expect(data.value[id]).toMatchObject(expectedAPIResponse);
	});
});
