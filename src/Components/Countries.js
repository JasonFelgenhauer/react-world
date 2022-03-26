import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
	const [data, setData] = useState([]);
	const [sortedData, setSortedData] = useState([]);
	const [playOnce, setPlayOnce] = useState(true);
	const [rangeValue, setRangeValue] = useState(30);
	const [selectedRadio, setSelectedRadio] = useState('');
	const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

	useEffect(() => {
		if (playOnce) {
			axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags').then((response) => {
				setData(response.data);
				setPlayOnce(false);
			});
		}

		const sortedCountry = () => {
			const coutryObj = Object.keys(data).map((i) => data[i]);
			const sortedArray = coutryObj.sort((a, b) => {
				return b.population - a.population;
			});
			sortedArray.length = rangeValue;
			setSortedData(sortedArray);
		};
		sortedCountry();
	}, [data, rangeValue, playOnce]);

	return (
		<div className='countries'>
			<div className='sort-container'>
				<input
					type='range'
					min='1'
					max='250'
					value={rangeValue}
					onChange={(e) => {
						setRangeValue(e.target.value);
					}}
				/>
				<ul>
					{radios.map((radio) => {
						return (
							<li key={radio}>
								<input
									type='radio'
									value={radio}
									id={radio}
									checked={radio === selectedRadio}
									onChange={(e) => {
										setSelectedRadio(e.target.value);
									}}
								/>
								<label htmlFor={radio}>{radio}</label>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='cancel'>{selectedRadio && <h5 onClick={() => setSelectedRadio('')}>Anuller recherche</h5>}</div>
			<ul className='countries-list'>
				{sortedData
					.filter((country) => country.region.includes(selectedRadio))
					.map((country) => (
						<Card country={country} key={country.name.common} />
					))}
			</ul>
		</div>
	);
};

export default Countries;
