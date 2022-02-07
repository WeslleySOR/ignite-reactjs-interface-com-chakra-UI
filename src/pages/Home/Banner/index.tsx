import { Box, Flex } from '@chakra-ui/react';

import { SafeContentArea } from '../../../components/SafeContentArea';
import { Background } from './Background';
import { TextInfo } from './TextInfo';
import { Airplane } from './Airplane';

export function Banner() {
	return (
		<Box h="335px" position="relative">
			<Background />

			<SafeContentArea h="100%">
				<Flex h="100%" justify="space-between" align="center">
					<TextInfo />
					<Airplane />
				</Flex>
			</SafeContentArea>
		</Box>
	);
}
