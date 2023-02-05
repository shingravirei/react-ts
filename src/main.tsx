import '@unocss/reset/tailwind.css';
import { StrictMode, Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'uno.css';
import { router } from '~/router';

const container = document.querySelector('#root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
	<StrictMode>
		<Suspense fallback={<div>loading</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>,
);
