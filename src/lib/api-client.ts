import ky from 'ky';

export const jsonplaceholderApi = ky.create({
	prefixUrl: 'https://jsonplaceholder.typicode.com',
});
