import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { AppProvider } from '~/app/Provider';
import '~/main.css';

const container = document.querySelector('#root');

if (!container) {
	throw new Error('root element does not exists');
}

const root = ReactDOMClient.createRoot(container);

root.render(
	<StrictMode>
		<AppProvider />
	</StrictMode>,
);
