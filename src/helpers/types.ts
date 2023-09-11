export interface Show {
	id: number;
	url: string;
	name: string;
	type: string;
	language: string;
	genres: string[];
	status: string;
	runtime: number;
	averageRuntime: number;
	premiered: string;
	ended: string;
	officialSite: string;
	summary: string | HTMLElement;
	rating: {
		average: number;
	};
	image: {
		medium: string;
		original: string;
	};
}

export interface Season {
	id: number;
	url: string;
	number: number;
	name: string;
	episodeOrder: number;
	premiereDate: string;
	endDate: string;
	network: {
		id: number;
		name: string;
		country: {
			name: string;
			code: string;
			timezone: string;
		};
	};
	webChannel: null;
	image: {
		medium: string;
		original: string;
	};
	summary: string | HTMLElement;
	episodes: Episode[];
}

export interface Episode {
	id: number;
	url: string;
	name: string;
	season: number;
	number: number;
	type: string;
	airdate: string;
	airtime: string;
	airstamp: string;
	runtime: number;
	rating: {
		average: number;
	};
	image: {
		medium: string;
		original: string;
	};
	summary: string | HTMLElement;
}
