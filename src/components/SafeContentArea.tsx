import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SafeContentAreaProps extends BoxProps {
	children: ReactNode;
}

export function SafeContentArea({ children, ...rest }: SafeContentAreaProps) {
	return (
		<Box maxW="1160px" m="0 auto" {...rest}>
			{children}
		</Box>
	);
}
