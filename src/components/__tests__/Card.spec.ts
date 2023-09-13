import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "../Card.vue";
import { vuetify } from "@/main";
import mockShow from "./mockData/mockShow.json";
import { router } from "@/router";
import { defaultImage } from "@/helpers/constants";

import type { ExtVueWrapper } from "@/helpers/types";

describe("Card Component", () => {
	const wrapper = mount(Card, {
		global: {
			components: {
				Card,
			},
		},
		plugins: [vuetify, router],
		props: { item: mockShow },
	});
	it("renders props", () => {
		expect(wrapper.props().item).toMatchObject(mockShow);
	});

	it("renders show name", () => {
		expect(wrapper.html().includes(mockShow.name)).toBe(true);
	});

	it("renders show genre", () => {
		expect(wrapper.html().includes(mockShow.genres[0])).toBe(true);
	});

	test("renders correctly", () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	// test("openDetails navigates to the correct route", async () => {
	// 	const id = 1;
	// 	const res = wrapper.vm as unknown as ExtVueWrapper;
	// 	await res.openDetails(id);
	// 	expect(router.currentRoute.value.name).toBe("show");
	// 	expect(router.currentRoute.value.params).toEqual({ id: "1" });
	// });
	// test("openDetails return if id is undefined", () => {
	// 	const id = undefined;
	// 	const res = wrapper.vm as unknown as ExtVueWrapper;
	// 	expect(res.openDetails(id)).toEqual(null);
	// });

	it("returns the input URL if provided", () => {
		const inputURL = "https://example.com/image.jpg";

		const res = wrapper.vm as unknown as ExtVueWrapper;

		const result = res.imgURL(inputURL);

		expect(result).toBe(inputURL);
	});

	it("returns default image if input URL is undefined", () => {
		const inputURL = undefined;

		const res = wrapper.vm as unknown as ExtVueWrapper;

		const result = res.imgURL(inputURL);

		expect(result).toBe(defaultImage);
	});

	it("returns year from premiered date", async () => {
		const res = (await wrapper.vm) as unknown as ExtVueWrapper;

		const result = res.getYear(mockShow.premiered);

		expect(result).toBe("2012");
	});

	it("year has premiere year if premiere date is available", () => {
		wrapper.vm.$nextTick().then(() => {
			expect(wrapper.html().includes("2012")).toBe(true);
		});
	});
	it("show has rating", () => {
		wrapper.vm.$nextTick().then(() => {
			expect(wrapper.html()).includes(
				`<v-icon data-v-c6c3362a="" size="small" icon="mdi-star"></v-icon> ${mockShow.rating.average}`
			);
		});
	});
});
