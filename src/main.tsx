import { StrictMode, Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '~/router';
import '~/styles/app.css';

const container = document.querySelector('#root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
	<StrictMode>
		<Suspense fallback={<div>loading</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>,
);
