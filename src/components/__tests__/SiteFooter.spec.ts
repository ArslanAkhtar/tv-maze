import { mount } from "@vue/test-utils";
import Footer from "../SiteFooter.vue";
import { describe, it, expect, vi } from "vitest";
import { vuetify } from "@/main";
describe("Footer Component", () => {
	const wrapper = mount(Footer, {
		global: {
			components: {
				Footer,
			},
		},
		plugins: [vuetify],
	});
	it("renders the copyright text", async () => {
		await wrapper.vm.$nextTick();

		const text = wrapper.text();
		expect(text === "2023 — Muhammad Arslan").toBe(true);
	});

	it("renders the social media icons", async () => {
		const icons = wrapper.findAll("v-btn");
		expect(icons.length).toBe(3); // Assuming there are 3 icons
	});

	it("opens external link when icon is clicked", async () => {
		const mockOpen = vi.fn();
		window.open = mockOpen;

		await wrapper.vm.$nextTick();

		const icon = wrapper.find("v-btn");
		await icon.trigger("click");

		expect(mockOpen).toHaveBeenCalledWith(
			"https://www.muhammadarslan.nl/#home",
			"_blank"
		);
	});
	test("renders correctly", () => {
		expect(wrapper.element).toMatchSnapshot();
	});
});
