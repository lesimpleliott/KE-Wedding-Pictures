import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BurgerButton from "../components/menu/BurgerButton";
import Navbar from "../components/menu/Navbar";
import { setMenuIsOpen, setPassword } from "../redux/app.slice";
import { RootState } from "../store";

const Menu = () => {
  const menuIsOpen = useSelector((state: RootState) => state.app.menuIsOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <BurgerButton onClick={handleClick} menuIsOpen={menuIsOpen} />
      <Navbar
        menuIsOpen={menuIsOpen}
        handleClick={handleClick}
        logout={logout}
      />
    </MenuStyled>
  );
};

const MenuStyled = styled.aside``;

export default Menu;
