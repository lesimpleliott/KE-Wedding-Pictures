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
  width: 100%;
  height: 100px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--mainColor-opacity);
  line-height: 1.5;

  p {
    color: white;
    font-size: clamp(0.8rem, 1vw, 1rem);
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
