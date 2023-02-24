import { PostListProps } from '../assets/interfaces';
import { ListItem, ListItemSection } from '../styles/ListElementsStyles';

export const PostsList: React.FC<PostListProps> = ({ posts }) => {
	return (
		<>
			{posts?.map((post) => (
				<ListItem key={(post.id)}>
					<h2>{post.title}</h2>
					<ListItemSection>
						<p>Post</p>
						<p>{post.body}</p>
					</ListItemSection>
				</ListItem>
			))}
		</>
	);
};
