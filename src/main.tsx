import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import './index.css';
import Router from './router';

const container = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(container);

root.render(
	<StrictMode>
		<Router />
	</StrictMode>,
);
