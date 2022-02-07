import { Box } from '@chakra-ui/layout';
import Image from 'next/image';

interface SlideBackgroundProps {
	src: string;
	alt: string;
}

export function SlideBackground({ src, alt }: SlideBackgroundProps) {
	return (
		<Box position="absolute" top="0" right="0" bottom="0" left="0">
			<Box position="absolute" top="0" right="0" bottom="0" left="0" zIndex="-2">
				<Image src={src} alt={alt} layout="fill" objectFit="cover" quality={100} />
			</Box>
			<Box
				position="absolute"
				top="0"
				right="0"
				bottom="0"
				left="0"
				bgColor="rgba(28, 20, 1, .35)"
				zIndex="-1"
			/>
		</Box>
	);
}
