import{p as i,u as l,j as e}from"./index-Bxyo5PoG.js";import{B as r}from"./BackgroundImage-BwggRc9T.js";const d=()=>{const s=l(),n=()=>{const o=document.getElementById("pwdInput"),t=document.getElementById("visibleIcon");o.type==="password"?(o.type="text",t.classList.remove("fa-eye-slash"),t.classList.add("fa-eye")):(o.type="password",t.classList.remove("fa-eye"),t.classList.add("fa-eye-slash"))},a=o=>{o.preventDefault();const t=document.getElementById("pwdInput");t.value==="katelio"?s("/home"):(t.value="",t.placeholder="Mot de passe incorrect")};return e.jsxs(p,{onSubmit:a,children:[e.jsx("input",{type:"password",id:"pwdInput",placeholder:"Mot de passe"}),e.jsx("button",{type:"button",value:"hidden",id:"toggleVisibilityBtn",onClick:n,children:e.jsx("i",{className:"fa-solid fa-eye",id:"visibleIcon"})}),e.jsx("button",{type:"submit",id:"passwordSubmit",children:e.jsx("i",{className:"fa-regular fa-paper-plane"})})]})},p=i.form`
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
`,u=()=>e.jsxs(c,{children:[e.jsx(r,{img:"./KE_mainCover.webp",blur:!0}),e.jsx("img",{src:"./logos/LogoKE_WhitePink_NoDate_V2_RVB.svg",alt:"Katherine & Eliott - Logo",className:"logo"}),e.jsx(d,{})]}),c=i.main`
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
`;export{u as default};
