import { ListContainer } from '../styles/ListElementsStyles';

interface ErrorProps {
	errorMessage: string;
}

export const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
	return (
		<ListContainer>
			<p className="error-loading">{`${errorMessage} 😥`}</p>
		</ListContainer>
	);
};
