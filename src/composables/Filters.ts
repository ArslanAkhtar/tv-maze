import type { Show } from "@/helpers/types";
import useFetchShows from "../composables/FetchData";
import { ref, watch, onUnmounted } from "vue";
import { filterShows } from "@/helpers/utility";

const useFilteredShows = () => {
	const { loadShows, searchShows } = useFetchShows();

	const shows = ref<Show[] | null>(null);
	const query = ref("");
	const selectedGenres = ref<string[]>([]);
	const selectedRating = ref<string>();
	const genreFilters = ref<string[]>([]);
	let allShowsOnInitialLoad: Show[] = [];
	let timerId: ReturnType<typeof setTimeout> | null = null;

	watch([query, selectedGenres, selectedRating], (val) => {
		fetchedShows();
	});

	const filterShowsOnParams = (showArray: Show[], filterGenres?: boolean) => {
		const filteredShows = filterShows(
			[...selectedGenres.value],
			selectedRating.value,
			showArray
		);
		if (filterGenres) {
			let genres = filteredShows.map((item: Show) => [...item.genres]);
			let uniqueGenres = [...new Set(genres.flat(2))] as string[];
			genreFilters.value = uniqueGenres;
		}
		shows.value = filteredShows;
	};

	const showsCB = async () => {
		let temp = [];
		if (!query.value.length) {
			// to prevent calling shows api again once fetched
			if (allShowsOnInitialLoad.length) {
				temp = [...allShowsOnInitialLoad];
			} else {
				const { data } = await loadShows();
				allShowsOnInitialLoad = [...data.value];
				temp = [...data.value];
			}
		} else {
			const { data } = await searchShows(query.value);
			const extractShows = data?.value?.map(
				(item: { score: number; show: Show }) => item.show
			);
			temp = extractShows;
		}
		filterShowsOnParams(temp, true);
	};

	const fetchedShows = async () => {
		try {
			if (timerId) {
				clearTimeout(timerId);
			}
			timerId = setTimeout(showsCB, 500);
		} catch (error) {
			console.error("Error fetching shows:", error);
		}
	};

	onUnmounted(() => {
		if (timerId) {
			clearTimeout(timerId);
		}
	});

	return {
		shows,
		query,
		genreFilters,
		selectedGenres,
		selectedRating,
		fetchedShows,
	};
};

export default useFilteredShows;
