import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import dataPhotos from "../assets/exportData.json";
import { setMenuIsOpen, setPassword } from "../redux/app.slice";
import { RootState } from "../store";

const Menu = () => {
  const menuIsOpen = useSelector((state: RootState) => state.app.menuIsOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMenuIsOpen(!menuIsOpen));
  };

  const logout = () => {
    dispatch(setMenuIsOpen(false));
    sessionStorage.removeItem("password");
    dispatch(setPassword(""));
    navigate("/");
  };

  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "";

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
    <MenuStyled>
      <BurgerButtonStyled
        onClick={handleClick}
        className={`${menuIsOpen ? "open" : "close"}`}
      >
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </BurgerButtonStyled>

      <NavbarStyled className={`${menuIsOpen ? "open" : "close"}`}>
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
            <i className="fa-solid fa-arrow-right-from-bracket"></i>Se
            déconnecter
          </button>
        </div>
      </NavbarStyled>
    </MenuStyled>
  );
};

const MenuStyled = styled.aside``;

const NavbarStyled = styled.nav`
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

const BurgerButtonStyled = styled.button`
  height: 35px;
  width: 35px;
  padding: 5px;
  margin: 10px;
  position: fixed;
  z-index: 25;
  background: rgba(15, 15, 15, 0.4);
  border-radius: 5px;
  transition: transform 250ms ease-in-out;

  .burger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    span {
      height: 3px;
      width: 100%;
      background: var(--contrast);
      border-radius: 5px;
      transition: transform 250ms ease-in-out;
    }
  }

  &.open {
    transform: translateX(300px);

    & .burger {
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(2) {
        transform: scale(0);
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
`;

export default Menu;
