import { Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

interface TravelItemProps {
	title: string;
	imageSrc: string;
	imageAlt?: string;
}

export function TravelItem({
	title,
	imageSrc,
	imageAlt = undefined,
}: TravelItemProps) {
	return (
		<VStack spacing="6" direction="column" align="center" justify="center">
			<Image src={imageSrc} width="85px" height="85px" alt={imageAlt} />
			<Text fontWeight="semibold" fontSize="2xl" color="grey.700">
				{title}
			</Text>
		</VStack>
	);
}
