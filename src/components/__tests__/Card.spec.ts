import { describe, it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Card from "../Card.vue";
import { vuetify } from "@/main";
import * as components from "vuetify/components";
import mockShow from "./mockData/mockShow.json";
import { router } from "@/router";

describe("Card Component", () => {
	it("renders props", () => {
		const wrapper = mount(Card, { props: { item: mockShow } });
		expect(wrapper.props().item).toMatchObject(mockShow);
	});

	it("renders show name", () => {
		const wrapper = mount(Card, {
			global: {
				plugins: [vuetify],
			},
			props: { item: mockShow },
		});
		expect(wrapper.html().includes(mockShow.name)).toBe(true);
	});

	it("renders show genre", () => {
		const wrapper = mount(Card, {
			global: {
				plugins: [vuetify],
			},
			props: { item: mockShow },
			components: components,
		});
		expect(wrapper.html().includes(mockShow.genres[0])).toBe(true);
	});

	test("renders correctly", () => {
		const wrapper = shallowMount(Card);
		expect(wrapper.element).toMatchSnapshot();
	});

	test("openDetails navigates to the correct route", async () => {
		const wrapper = mount(Card, {
			global: {
				plugins: [router],
			},
		});
		const id = 1;
		await wrapper.vm.openDetails(id);
		expect(router.currentRoute.value.name).toBe("show");
		expect(router.currentRoute.value.params).toEqual({ id: "1" });
	});
	test("openDetails return if id is undefined", async () => {
		const wrapper = mount(Card, {
			global: {
				plugins: [router],
			},
		});
		const id = undefined;
		const res = await wrapper.vm.openDetails(id);
		expect(res).toEqual(null);
	});
});
