import{p as i,u as d,a as c,j as o,s as p}from"./index-DgHyoYde.js";import{B as m}from"./BackgroundImage-DMlrCwmB.js";const u=()=>{const a=d(),n=c(),r=()=>{const t=document.getElementById("pwdInput"),e=document.getElementById("visibleIcon");t.type==="password"?(t.type="text",e.classList.remove("fa-eye-slash"),e.classList.add("fa-eye")):(t.type="password",e.classList.remove("fa-eye"),e.classList.add("fa-eye-slash"))},l=t=>{t.preventDefault();const e=document.getElementById("pwdInput"),s=document.getElementById("loginForm");e.value==="toujoursplus"?(n(p(e.value)),sessionStorage.setItem("password",e.value),a("/home")):(e.value="",e.placeholder="Mot de passe incorrect",s.classList.add("error"),setTimeout(()=>{e.placeholder="Mot de passe",s.classList.remove("error")},1e3))};return o.jsxs(g,{onSubmit:l,id:"loginForm",children:[o.jsx("input",{type:"password",id:"pwdInput",placeholder:"Mot de passe"}),o.jsx("button",{type:"button",value:"hidden",id:"visibleIcon",onClick:r,children:o.jsx("i",{className:"fa-solid fa-eye"})}),o.jsx("button",{type:"submit",id:"passwordSubmit",children:o.jsx("i",{className:"fa-regular fa-paper-plane"})})]})},g=i.form`
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
      transition: color 250ms;
      &:hover {
        color: var(--secondColor);
      }
    }
  }
`,w=()=>o.jsxs(h,{children:[o.jsx(m,{img:"./KE_mainCover.webp",blur:!0}),o.jsx("img",{src:"./logos/LogoKE_WhitePink_NoDate_V2_RVB.svg",alt:"Katherine & Eliott - Logo",className:"logo"}),o.jsx(u,{})]}),h=i.main`
  width: 100vw;
  height: 100vh;
  padding-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .logo {
    width: 70vw;
    max-width: 350px;
    margin-bottom: 20px;
    position: relative;
    left: 5px;
  }
`;export{w as default};
