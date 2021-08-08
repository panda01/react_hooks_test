import React from 'react';

class UseEffect extends React.Component {
	state = {
		count: 0
	}
	constructor() {
		super();
		this.updateDocumentTitle = () => {
			document.title = `You clicked ${this.state.count} times`;
		};
		this.componentDidUpdate = this.updateDocumentTitle;
		this.componentDidMount = this.updateDocumentTitle;
	}
	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => {this.setState({count: this.state.count + 1});}}>
					Click me
				</button>
			</div>
		);
	}
}

export default UseEffect;
