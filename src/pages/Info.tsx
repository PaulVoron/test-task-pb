import { 
  ListItemWide, 
  ListContainer,
  ListItemsHeader, 
  ListItemSection,
} from '../styles/ListElementsStyles';

import { FloatButton } from 'antd';
import { BackButton } from '../components/BackButton';

export const Info = () => {

  return (
    <>
      <ListContainer>
        <ListItemsHeader>
          <h2>About</h2>
        </ListItemsHeader>
        <ListItemWide>
          <p> This project is built with React.js and uses a test API at https://jsonplaceholder.typicode.com/.</p>
          <br />
          <ListItemSection>
						<p>The technologies used include:</p>
					</ListItemSection>
					<p>ReactJS</p>
          <p>Redux Toolkit</p>
          <p>React Router</p>
          <p>Axios</p>
          <br />
          <ListItemSection>
						<p>The layout is responsive.</p>
					</ListItemSection>
          <ListItemSection>
						<p>The following libraries were used for styling:</p>
					</ListItemSection>
          <p>Ant Design</p>
          <p>Styled-Components</p>
          <h2> </h2>
          <p>Completed as a test task for <b>ProxyBand</b> company.</p>
          <p>
            Developed by&nbsp;
            <a 
              href="https://github.com/PaulVoron"
              target="_blank" 
              rel="noopener noreferrer"
            >
				    <b>Paul Voronin</b>
			      </a>
          </p>
				</ListItemWide>

        <FloatButton.BackTop style={{ bottom: 22 }}/>
      </ListContainer>

      <BackButton />
    </>
	);
};