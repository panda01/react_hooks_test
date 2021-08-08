import React from 'react';


class UseState extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}
	handleClick = () => {
		this.setState({ count: this.state.count + 1});
	}
	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={this.handleClick}>
					Click Me
				 </button>
			</div>
		);
	}
}


export default UseState;
