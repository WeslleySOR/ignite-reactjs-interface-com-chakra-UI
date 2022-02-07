import Image from 'next/image';
import { Flex } from '@chakra-ui/layout';

export function Header() {
	return (
		<Flex w="100%" h="100px" align="center" justify="center">
			<Image src="/logo.svg" width="185px" height="46px" alt="world trip" />
		</Flex>
	);
}
