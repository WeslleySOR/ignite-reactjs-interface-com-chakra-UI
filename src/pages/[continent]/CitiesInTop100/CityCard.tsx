import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface CityCardProps {
	city: {
		city: string;
		country: string;
		image: string;
		countryFlag: string;
	};
}

export function CityCard({ city }: CityCardProps) {
	return (
		<Flex
			w="256px"
			h="280px"
			overflow="hidden"
			borderRadius="4px"
			justify="stretch"
			flexDir="column"
		>
			<Box h="173px" position="relative">
				<Image src={city.image} layout="fill" objectFit="cover" alt={city.city} />
			</Box>

			<Flex
				h="100%"
				flex="1"
				flexdirection="row"
				align="center"
				justify="space-between"
				px="24px"
				borderBottomRadius="4px"
				borderColor="yellow.transparent"
				borderWidth={1}
				borderTop="none"
				fontFamily="Barlow"
			>
				<Box>
					<Text fontWeight="semibold" fontSize="xl" color="gray.700">
						{city.city}
					</Text>
					<Text mt="12px" fontWeight="medium" fontSize="md" color="gray.400">
						{city.country}
					</Text>
				</Box>

				<Box borderRadius="full" w={30} h={30} position="relative">
					<Image
						src={city.countryFlag}
						layout="fill"
						objectFit="cover"
						alt={city.country}
					/>
				</Box>
			</Flex>
		</Flex>
	);
}
