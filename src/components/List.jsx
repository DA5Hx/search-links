import { Divider } from '@mui/material';
import React from 'react';

const List = ({ link, setData ,setShow, setSearch,setKeyword}) => {
	return (
		<div
			className="break-words cursor-pointer font-signika text-teal-900"
			onClick={() => {
				setData([{link}]);
                // console.log(data)
                setSearch(null);
                setKeyword('');
                setShow(false);
                // console.log('clicked')
                document.activeElement.blur();
                // console.log(document.activeElement)
				// console.log('clicked');
			}}
		>
			{link}
			<Divider />
		</div>
	);
};

export default List;
