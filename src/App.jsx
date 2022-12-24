import { MeiliSearch } from 'meilisearch';
import { useEffect, useState } from 'react';
import saved_links from '../data/saved_links.json';
import Nav from './components/Nav';
import Results from './components/Results';
import Search from './components/Search';

function App() {
	// console.log(data);
	const [data, setData] = useState([]);
	const [show, setShow] = useState(false);
	const { links } = saved_links;

	const client = new MeiliSearch({
		host: 'https://meilisearch-production-9f55.up.railway.app',
		apiKey: 'checktanishqworthilluminafruitninjabaking',
	});

	// client.getIndex('links').then((res) => console.log(res));

	client.getIndex('links').catch(() => {
		links.forEach((link, ind) => {
			const link0 = link;
			links[ind] = {
				id: crypto.randomUUID(),
				link: link0,
			};
		});
		client.index('links').addDocuments(links);
	});
	// client.deleteIndex('links')

	// useEffect(()=>{
	//   client.index('links').addDocuments(links).then(res=>console.log(res));
	// },[])
	// client
	// 	.index('links')
	// 	.addDocuments(links)
	// 	.then((res) => console.log(res));

	// client.index('links').search('on a').then(res=>console.log(res));



	return (
		<div className="App">
			<Nav />
			<div className="flex flex-col justify-center items-center">
				<Search
					client={client}
					data={data}
					setData={setData}
					show={show}
					setShow={setShow}
				/>
				<Results client={client} data={data} setData={setData} />
				{/* {show & } */}
				{data.length>0 && show && (
					<div className="h-screen w-screen fixed top-0 left-0 backdrop-blur-sm"></div>
				)}
			</div>
		</div>
	);
}

export default App;
