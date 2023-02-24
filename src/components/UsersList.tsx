import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../app/store';
import { UsersListProps } from '../assets/interfaces';
import { fetchalbums } from '../features/albumsSlice';
import { toggleModal, setUserName } from '../features/modalSlice';

import { 
  ListItemSection,
  ListItem,
  ButtonList, 
} from '../styles/ListElementsStyles';

import { Loading } from './Loading';
import { Error }  from './Error';
import { ModalWindow } from './ModalWindow';

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const albumsState = useSelector((state: RootState) => state.albums);
	const { error, loading } = albumsState;
	const dispatch = useDispatch<AppDispatch>();

  const handleAlbumsClick = (userId: number) => {
    const userName = users?.find(user => user.id === userId)?.name;
    dispatch(fetchalbums(userId));
    dispatch(setUserName(userName));
    dispatch(toggleModal());
  };

  if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<>
			{users?.map((user) => (
				<ListItem key={user.id}>
					<h2>{user.name}</h2>

					<ListItemSection>
						<p>Username</p>
						<p>{user.username}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Email</p>
						<p>{user.email}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Address</p>
						<p>
							{`
                ${user.address.street}
                ${user.address.suite} 
                ${user.address.city} 
                ${user.address.zipcode}
              `}
						</p>
					</ListItemSection>

					<ListItemSection>
						<p>Phone</p>
						<p>{user.phone}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Website</p>
						<p>{user.website}</p>
					</ListItemSection>

            <Link to={`/users/${user.id}/posts`}>
              <ButtonList>Posts</ButtonList>
            </Link>

            <ButtonList 
              onClick={() => handleAlbumsClick(user.id)}
            >
              Albums
            </ButtonList>
				</ListItem>
			))}

      <ModalWindow />
		</>
	);
};
