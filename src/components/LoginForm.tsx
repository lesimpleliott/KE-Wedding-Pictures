import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setPassword } from "../redux/app.slice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    const pwdInput = document.getElementById("pwdInput") as HTMLInputElement;
    const visibleIcon = document.querySelector("#visibleIcon i") as HTMLElement;

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
    e.preventDefault();
    const pwdInput = document.getElementById("pwdInput") as HTMLInputElement;
    const loginForm = document.getElementById("loginForm") as HTMLFormElement;

    if (pwdInput.value === import.meta.env.VITE_KATELIOPWD) {
      dispatch(setPassword(pwdInput.value));
      sessionStorage.setItem("password", pwdInput.value);
      navigate("/home");
    } else {
      pwdInput.value = "";
      pwdInput.placeholder = "Mot de passe incorrect";
      loginForm.classList.add("error");
      setTimeout(() => {
        pwdInput.placeholder = "Mot de passe";
        loginForm.classList.remove("error");
      }, 1000);
    }
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} id="loginForm">
      <input type="password" id="pwdInput" placeholder="Mot de passe" />
      <button
        type="button"
        value="hidden"
        id="visibleIcon"
        onClick={toggleVisibility}
      >
        <i className="fa-solid fa-eye"></i>
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
  &.error {
    animation: shake 250ms ease-in-out;
  }

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

  #visibleIcon,
  #passwordSubmit {
    height: 100%;
    position: absolute;
    user-select: none;
  }
  #visibleIcon {
    left: 10px;
    i {
      color: var(--mainColor-light);
      transition: color 250ms;
      &:hover {
        color: var(--mainColor);
      }
    }
  }
  #passwordSubmit {
    color: var(--secondColor);
    right: 10px;
    i {
      color: var(--secondColor-light);
      transition: color 250ms ease-in-out;
      &:hover {
        color: var(--secondColor);
      }
    }
  }
`;

export default LoginForm;
