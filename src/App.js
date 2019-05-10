// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Fancy from './exercises/Fancy';
import SearchResult from './exercises/searchResult/SearchResult';
import Tabs from './exercises/Tabs';
import Counter from './exercises/Counter';
import ConditionalTextField from './exercises/ConditionalTextField';
import HooksDemo from './exercises/HooksDemo';

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
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
		console.log('Constructor');
	}
	// state = {
	// 	value: 1
	// }

	componentDidMount() {
		console.log('component did mount');
		setTimeout(() => {
			console.log('3 seconds has passed');
			this.setState({
				data: [true, false, true]
			});
		}, 1000*3);
	}


	render() {
		let dataElements;
		if( this.state.data ) {
			dataElements = this.state.data.map(
				(b, index) => <li key={index}>{b + ''}</li>
			)
		} else {
			dataElements = <li>Ingen data</li>;
		}


		return (
			<div className="App">
			<Tabs>
				<div>
					<Counter />
					<Counter />
					<Counter />
					<Counter />
					<Counter />
				</div>

				<div>
					<Fancy text="Hello world!🌎" color="hotpink" />
					<Fancy text={'Random value: ' + Math.random()} color="navy" />
				</div>

				<ul>{dataElements}</ul>

				<div>
					<SearchResult />
					<SearchResult />
					<SearchResult />
				</div>

				<ConditionalTextField />

				<HooksDemo />
			</Tabs>
			</div>
		);
	}
}

export default App;
