import React from 'react';

class Tabs extends React.Component {
	state = {
		selectedIndex: 0
	}
	render() {
		// console.log('Tabs', this.props.children);
		let header = this.props.children.map((x, index) => (
			<button key={index}
				disabled={index === this.state.selectedIndex}
				className={index === this.state.selectedIndex ? 'selectedTab' : ''}
				onClick={ () => {this.setState({ selectedIndex: index })} }
				>Tab {index}</button>
		));

		let content = this.props.children[this.state.selectedIndex];

		return (
			<div className="tabs">
				{header}
				{content}
			</div>
		)
	}
}

export default Tabs;

/*
<Tabs>
	<div> <button>iktgjkkjtjg</button> </div>
	<div>rotlr,fl</div>
</Tabs>


*/
