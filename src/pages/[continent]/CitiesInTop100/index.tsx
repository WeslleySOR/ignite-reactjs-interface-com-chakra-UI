import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import { CityCard } from './CityCard';

interface City {
	city: string;
	country: string;
	image: string;
	countryFlag: string;
}

interface CitiesInTop100Props {
	cities: Array<City>;
}

export function CitiesInTop100({ cities }: CitiesInTop100Props) {
	return (
		<Box mb="35px">
			<Text fontSize="4xl" color="gray.700" fontWeight="medium" display="block">
				Cidades +100
			</Text>

			<SimpleGrid mt="40px" columns={4} spacing={45}>
				{cities.map((city) => (
					<CityCard key={city.city} city={city} />
				))}
			</SimpleGrid>
		</Box>
	);
}
