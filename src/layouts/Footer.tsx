import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <p>Made by Katelio with ❤️ and lots of ☕️</p>
      <p>
        Contactez-nous :{" "}
        <a href="mailto:contact@katelio.fr">contact@katelio.fr</a>
      </p>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  margin-top: 25px;
  padding: 15px;
  text-align: center;
  width: 100%;
  background-color: var(--mainColor-opacity);

  p {
    color: white;
    font-size: 0.9rem;
    font-weight: 400;
  }

  a {
    color: white;
    font-weight: 600;
    font-style: italic;
    transition: color 150ms ease-out;

    &:hover {
      color: var(--secondColor);
    }
  }
`;

export default Footer;
