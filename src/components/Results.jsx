import React from 'react';

const Results = ({data}) => {
	// console.log(data)
	return data.length>0 && <div>{data.map(obj=> {
		// const arr= obj.link.split('//')[1].split('/')
		return (
			<a href={obj.link} className="container hover:text-teal-700" key={obj.id} target="_blank">
				<h3 className='p-4'>
					{/* {arr[arr.length - 1].length == 0
						? arr[arr.length - 2]
						: arr[arr.length - 1]} */}
					{obj.link}
				</h3>
				<hr className='border-teal-900 border-t-2'/>
			</a>
		);
	})}</div>;
};

export default Results;
