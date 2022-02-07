import { Box, Text } from '@chakra-ui/react';

export function TextInfo() {
	return (
		<Box zIndex="docked" color="white">
			<Text fontSize="4xl" fontWeight="medium" color="gray.100">
				5 Continentes, <br /> infinitas possibilidades.
			</Text>

			<Text fontSize="xl" color="gray.200" mt="5">
				Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
			</Text>
		</Box>
	);
}
