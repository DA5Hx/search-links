import { Box } from '@mui/material';
import React from 'react';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
	return (
		<Box
			sx={{ '& path': { color: 'rgb(19 78 74)' } }}
			className="w-full bg-teal-500 p-2 flex items-center justify-center"
		>
			<MdCopyright />
			<p className="text-teal-900 font-signika text-lg ml-1">Tanishq</p>
		</Box>
	);
};

export default Footer;
