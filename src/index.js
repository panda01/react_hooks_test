import React from 'react';
import ReactDOM from 'react-dom';

const url = window.location.search;
const pageValue = (new URLSearchParams(url)).get('page');

if(pageValue) {
	import('./' + pageValue)
		.then((Module) => {
			ReactDOM.render(
				<React.StrictMode>
					<Module.default />
				</React.StrictMode>,
				document.getElementById('root0')
			);
		});
}
