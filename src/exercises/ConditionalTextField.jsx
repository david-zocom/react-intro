import React from 'react';

class ConditionalTextField extends React.Component {
	state = {
		isEnabled: false
	}

	handleCheckboxClick = event => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
	render() {
		return (
			<div className="conditionalText">
			<input type="text" disabled={!this.state.isEnabled} /> <br/>
			<label>
			<input type="checkbox"
				onChange={this.handleCheckboxClick}
			 	checked={this.state.isEnabled} /> Enable
			</label>
			</div>
		)
	}
}

export default ConditionalTextField;
