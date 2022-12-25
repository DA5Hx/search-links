import { Divider } from '@mui/material';
import React from 'react';

const List = ({ obj, setData ,setShow, setSearch,setKeyword}) => {
	return (
		<div
			className="break-words cursor-pointer font-signika text-teal-900 px-1 pt-1 mx-1"
			onClick={() => {
				setData([obj]);
				// console.log(data)
				setSearch([]);
				setKeyword('');
				setShow(false);
				// console.log('clicked')
				document.activeElement.blur();
				// console.log(document.activeElement)
				// console.log('clicked');
			}}
		>
			<p className='font-signika mb-1'>{obj.link}</p>
			<Divider />
		</div>
	);
};

export default List;
