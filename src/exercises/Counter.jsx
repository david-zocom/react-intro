import React from 'react';

class Counter extends React.Component {
	state = {
		value: 1
	}
	render() {
		return (
			<div>
				The value is: {this.state.value} <br/>
				<button onClick={this.handleClickPlusOne}>+1</button>
				<button onClick={this.handleClickMinusOne}>-1</button>
				<button onClick={this.handleClickReset}>0</button>
			</div>
		)
	}
	handleClickPlusOne = event => {
		this.setState({ value: this.state.value + 1 });
	}
	handleClickMinusOne = event => {
		this.setState({ value: this.state.value - 1 });
	}
	handleClickReset = event => {
		this.setState({ value: 0 });
	}
}

export default Counter;
