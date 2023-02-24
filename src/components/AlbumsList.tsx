import { AlbumsListProps } from '../assets/interfaces';
import { ListItem, ListItemSection } from '../styles/ListElementsStyles';

export const AlbumsList: React.FC<AlbumsListProps> = ({ albums }) => {
	return (
		<>
			{albums?.map((album) => (
				<ListItem key={(album.id)}>
					<ListItemSection>
						<p>Album</p>
						<p>{album.title}</p>
					</ListItemSection>
				</ListItem>
			))}
		</>
	);
};
