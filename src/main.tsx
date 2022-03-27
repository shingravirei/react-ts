import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import './index.css';
import Router from './router';

ReactDOM.render(
	<StrictMode>
		<Router />
	</StrictMode>,
	document.getElementById('root'),
);
