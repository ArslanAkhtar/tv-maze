import { describe, it, expect } from "vitest";
import useFetchShows from "@/composables/FetchData";
import Episodes from "../Episodes.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { vuetify } from "@/main";
import expectedAPIResponse from "./mockData/mockEpisode.json";

describe("Episodes Component", () => {
	it("matches data from api based on id prop", async () => {
		const id = 1;
		const { loadShowEpisodes } = useFetchShows();
		const wrapper = mount(Episodes, {
			props: { id: id },
			global: {
				plugins: [vuetify],
			},
		});
		const { data } = await loadShowEpisodes(wrapper.props().id);
		expect(data.value[0]).toMatchObject(expectedAPIResponse);
	});

	test("renders correctly", () => {
		const wrapper = shallowMount(Episodes);
		expect(wrapper.element).toMatchSnapshot();
	});
});
