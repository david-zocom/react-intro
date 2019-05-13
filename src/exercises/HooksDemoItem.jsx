import React, { useState } from 'react';

const HooksDemoItem = ({ person, updateList }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(person.name);
	const [phone, setPhone] = useState(person.phone);

	const save = () => {
		setIsEditing(false);
		updateList(person, { name: name, phone: phone });
	}

	if( isEditing ) {
		return (
			<li>
			<input type="text"
				placeholder="Name"
				value={name}
				onChange={event => setName(event.target.value)}
				/>
			<input type="text"
				placeholder="Phone"
				value={phone}
				onChange={event => setPhone(event.target.value)}
				/>
			<button onClick={save}>Save</button>
			</li>
		)
	} else {
		return (
			<li onClick={() => setIsEditing(true)}>
			{person.name} has number {person.phone}
			</li>
		)
	}
}

export default HooksDemoItem;
