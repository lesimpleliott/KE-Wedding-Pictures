import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import dataPhotos from "../../assets/dataPhotos.json";
import { setMenuIsOpen } from "../../feature/app.slice";
import { RootState } from "../../store";

const Menu: React.FC = () => {
  const menuIsOpen = useSelector((state: RootState) => state.app.menuIsOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMenuIsOpen(!menuIsOpen));
  };

  return (
    <MenuStyled className={`${menuIsOpen ? "open" : "close"}`}>
      <nav className="navBar">
        <NavLink to="/home" onClick={handleClick}>
          <img
            src="./logos/LogoKE_BluePink_NoDate_V2_RVB.svg"
            alt="log katelio"
            className="logo"
          />
        </NavLink>
        <NavLink to="/home" className="mainLink" onClick={handleClick}>
          Accueil
        </NavLink>
        <NavLink
          to="#albumsContainer"
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
        <NavLink to="/home" className="mainLink" onClick={handleClick}>
          Shop
        </NavLink>
      </nav>
    </MenuStyled>
  );
};

const MenuStyled = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  z-index: 5;
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
    .secondLink {
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
    }
    .secondLink {
      padding-block: 5px;
      font-size: 1rem;
      font-weight: 400;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export default Menu;
