import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { SafeContentArea } from '../../components/SafeContentArea';

interface BannerProps {
	title: string;
	image: string;
}

export function Banner({ title, image }: BannerProps) {
	return (
		<Flex
			h="500px"
			position="relative"
			justify="flex-start"
			align="flex-end"
			py="60px"
		>
			<Image
				src={image}
				layout="fill"
				objectFit="cover"
				objectPosition="50% 26%"
				alt={title}
			/>

			<SafeContentArea w="100%" zIndex="docked">
				<Text fontSize="5xl" fontWeight="semibold" color="gray.100">
					{title}
				</Text>
			</SafeContentArea>
		</Flex>
	);
}
