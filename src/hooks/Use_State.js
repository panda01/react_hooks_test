import React, { useState } from 'react';

/*
 * Simple Use state example from https://reactjs.org/docs/hooks-state.html
 */
function UseState() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click Me
			</button>
		</div>
	);
}


export default UseState;
