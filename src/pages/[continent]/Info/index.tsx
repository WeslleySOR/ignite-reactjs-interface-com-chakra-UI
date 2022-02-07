import { HStack, Text } from '@chakra-ui/react';

import { InfoCount } from './InfoCount';

interface InfoProps {
	description: string;
	countriesCount: number;
	languagesCount: number;
	citiesInTop100Count: number;
}

export function Info({
	description,
	countriesCount,
	languagesCount,
	citiesInTop100Count,
}: InfoProps) {
	return (
		<HStack spacing="70px" my="80px" align="center">
			<Text fontSize="2xl" color="gray.700" maxW="50%" textAlign="justify">
				{description}
			</Text>

			<HStack spacing="42px" w="100%" align="center" justify="center">
				<InfoCount count={countriesCount} label="países" />
				<InfoCount count={languagesCount} label="línguas" />
				<InfoCount count={citiesInTop100Count} label="cidades +100" />
			</HStack>
		</HStack>
	);
}
