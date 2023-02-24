export interface userType {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
  };
  phone: string,
  website: string,
}

export interface postType {
  id: number,
  title: string,
  body: string,
}

export interface albumType {
  userId: number,
  id: number,
  title: string,
}

export interface UsersListProps {
	users: userType[],
}

export interface PostListProps {
	posts: postType[],
}

export interface AlbumsListProps {
	albums: albumType[],
}
