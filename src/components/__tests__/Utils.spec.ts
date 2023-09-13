import { defaultImage } from "@/helpers/constants";
import type { Show } from "@/helpers/types";
import { RouteNavigation } from "@/helpers/enum";
import {
	filterShows,
	imgURL,
	getYear,
	formateTitle,
	navigateToRoute,
} from "@/helpers/utility";
import { describe, it, expect, vi } from "vitest";
import { router } from "@/router";
describe("Utils", () => {
	describe("filterShows", () => {
		const data = [
			{ rating: { average: 8 }, genres: ["Drama"] },
			{ rating: { average: 7 }, genres: ["Comedy"] },
			{ rating: { average: 9 }, genres: ["Action"] },
		] as Show[];

		it("should filter shows by rating", () => {
			const genres: string[] = [];
			const rating = "8+";

			const result = filterShows(genres, rating, data);

			expect(result.length).toBe(2);
		});

		it("should filter shows by genres", () => {
			const genres = ["Drama"];
			const rating = "";

			const result = filterShows(genres, rating, data);

			expect(result.length).toBe(1);
		});

		it("should filter shows by both genres and rating", () => {
			const genres = ["Drama"];
			const rating = "8+";

			const result = filterShows(genres, rating, data);

			expect(result.length).toBe(1);
		});

		it("should return all shows if no filters applied", () => {
			const genres: string[] = [];
			const rating = "";

			const result = filterShows(genres, rating, data);

			expect(result.length).toBe(3);
		});
	});

	describe("imgURL", () => {
		it("should return the provided URL", () => {
			const url = "https://example.com/image.jpg";

			const result = imgURL(url);

			expect(result).toBe(url);
		});

		it("should return the default image if URL is undefined", () => {
			const url = undefined;

			const result = imgURL(url);

			expect(result).toBe(defaultImage);
		});
	});

	describe("getYear", () => {
		it("should return the year from a valid date string", () => {
			const date = "2023-09-13";

			const result = getYear(date);

			expect(result).toBe("2023");
		});

		it("should return undefined for an undefined date string", () => {
			const date = undefined;

			const result = getYear(date);

			expect(result).toBeUndefined();
		});
	});

	describe("formateTitle", () => {
		it("should format title with year", () => {
			const title = "Sample Show";
			const year = "2023";

			const result = formateTitle(title, year);

			expect(result).toBe("Sample Show (2023)");
		});

		it("should handle undefined title and year", () => {
			const title = undefined;
			const year = undefined;

			const result = formateTitle(title, year);

			expect(result).toBe("undefined (undefined)");
		});
	});

	// // Mock the router object for testing
	const mockRouter = {
		push: vi.fn().mockResolvedValue(null),
	};

	// Mock the createRouter function
	vi.mock("./path-to-createRouter-file", () => ({
		createRouter: () => mockRouter,
	}));

	describe("navigateToRoute", () => {
		it("navigates to a route correctly", async () => {
			const params = { id: "1" };

			await navigateToRoute(RouteNavigation.ShowDetails, params);
			expect(router.currentRoute.value.name).toEqual(
				RouteNavigation.ShowDetails
			);
		});
	});
});
