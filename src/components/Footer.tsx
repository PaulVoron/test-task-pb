import { FooterContainer } from "../styles/FooterStyles";

export const Footer = () => {
	return (
		<FooterContainer>
			<span>Developed By </span>
			<a 
        href="https://github.com/PaulVoron"
        target="_blank" 
        rel="noopener noreferrer"
      >
				Pavlo Voronin
			</a>
      <span>, 2023</span>
		</FooterContainer>
	);
};
