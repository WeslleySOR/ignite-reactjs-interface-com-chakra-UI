import { Box, Text } from '@chakra-ui/react';

interface InfoCountProps {
	count: number;
	label: string;
}

export function InfoCount({ count, label }: InfoCountProps) {
	return (
		<Box>
			<Text
				fontSize="5xl"
				color="yellow.500"
				fontWeight="semibold"
				display="block"
				textAlign="center"
			>
				{count}
			</Text>
			<Text
				fontSize="2xl"
				color="gray.700"
				fontWeight="semibold"
				display="block"
				textAlign="center"
			>
				{label}
			</Text>
		</Box>
	);
}
