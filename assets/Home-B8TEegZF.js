import{p as i,j as e,N as o,d,r as s,c as m}from"./index-C03lusiP.js";import{B as p}from"./BackgroundImage-G39ztkNw.js";const x=({album:t})=>e.jsx(f,{className:"hoverBox",children:e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"actions",children:[e.jsx(o,{to:`/gallery/${t.id}`,onClick:a=>{a.stopPropagation()},children:e.jsx("i",{className:"fa-solid fa-eye"})}),e.jsx("a",{href:t.downloadLink,download:!0,onClick:a=>{a.stopPropagation()},children:e.jsx("i",{className:"fa-solid fa-download"})})]}),e.jsxs("p",{className:"text",children:[e.jsx("i",{className:"fa-regular fa-image"}),t.images.length," photos"]})]})}),f=i.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  background: var(--hoverCardBackground);
  opacity: 0;
  transition: opacity 400ms ease-in;

  .content {
    height: 70%;
    width: 100%;
    padding: 2.5rem;
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
`,g=({album:t})=>e.jsxs(h,{children:[e.jsx(o,{to:`/gallery/${t.id}`,className:"imageWrapper",children:e.jsx("img",{className:"preview",src:`${t.path}/lowRes/${t.preview}.webp`,alt:`Photos de l'album ${t.title}`})}),e.jsx(x,{album:t}),e.jsx("h2",{className:"title",children:t.title})]}),h=i.article`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    &:hover {
      .hoverBox {
        opacity: 1;
        transition: opacity 400ms ease-out;
      }
      & .title {
        font-weight: 600;
        letter-spacing: 0.2em;
        transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
        z-index: 2;
      }
    }
  }
  .imageWrapper {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 5px;

    .preview {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 1rem;
    font-weight: 500;
    height: fit-content;
    padding-top: 0.5rem;
    text-align: center;
    transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
  }
`,u=()=>e.jsx(v,{id:"albumsContainer",children:d.albums.map(t=>e.jsx(g,{album:t},t.id))}),v=i.section`
  width: 100%;
  max-width: calc(1260px + 5vw);
  padding-block: clamp(2vw, 40px, 5vw);
  padding-inline: 5vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  column-gap: 2vw;
  row-gap: clamp(2vw, 20px, 5vw);
`,w=({linky:t,className:a})=>{const[n,r]=s.useState(!1);return s.useEffect(()=>{const l=setInterval(()=>{r(c=>!c)},4e3);return()=>clearInterval(l)},[]),e.jsx(b,{href:t,children:e.jsx("span",{className:`btn ${n?"jumpButton":""}`,children:e.jsx("i",{className:`icon ${a}`})})})},b=i.a`
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
`,j=()=>e.jsxs(y,{children:[e.jsx(p,{img:"./KE_mainCover.webp"}),e.jsx("div",{className:"banner",children:e.jsx("img",{src:"./logos/LogoKE_WhitePink_V2_RVB.svg",alt:""})}),e.jsx(w,{linky:"#albumsContainer",className:"fa-solid fa-angles-down"})]}),y=i.section`
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
    background-color: rgba(0, 0, 0, 0.2);
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
  }
`,k=()=>{const t=m();return s.useEffect(()=>{if(t.hash){const a=t.hash.substring(1),n=document.getElementById(a);n&&n.scrollIntoView({behavior:"smooth"})}},[t]),e.jsxs(z,{children:[e.jsx(j,{}),e.jsx(u,{})]})},z=i.main``;export{k as default};
