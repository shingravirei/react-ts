import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '~/router';
import '~/styles/styles.scss';

const container = document.querySelector('#root')!;
const root = ReactDOMClient.createRoot(container);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
