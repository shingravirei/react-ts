import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';

ReactDOM.render(
	<StrictMode>
		<Router />
	</StrictMode>,
	document.getElementById('root'),
);
