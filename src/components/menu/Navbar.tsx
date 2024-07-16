import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import dataPhotos from "../../assets/exportData_demo.json";

type NavbarProps = {
  menuIsOpen: boolean;
  handleClick: () => void;
  logout: () => void;
};

const Navbar = ({ menuIsOpen, handleClick, logout }: NavbarProps) => {
  // Fermeture du menu lors d'un clic en dehors de celui-ci
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // console.log(event);
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".navBar") &&
        !event.target.closest(".burger")
      ) {
        handleClick();
      }
    };

    if (menuIsOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuIsOpen, handleClick]);

  return (
    <NavbarStyled className={menuIsOpen ? "open" : ""}>
      <div className="navBar">
        <NavLink to="/home" onClick={handleClick}>
          <img
            src="/logos/LogoKE_BluePink_NoDate_V2_RVB.svg"
            alt="log katelio"
            className="logo"
          />
        </NavLink>
        <NavLink
          to="/home#albumsContainer"
          className="mainLink"
          onClick={handleClick}
        >
          Accueil
        </NavLink>
        <div>
          {dataPhotos.map((album) => (
            <NavLink
              to={`/gallery/${album.id}`}
              className="secondLink"
              onClick={handleClick}
              key={album.id}
            >
              {album.title}
            </NavLink>
          ))}
        </div>
        <button className="thirdLink" onClick={logout}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>Se déconnecter
        </button>
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &.open {
    width: 100vw;

    .navBar {
      transform: translateX(0%);
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    }
  }

  .navBar {
    height: 100%;
    width: 250px;
    background: var(--contrast);
    transform: translateX(-100%);
    transition: transform 250ms ease-in-out;
    display: flex;
    flex-direction: column;

    .logo {
      width: 70px;
      margin: 25px 20px 10px 20px;
    }

    .mainLink,
    .secondLink,
    .thirdLink {
      padding-inline: 20px;
      &:hover {
        background: var(--mainColor-light);
      }
    }

    .mainLink {
      padding-block: 10px;
      margin-top: 10px;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--secondColor);
      i {
        margin-right: 10px;
        color: var(--secondColor);
      }
    }
    .secondLink {
      padding-block: 5px;
      font-size: 1rem;
      font-weight: 400;
    }
    .thirdLink {
      padding-block: 10px;
      margin-top: 10px;
      font-size: 1rem;
      font-weight: 500;
      color: var(--secondColor);
      i {
        margin-right: 10px;
        color: var(--secondColor);
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export default Navbar;
