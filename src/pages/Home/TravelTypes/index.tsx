import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { SafeContentArea } from '../../../components/SafeContentArea';
import { TravelItem } from './TravelItem';

interface TravelTypesProps extends FlexProps {}

export function TravelTypes(props: TravelTypesProps) {
	return (
		<SafeContentArea>
			<Flex align="center" justify="space-between" {...props}>
				<TravelItem
					title="vida noturna"
					imageSrc="/cocktail.svg"
					imageAlt="Cocktail"
				/>
				<TravelItem title="praia" imageSrc="/surf.svg" imageAlt="Surf" />
				<TravelItem title="moderno" imageSrc="/building.svg" imageAlt="Building" />
				<TravelItem title="clássico" imageSrc="/museum.svg" imageAlt="Museum" />
				<TravelItem title="e mais..." imageSrc="/earth.svg" imageAlt="Earth" />
			</Flex>
		</SafeContentArea>
	);
}
