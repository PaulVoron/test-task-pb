import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Users } from './pages/Users';
import { Posts } from './pages/Posts';

import { Container } from './styles/AppStyles';
import { Info } from './pages/Info';

export const App = () => {
	return (
		<>
			<Container>
        <Header />

        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id/posts" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<Info />} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
	    </Container>

      <Footer />
    </>
  );
};
