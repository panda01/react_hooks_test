import React from 'react';

class UseEffect extends React.Component {
	state = {
		count: 0
	}
	constructor() {
		super();
		const updateDocumentTitle = () => {
			document.title = `You clicked ${this.state.count} times`;
		};
		this.incrementCount = () => {
			this.setState({count: this.state.count + 1});
		};
		this.componentDidUpdate = updateDocumentTitle;
		this.componentDidMount = updateDocumentTitle;
	}
	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={this.incrementCount}>
					Click me
				</button>
			</div>
		);
	}
}

export default UseEffect;
