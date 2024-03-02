import React from 'react';
import '@/assets/styles/globals.css';

export const metadata = {
	title: 'Property Pulse | Find The Perfect Rental',
	description: 'Find the perfect rental property in your area.',
	keywords:
		'rental, property, real estate, home, house, apartment, condo, townhouse, duplex, triplex, fourplex, single family, multi family, multi-family',
};

interface LayoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
	return (
		<html lang='en'>
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
};

export default layout;
