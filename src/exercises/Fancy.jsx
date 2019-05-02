// imports
import React from 'react';  // behövs för JSX

// komponent (funktionell)
const Fancy = (props) => (
	<header className="fancy" style={ {color:  props.color} }>{props.text}</header>
)

// export
export default Fancy;
