import { useDispatch, useSelector } from 'react-redux';
import { ListContainer, ListItemsHeader } from "../styles/ListElementsStyles";
import { Modal } from 'antd';
import { AppDispatch, RootState } from '../app/store';
import { toggleModal } from '../features/modalSlice';
import { AlbumsList } from './AlbumsList';
import { Loading } from './Loading';
import { Error }  from './Error';

export const ModalWindow = () => {
  const albumsState = useSelector((state: RootState) => state.albums);
	const { error, loading, albums } = albumsState;
  const modalState = useSelector((state: RootState) => state.modal);
  const { isModalOpen, userName} = modalState;
	const dispatch = useDispatch<AppDispatch>();
  
  const handleCloseModal = () => {
    dispatch(toggleModal());
  };

  if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}
  
  return (
		<Modal 
        open={isModalOpen} 
        onCancel={handleCloseModal}
        footer={null}
      >
        <ListContainer>
          <ListItemsHeader>
            <h2>Albums of {userName}</h2>
            <h4>(number of albums: {albums?.length})</h4>
          </ListItemsHeader>

          {albums && <AlbumsList albums={albums} />}
        </ListContainer>
      </Modal>
	);
};
