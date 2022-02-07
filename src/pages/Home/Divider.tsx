import { Flex, FlexProps, Divider as ChakraDivider } from '@chakra-ui/react';

interface DividerProps extends FlexProps {}

export function Divider(props: DividerProps) {
	return (
		<Flex align="center" justify="center" {...props}>
			<ChakraDivider
				width="90px"
				borderBottomWidth="2px"
				borderBottomColor="gray.700"
			/>
		</Flex>
	);
}
