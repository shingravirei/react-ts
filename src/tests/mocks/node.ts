import { setupServer } from 'msw/node';
import { handlers } from '~/tests/mocks/handlers';

export const server = setupServer(...handlers);

server.events.on('request:start', ({ request }) => {
	console.log('MSW intercepted:', request.method, request.url);
});
