import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export function Airplane() {
	return (
		<Box mt="32">
			<Image src="/airplane.png" alt="Airplane" width="417px" height="270px" />
		</Box>
	);
}
