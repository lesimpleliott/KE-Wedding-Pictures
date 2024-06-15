import{p as a,j as t,N as c,d,r as i}from"./index-DgHyoYde.js";import{B as m}from"./BackgroundImage-DMlrCwmB.js";const p=({imageCount:e,downloadLink:n})=>t.jsx(f,{className:"hoverBox",children:t.jsxs("div",{className:"content",children:[t.jsxs("div",{className:"actions",children:[t.jsx(c,{to:"/gallery",children:t.jsx("i",{className:"fa-solid fa-eye"})}),t.jsx("a",{href:n,download:!0,children:t.jsx("i",{className:"fa-solid fa-download"})})]}),t.jsxs("p",{className:"text",children:[t.jsx("i",{className:"fa-regular fa-image"}),e," photos"]})]})}),f=a.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  background: var(--hoverCardBackground);
  opacity: 0;
  transition: opacity 400ms ease-in;

  .content {
    height: 65%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .actions {
      display: flex;
      gap: 0.5rem;

      button,
      a {
        padding: 0.75rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          font-size: 2.5rem;
          color: var(--mainColor-opacity);
          transition: color 250ms ease-in;
        }

        &:hover {
          i {
            color: var(--mainColor);
          }
        }
      }
    }
    .text {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-size: 0.9rem;
      font-style: italic;
      i {
        color: var(--mainColor);
      }
    }
  }
`,x=({album:e})=>t.jsxs(g,{children:[t.jsxs("div",{className:"imageWrapper",children:[t.jsx("img",{className:"cover",src:`${e.path}/lowRes/${e.cover}`,alt:`Photos de l'album ${e.title}`}),t.jsx(p,{imageCount:e.images.length,downloadLink:e.downloadLink})]}),t.jsx("h2",{className:"title",children:e.title})]}),g=a.article`
  display: flex;
  flex-direction: column;

  .imageWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border-radius: 10px;

    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      .hoverBox {
        opacity: 1;
        transition: opacity 400ms ease-out;
      }

      & + .title {
        font-weight: 600;
        letter-spacing: 0.2em;
        transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
      }
    }
  }

  .title {
    font-size: 1rem;
    height: fit-content;
    padding-top: 0.5rem;
    text-align: center;
    transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
  }
`,u=()=>t.jsx(h,{id:"albumsContainer",children:d.albums.map(e=>t.jsx(x,{album:e},e.id))}),h=a.section`
  width: 100%;
  max-width: calc(1260px + 5vw);
  padding-block: clamp(2vw, 40px, 5vw);
  padding-inline: 5vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  column-gap: 2vw;
  row-gap: clamp(2vw, 20px, 5vw);
`,v=({linky:e,className:n})=>{const[s,r]=i.useState(!1);return i.useEffect(()=>{const o=setInterval(()=>{r(l=>!l)},4e3);return()=>clearInterval(o)},[]),t.jsx(b,{href:e,children:t.jsx("span",{className:`btn ${s?"jumpButton":""}`,children:t.jsx("i",{className:`icon ${n}`})})})},b=a.a`
  --size: 70px;
  --arrowsize: 1.7rem;

  /* display: inline-block; */
  color: var(--contrast);

  .btn {
    height: var(--size);
    width: var(--size);
    border-radius: 75px;
    background: rgba(78, 78, 78, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: var(--arrowsize);
    transform-origin: bottom;

    &::before {
      content: "";
      height: calc(var(--size) - 8px);
      width: calc(var(--size) - 8px);
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(78, 78, 78, 0.2);
      border-radius: 75px;
    }

    &::after {
      content: "";
      height: calc(var(--size) - 20px);
      width: calc(var(--size) - 20px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: solid 2px var(--contrast);
      border-radius: 75px;
    }
  }

  .icon {
    color: var(--contrast);
    font-size: 100%;
  }

  .jumpButton {
    animation-name: jumpButton;
    animation-duration: 1000ms;
  }
  @keyframes jumpButton {
    0% {
      transform: translateY(0) scale(1, 1);
    }
    10% {
      transform: translateY(0) scale(1.3, 0.8);
    }
    11% {
      transform: translateY(0) scale(0.7, 1.2);
      animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    39% {
      transform: translateY(-50px) scale(1);
      animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    40% {
      transform: translateY(-50px) scale(1);
    }
    41% {
      transform: translateY(-50px) scale(1);
      animation-timing-function: cubic-bezier(1, 0, 1, 1);
    }
    69% {
      transform: translateY(0px) scale(1, 1);
      animation-timing-function: cubic-bezier(1, 0, 1, 1);
    }
    70% {
      transform: translateY(0) scale(1.5, 0.4);
    }
    80% {
      transform: translateY(0) scale(0.8, 1.2);
    }
    90% {
      transform: translateY(0) scale(1.1, 0.8);
    }
    100% {
      transform: translateY(0) scale(1, 1);
    }
  }
`,j=()=>t.jsxs(w,{children:[t.jsx(m,{img:"./KE_mainCover.webp"}),t.jsx("div",{className:"banner",children:t.jsx("img",{src:"./logos/LogoKE_WhitePink_V2_RVB.svg",alt:""})}),t.jsx(v,{linky:"#albumsContainer",className:"fa-solid fa-angles-down"})]}),w=a.section`
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  .banner {
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(78, 78, 78, 0.3);
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20vw;
      min-width: 250px;
      max-height: 300px;
    }

    h1 {
      font-size: 3rem;
      color: #fff;

      &::after {
        content: "";
        display: block;
        width: 100px;
        height: 2px;
        background-color: #fff;
        margin: 0 auto;
      }
    }

    h2 {
      margin-top: 8px;
      font-size: 2rem;
      color: #fff;
      font-weight: 400;
    }
  }
`,B=()=>t.jsxs(y,{children:[t.jsx(j,{}),t.jsx(u,{})]}),y=a.main``;export{B as default};
