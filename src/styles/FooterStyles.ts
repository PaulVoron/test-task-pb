import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color: var(--clr-dark);
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2rem 0 2rem 0;
	gap: 0.25rem;
	a {
		color: var(--clr-light);
	}
	span {
		color: var(--clr-light);
	}
`;

export { FooterContainer };
