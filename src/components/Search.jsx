import { Autocomplete, Button, InputAdornment, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import List from './List';

const Search = ({ client, data, setData,show,setShow }) => {
	const [keyword, setKeyword] = useState('');
	const [search, setSearch] = useState([]);

	const [count, setCount] = useState(5);
	// const ref = useRef([]);

	// console.log(keyword)
	// console.log(show);
	// console.log(data);
	// console.log('rendered')
	const handleSearch = (e) => {
		// console.log('searcherd')
		if (keyword.trim() == '') {
			setShow(false);
			return;
		}
		if (
			(e.type === 'keydown' && keyword.trim() && e.key === 'Enter') ||
			(e.type === 'click' && keyword.trim())
		) {
			setData(search);
			setShow(false);
			setKeyword('');
			setSearch([]);
			// console.log(data);
		}
		if (e.type === 'keydown') {
			// console.log('searched0');
			if (!show) setShow(true);
			client
				.index('links')
				.search(keyword)
				.then((res) => {
					setSearch(res.hits);
					// console.log(search);
				});
		}
	};

	return (
		<div
			className="search w-2/5 m-8 relative mt-16 z-20"
			tabIndex="0"
			onFocus={() => {
				keyword.trim() && setTimeout(() => setShow(true), 201);
				// console.log('trueing');
			}}
			onBlur={() => {
				// console.log(document.activeElement);
				// console.log('cllick');
				setTimeout(() => setShow(false), 200);
				// setShow(false)
				setCount(5);
			}}
		>
			<TextField
				// ref={ref}
				className="font-signika"
				tabIndex={-1}
				fullWidth
				sx={{
					'& .css-16z3zeq-MuiInputBase-root-MuiInput-root:after': {
						borderBottom: ' 2px solid rgb(13 148 136)',
					},
					'& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
						{
							color: 'rgb(13 148 136)',
						},
					'& .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
						color: 'rgb(13 148 136)',
					},
				}}
				variant="standard"
				label="Search"
				placeholder="Search for links"
				InputLabelProps={{
					style: {
						fontSize: '1.2rem',
						fontFamily: 'Signika',
					},
				}}
				InputProps={{
					style: {
						fontSize: '1.2rem',
						fontFamily: 'Signika',
					},
					endAdornment: (
						<InputAdornment
							position="end"
							className="hover:cursor-pointer"
						>
							<FiSearch onClick={handleSearch} />
						</InputAdornment>
					),
				}}
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				// color='primary.dark'
				onKeyDown={handleSearch}
				// onFocus={() => keyword.trim() && setShow(true)}
				// onBlur={() => {
				// 	console.log('cllickerd');
				// 	setShow(false);
				// 	setCount(5);
				// }}
			/>
			{show && search.length>0 && (
				<div className="absolute p-0 w-full  bg-teal-200 shadow-teal-800 shadow-md">
					{search.slice(0, count).map((obj) => (
						<List
							key={obj.id}
							obj={obj}
							setData={setData}
							setShow={setShow}
                            setKeyword={setKeyword}
                            setSearch={setSearch}
						/>
					))}
					{count < search.length && (
						<p
							className="cursor-pointer font-signika p-1 mx-1 text-teal-700 hover:text-teal-900 hover:underline ease-in-out duration-1000"
							onClick={() => {
								setCount((prevCount) =>
									Math.min(search.length, prevCount + 5)
								);
							}}
							// tabIndex={1}
							// onFocus={() => keyword.trim() && setShow(true)}
							// tabIndex={-1}
							// onFocus={() => keyword.trim() && setShow(true)}
							// onBlur={() => {
							// 	console.log('cllickerdgfg');
							// 	setShow(false);
							// 	setCount(5);
							// }}
						>
							Load more...
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
