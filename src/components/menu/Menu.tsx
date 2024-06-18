import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import MenuBar from "./MenuBar";

const Menu = () => {
  return (
    <MenuStyled>
      <MenuBar />
      <BurgerButton />
    </MenuStyled>
  );
};

const MenuStyled = styled.aside``;
export default Menu;
