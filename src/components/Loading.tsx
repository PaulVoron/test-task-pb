import { Spinner } from './Spinner';
import { ListContainer } from '../styles/ListElementsStyles';

interface LoadingProps {
	loadingMessage?: string;
}

export const Loading: React.FC<LoadingProps> = (
  { loadingMessage = 'Loading...' }
) => {
	return (
		<ListContainer>
      <Spinner />
			<p className="error-loading">{loadingMessage}</p>
		</ListContainer>
	);
};
