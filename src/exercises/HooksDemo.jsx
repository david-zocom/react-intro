import React, { useState } from 'react';
import HooksDemoItem from './HooksDemoItem';

const HooksDemo = props => {
	const [data, setData] = useState([
		{ name: 'Simon', phone: '42' },
		{ name: 'David', phone: '43' },
		{ name: 'Ieva', phone: '44' }
	]);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const updateList = (oldPerson, newPerson) => {
		let newData = data.map(p => {
			if( p === oldPerson )
				return newPerson;
			return p;
		});
		setData(newData);
	}
	const addPersonToData = () => {
		let newPerson = { name: name, phone: phone };
		let dataCopy = [...data];  // spread operator för att kopiera en lista
		dataCopy.push(newPerson);
		setData(dataCopy);
		// dataCopy = [...data, newPerson]  <-- gör samma sak
	}

	const list = data.map(o => (
		<HooksDemoItem key={o.name + o.phone}
		person={o}
		updateList={updateList}/>
	))
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
		</div>
	)
}

// lista med objekt: name, phone

export default HooksDemo;
