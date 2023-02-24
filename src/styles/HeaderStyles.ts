import styled from 'styled-components';

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: min(1200px, 95vw);
	padding: 0.5rem 0;
	border-bottom: solid 1px var(--clr-dark);
	background-color: var(--clr-light);
	h1, h4 {
		margin-bottom: 0.2rem;
		text-align: center;
	}
`;

export { HeaderContainer };
