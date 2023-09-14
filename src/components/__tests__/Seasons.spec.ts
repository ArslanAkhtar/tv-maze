import { describe, it, expect } from "vitest";
import useFetchShows from "@/composables/FetchData";
import Seasons from "../Seasons.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { vuetify } from "@/main";
import mockSeasons from "./mockData/mockSeason.json";
import Episodes from "../Episodes.vue";
import Loader from "../Loader.vue";

describe("Seasons Component", () => {
	const wrapper = mount(Seasons, {
		props: { seasons: mockSeasons },
		global: {
			components: {
				Episodes,
				Loader,
			},
		},
		plugins: [vuetify],
	});

	test("renders correctly", () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	it("renders props", () => {
		expect(wrapper.props().seasons).toMatchObject(mockSeasons);
	});
});
