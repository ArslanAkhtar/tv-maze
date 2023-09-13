import { defaultImage } from "./constants";
import type { Show } from "./types";
import { router } from "@/router";

export function filterShows(
	genres: string[],
	rating: string | undefined,
	data: Show[]
) {
	let temp = [...data];
	if (rating) {
		const numberRating = Number(rating.replace("+", "").trim());
		temp = temp.filter((item: Show) => item.rating.average >= numberRating);
	}
	if (genres.length) {
		temp = temp.filter((item: Show) =>
			item.genres.some((item: string) => genres.includes(item))
		);
	}
	return temp;
}

export const imgURL = (url: string | undefined) => url || defaultImage;

export const getYear = (date: string | undefined) =>
	date ? new Date(date).getFullYear().toString() : undefined;

export const formateTitle = (
	title: string | undefined,
	year: string | undefined
) => `${title} (${year})`;

export const openExternalURL = (url: string) => window.open(url, "_blank");

export const navigateToRoute = (routeName: string, params = {}) => {
	const route = { name: routeName, params };
	return router.push(route);
};
