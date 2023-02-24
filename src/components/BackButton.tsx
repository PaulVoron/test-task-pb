import { Link } from 'react-router-dom';
import { Button } from '../styles/ListElementsStyles';

export const BackButton = () => {
	return (
    <>
		<Link to={`/users`}>
      <Button>Back to users list</Button>
    </Link>
    </>
	);
};
