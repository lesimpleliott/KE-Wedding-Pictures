import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
  const navigate = useNavigate();

  const toggleVisibility = () => {
    const pwdInput = document.getElementById("pwdInput") as HTMLInputElement;
    const visibleIcon = document.getElementById("visibleIcon") as HTMLElement;

    if (pwdInput.type === "password") {
      pwdInput.type = "text";
      visibleIcon.classList.remove("fa-eye-slash");
      visibleIcon.classList.add("fa-eye");
    } else {
      pwdInput.type = "password";
      visibleIcon.classList.remove("fa-eye");
      visibleIcon.classList.add("fa-eye-slash");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // FONCTION PROVISOIRE  / A MODIFIER
    e.preventDefault();
    const pwdInput = document.getElementById("pwdInput") as HTMLInputElement;

    if (pwdInput.value === "katelio") {
      navigate("/home");
    } else {
      pwdInput.value = "";
      pwdInput.placeholder = "Mot de passe incorrect";
    }
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <input type="password" id="pwdInput" placeholder="Mot de passe" />
      <button
        type="button"
        value="hidden"
        id="toggleVisibilityBtn"
        onClick={toggleVisibility}
      >
        <i className="fa-solid fa-eye" id="visibleIcon"></i>
      </button>
      <button type="submit" id="passwordSubmit">
        <i className="fa-regular fa-paper-plane"></i>
      </button>
    </LoginFormStyled>
  );
};

//styled component
const LoginFormStyled = styled.form`
  position: relative;

  input {
    height: 35px;
    width: 60vw;
    max-width: 250px;
    padding: 8px;
    border-radius: 50px;
    border: none;
    text-align: center;
    color: var(--secondColor);

    &::placeholder {
      font-style: italic;
      font-weight: 300;
    }
  }

  #toggleVisibilityBtn,
  #passwordSubmit {
    height: 100%;
    position: absolute;
    user-select: none;
  }
  #toggleVisibilityBtn {
    color: var(--mainColor-light);
    left: 10px;
  }
  #passwordSubmit {
    color: var(--secondColor);
    right: 10px;
  }
`;

export default LoginForm;
