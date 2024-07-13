import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <p>© Made by Katelio with ❤️ and lots of ☕️</p>
      <p>
        Photos par{" "}
        <a href="https://fabricejoubert.fr/" target="_blank" rel="noreferrer">
          Fabrice Joubert Photographe
        </a>
      </p>

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
  line-height: 1.6;

  p {
    color: white;
    font-size: clamp(0.8rem, 2vw, 1rem);
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
