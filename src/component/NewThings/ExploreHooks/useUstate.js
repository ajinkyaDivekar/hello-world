import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
export default function UseState() {
	// const [ data, setData ] = useState([]);
	const [ query, setQuery ] = useState(1);

	const data = useFetch('http://localhost:3001/links/', query);

 /*    useEffect(() => {
    fetch("http://localhost:3001/links/1")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log('error',err));
  }, []); // << super important array

    useEffect(() => {
    fetch("http://localhost:3001/links/")
      .then(response => response.json())
      .then(data => setQuery(data))
      .catch(err => console.log('error',err));
  }, []); // << super important array */

	const handleButton = () => {
		let queryValue = query + 1;
		setQuery(queryValue);
	};

	return (
		<div>
			<ul>{data && data.map((el) => <li key={el.id}>{el.title}</li>)}</ul>
			<button onClick={handleButton}>{query}</button>
			<input type="text" onChange={(e) => setQuery(e.target.value)} className="form-control" />
		</div>
	);
}
