class ReactReg extends React.Component {
	constructor(props) {
		super(props);
		this.incrementCount = function () {
			this.setState({count: this.state.count + 1});
		}.bind(this);
	}
	state = {
		count: 0,
	};
	render () {
		return (
			<div>
				<button id="reg_increment" onClick={this.incrementCount}>IncrementCount</button>
				{this.state.count}
			</div>);
	}
}
function ReactHook() {
	const [count, setCount] = React.useState(0);

	function incrementCount() {
		setCount(count + 1);
	}

	return (
		<div>
			<button id="hook_increment" onClick={incrementCount}>IncrementCount</button>
			{count}
		</div>);
}

console.time("react_reg");
ReactDOM.render(<ReactReg />, document.getElementById("react_reg_container"));
console.timeEnd("react_reg");

console.time("react_hooks");
ReactDOM.render(<ReactHook />, document.getElementById("react_hooks_container"));
console.timeEnd("react_hooks");

function clickIncrement(forHook) {
	const selector = forHook ? "hook_increment" : "reg_increment";
	const $incrementBtn = document.getElementById(selector);

	const count = 10000;
	const consoleTimeStr = "click increment " + count + " times for " + selector;
	console.time(consoleTimeStr);

	for(let idx = 0; idx < count; idx++)
	{
		$incrementBtn.click();
	}

	console.timeEnd(consoleTimeStr);
}

clickIncrement(true);
clickIncrement(false);
