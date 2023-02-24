import styled from 'styled-components';

const ListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 6rem;

	.error-loading {
		width: 100%;
		text-align: center;
	}
`;

const ListItem = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #eed;
	width: calc(50% - (1rem * (1 / 2)) - 1em);
	padding: 1rem;
  margin: 0 0.5em;
  border-radius: 1rem;

	@media (max-width: 800px) {
		width: 100%;
	}

	h2 {
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: solid 1px var(--clr-dark);
	}
`;

const ListItemWide = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #eed;
	width: calc(100% - 1em);
	padding: 1rem;
  margin: 0 0.5em;
  border-radius: 1rem;

	@media (max-width: 800px) {
		width: 100%;
	}

	h2 {
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: solid 1px var(--clr-dark);
	}
`;

const ListItemsHeader = styled.div`
	margin: 1rem 0;
	padding: 1rem;
	border-bottom: solid 1px var(--clr-dark);
	background-color: var(--clr-dark);
	width: 100%;

	h2, h4 {
		color: var(--clr-light);
	}
`;

const ListItemSection = styled.div`
	&:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	p {
		&:nth-child(odd) {
			font-weight: bold;
		}
	}
`;

const ButtonList = styled.div`
  background: var(--clr-dark);
  border-radius: 3px;
  border: 2px solid var(--clr-dark);
  color: var(--clr-light);
  margin: 0.2em 5em;
  padding: 0.25em 0;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    background: #152330;
    transform: scale(1.02);
  }
`;

const Button = styled.div`
  background: var(--clr-light);
  border-radius: 3px;
  border: 2px solid var(--clr-dark);
  color: var(--clr-dark);
  margin: auto;
  margin-bottom: 1em;
  width: 25em;
  padding: 1em;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    // background: #152320;
    // color: var(--clr-light);
    transform: scale(1.05);
  }
`;

export { 
  ListItem, 
  ListItemWide,
  ListContainer, 
  ListItemSection, 
  ListItemsHeader, 
  ButtonList, 
  Button 
};
