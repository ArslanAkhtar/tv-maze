import { describe, it, expect } from "vitest";
import useFetchShows from "@/composables/FetchData";
import Seasons from "../Seasons.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { vuetify } from "@/main";
import expectedAPIResponse from "./mockData/mockSeason.json";

describe("Seasons Component", () => {
	it("matches data from api based on id prop", async () => {
		const id = 1;
		const { loadShowSeasons } = useFetchShows();
		const wrapper = mount(Seasons, {
			props: { id: id },
			global: {
				plugins: [vuetify],
			},
		});
		const { data } = await loadShowSeasons(wrapper.props().id);
		expect(data.value[id]).toMatchObject(expectedAPIResponse);
	});

	test("renders correctly", () => {
		const wrapper = shallowMount(Seasons);
		expect(wrapper.element).toMatchSnapshot();
	});
});
