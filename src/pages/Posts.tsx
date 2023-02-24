import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { fetchPosts } from '../features/postsSlice';
import { FloatButton } from 'antd';
import { PostsList } from '../components/PostsList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { ListContainer, ListItemsHeader } from '../styles/ListElementsStyles';
import { FloatInfo } from '../components/FloatInfo';


export const Posts: React.FC = () => {
	const postsState = useSelector((state: RootState) => state.posts);
	const { error, loading, posts } = postsState;
	
  const usersState = useSelector((state: RootState) => state.users);
	const { users } = usersState;

  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const userId = (params.id) ? +params.id : 0;
  const userName = users?.find(user => user.id === userId)?.name;

	useEffect(() => {
		const getPosts = async () => {
			if (userId) {
				dispatch(fetchPosts(userId));
			}
		};

    getPosts();
	}, [dispatch, userId]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
    <>
      <BackButton />

      <ListContainer>
        <ListItemsHeader>
          <h2>Posts of {userName}</h2>
          <h4>(number of posts: {posts?.length})</h4>
        </ListItemsHeader>

        {posts && <PostsList posts={posts} />}
      </ListContainer>

      <BackButton />

      <FloatButton.BackTop style={{ bottom: 22 }}/>
      <FloatInfo />
    </>
	);
};
