import React, { useState } from 'react';

const HooksDemo = props => {
	const [data, setData] = useState([
		{ name: 'Simon', phone: '42' },
		{ name: 'David', phone: '43' },
		{ name: 'Ieva', phone: '44' }
	]);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const list = data.map(o => (
		<li key={o.name + o.phone}>
			{o.name} has number {o.phone}
		</li>
	))
	const addPersonToData = () => {
		let newPerson = { name: name, phone: phone };
		let dataCopy = [...data];  // spread operator för att kopiera en lista
		dataCopy.push(newPerson);
		setData(dataCopy);
		// dataCopy = [...data, newPerson]  <-- gör samma sak
	}
	return (
		<div>
			<ol> {list} </ol>
			<input type="text" placeholder="Name"
			 	value={name}
				onChange={event => setName(event.target.value)} />
			<input type="text" placeholder="Phone number"
				value={phone}
				onChange={event => setPhone(event.target.value)} />
			<button onClick={addPersonToData}>Add!</button>
			{name}, {phone}
		</div>
	)
}

// lista med objekt: name, phone

export default HooksDemo;
