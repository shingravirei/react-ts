import { useLocation } from 'react-router-dom';

const NoMatch = (): JSX.Element => {
	const location = useLocation();

	return (
		<h1>
			No match for <code>{location.pathname}</code>
		</h1>
	);
};

export default NoMatch;
