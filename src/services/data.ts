interface Continent {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	slug: string;
	banner?: string;
	description?: string;
	countriesCount?: number;
	languagesCount?: number;
	citiesInTop100Count?: number;
	citiesInTop100?: Array<{
		city: string;
		country: string;
		image: string;
		countryFlag: string;
	}>;
}

const data = [
	{
		id: 'europa',
		title: 'Europa',
		subtitle: 'O continente mais antigo',
		image: '/europa.jpg',
		slug: 'europa',
		banner:
			'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
		description:
			'A Europa é, por convenção, um seis continentes do mundo. Compreendendo a península ocidental da Eurásia, geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
		countriesCount: 50,
		languagesCount: 60,
		citiesInTop100Count: 27,
		citiesInTop100: [
			{
				city: 'Londres',
				country: 'Reino Unido',
				image:
					'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
				countryFlag: '/united-kingdom.png',
			},
			{
				city: 'Paris',
				country: 'França',
				image:
					'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80',
				countryFlag: '/france.png',
			},
			{
				city: 'Roma',
				country: 'Itália',
				image:
					'https://images.unsplash.com/photo-1610529028227-18045bd9960f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
				countryFlag: '/italy.png',
			},
			{
				city: 'Praga',
				country: 'República Tcheca',
				image:
					'https://images.unsplash.com/photo-1458150945447-7fb764c11a92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
				countryFlag: '/czech-republic.png',
			},
			{
				city: 'Amsterdã',
				country: 'Países Baixos',
				image:
					'https://images.unsplash.com/photo-1536880756060-98a6a140f0a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
				countryFlag: '/netherlands',
			},
		],
	},
	{
		id: 'asia',
		title: 'Ásia',
		subtitle: 'O maior continente',
		image: '/asia.jfif',
		slug: 'asia',
	},
	{
		id: 'south',
		title: 'América do Sul',
		subtitle: 'A maior biodiversidade',
		image: '/south-america.jfif',
		slug: 'south-america',
	},
	{
		id: 'north',
		title: 'América do Norte',
		subtitle: 'O continente mais diverso',
		image: '/north-america.jfif',
		slug: 'north-america',
	},
	{
		id: 'africa',
		title: 'África',
		subtitle: 'A maior diversidade étnica',
		image: '/africa.jfif',
		slug: 'africa',
	},
	{
		id: 'oceania',
		title: 'Oceania',
		subtitle: 'O continente mais isolado',
		image: '/oceania.jfif',
		slug: 'oceania',
	},
];

export function getContinents(query: Partial<Continent> = {}): Continent[] {
	const filteredData = data.filter((continent) => {
		return Object.keys(query).every((key) => query[key] === continent[key]);
	});

	return filteredData;
}
