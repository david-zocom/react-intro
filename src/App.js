import React, { useState } from 'react';
import './App.css';
import Fancy from './exercises/Fancy';

// Funktionell komponent:
// const App = () => {
// 	const [value, setValue] = useState(1);  // state
// 	const handleClick = event => {
// 		console.log('handleClick anropad med parametern:', event);
// 		setValue(value + 1);
// 	}
// 	return (
// 		<div className="App">
// 			The value is: {value} <br/>
// 			<button onClick={handleClick}>Click me</button>
// 		</div>
// 	);
// };

// Klassbaserad komponent:
class App extends React.Component {
	state = {
		value: 1
	}
	handleClick = event => {
		console.log('handleClick anropad med parametern:', event);
		this.setState({
			value: this.state.value + 1
		});
	}
	render() {
		return (
			<div className="App">
			<div>
				The value is: {this.state.value} <br/>
				<button onClick={this.handleClick}>Click me</button>
			</div>
			<div>
				<Fancy text="Hello world!🌎" color="hotpink" />
				<Fancy text={'Random value: ' + Math.random()} color="navy" />
			</div>
			</div>
		);
	}
}

export default App;
