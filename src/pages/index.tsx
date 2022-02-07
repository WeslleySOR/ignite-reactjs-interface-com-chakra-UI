import Head from 'next/head';
import { Box, VStack } from '@chakra-ui/react';

import { getContinents } from '../services/data';

import { SafeContentArea } from '../components/SafeContentArea';
import { Banner } from './Home/Banner';
import { ChooseContinentText } from './Home/ChooseContinentText';
import { Divider } from './Home/Divider';
import { ContinentsSlider } from './Home/ContinentsSlider';
import { TravelTypes } from './Home/TravelTypes';

interface Continent {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	slug: string;
}

interface HomeProps {
	continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
	return (
		<Box>
			<Head>
				<title>Home | worldtrip</title>
			</Head>

			<Banner />
			<TravelTypes mt="28" />
			<Divider mt="20" />
			<SafeContentArea maxW="1240px" mt="12" mb="10">
				<VStack spacing="12" align="center" justify="center">
					<ChooseContinentText />
					<ContinentsSlider continents={continents} />
				</VStack>
			</SafeContentArea>
		</Box>
	);
}

export function getStaticProps() {
	const continents = getContinents();

	return {
		props: {
			continents,
		},
	};
}
