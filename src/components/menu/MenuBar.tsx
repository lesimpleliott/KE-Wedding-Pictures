import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import dataPhotos from "../../assets/dataPhotos.json";
import { setMenuIsOpen, setPassword } from "../../feature/app.slice";
import { RootState } from "../../store";

const MenuBar: React.FC = () => {
  const menuIsOpen = useSelector((state: RootState) => state.app.menuIsOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setMenuIsOpen(!menuIsOpen));
  };

  const logout = () => {
    dispatch(setMenuIsOpen(!menuIsOpen));
    sessionStorage.removeItem("password");
    dispatch(setPassword(""));
    navigate("/");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(setMenuIsOpen(false));
        event.stopPropagation();
      }
    };

    if (menuIsOpen) {
      document.addEventListener("keydown", handleKeyDown, true);
    } else {
      document.removeEventListener("keydown", handleKeyDown, true);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [menuIsOpen, dispatch]);

  return (
    <MenuBarStyled className={`${menuIsOpen ? "open" : "close"}`}>
      <div className="navBar">
        <NavLink to="/home" onClick={handleClick}>
          <img
            src="/logos/LogoKE_BluePink_NoDate_V2_RVB.svg"
            alt="log katelio"
            className="logo"
          />
        </NavLink>
        <NavLink to="/home" className="mainLink" onClick={handleClick}>
          Accueil
        </NavLink>
        <NavLink
          to="/home#albumsContainer"
          className="mainLink"
          onClick={handleClick}
        >
          Photos
        </NavLink>
        <div>
          {dataPhotos.albums.map((album) => (
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
    </MenuBarStyled>
  );
};

const MenuBarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  &.open {
    width: 100vw;

    .navBar {
      transform: translateX(0%);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
  }

  .navBar {
    height: 100%;
    width: 300px;
    min-width: 250px;
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

export default MenuBar;
