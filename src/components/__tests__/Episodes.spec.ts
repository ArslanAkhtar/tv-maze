import { describe, it, expect, vi } from "vitest";
import useFetchShows from "@/composables/FetchData";
import Episodes from "../Episodes.vue";
import { mount } from "@vue/test-utils";
import { vuetify } from "@/main";
import expectedAPIResponse from "./mockData/mockEpisode.json";
import type { ExtVueWrapper } from "@/helpers/types";

describe("Episodes Component", () => {
	const id = 1;
	const wrapper = mount(Episodes, {
		props: { id: id },
		global: {
			components: {
				Episodes,
			},
		},
		plugins: [vuetify],
	});
	it("matches data from api based on id prop", async () => {
		const { loadShowEpisodes } = useFetchShows();
		const { data } = await loadShowEpisodes(wrapper.props().id);
		expect(data.value[0]).toMatchObject(expectedAPIResponse);
	});

	test("renders correctly", () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	it("opens URL in a new tab", async () => {
		const url = "https://example.com";
		vi.spyOn(window, "open");
		const res = wrapper.vm as unknown as ExtVueWrapper;
		await res.openURL(url);
		expect(window.open).toHaveBeenCalledWith(url, "_blank");
	});

	it("returns the input URL if provided", () => {
		const inputURL = "https://example.com/image.jpg";

		const res = wrapper.vm as unknown as ExtVueWrapper;

		const result = res.imgURL(inputURL);

		expect(result).toBe(inputURL);
	});
});
