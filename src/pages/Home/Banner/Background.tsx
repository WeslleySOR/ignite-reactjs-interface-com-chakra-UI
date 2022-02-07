import Image from 'next/image';

export function Background() {
	return (
		<Image
			src="/night-sky.jpg"
			layout="fill"
			objectFit="cover"
			objectPosition="50% 26%"
			alt="Night sky"
		/>
	);
}
