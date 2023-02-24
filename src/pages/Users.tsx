import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { fetchUsers } from '../features/usersSlice';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { UsersList } from '../components/UsersList';
import { ListContainer, ListItemsHeader } from '../styles/ListElementsStyles';
import { FloatButton } from 'antd';
import { FloatInfo } from '../components/FloatInfo';

export const Users = () => {
	const usersState = useSelector((state: RootState) => state.users);
	const { error, loading, users } = usersState;

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const getUsers = async () => {
			if (!users) {
				dispatch(fetchUsers());
			}
		};

		getUsers();
	}, [dispatch, users]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<ListContainer>
			<ListItemsHeader>
				<h2>Users</h2>
        <h4>(number of users: {users?.length})</h4>
			</ListItemsHeader>

			{users && <UsersList users={users} />}
      
      <FloatButton.BackTop style={{ bottom: 22 }}/>
      <FloatInfo /> 
		</ListContainer>
	);
};
