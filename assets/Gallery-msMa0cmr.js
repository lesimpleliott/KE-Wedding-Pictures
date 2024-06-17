import{p as m,j as t,u as p,r as l,d as i,N as c}from"./index-D9VNWUm-.js";import{B as x}from"./BackgroundImage-CQ3K4IUa.js";const f=({title:n,image:e})=>t.jsxs(g,{className:"banner",children:[t.jsx("h1",{children:n}),t.jsx(x,{img:e})]}),g=m.section`
  position: relative;
  height: 50vh;
  width: 100%;
  overflow: hidden;

  h1 {
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-inline: 5vw;
    font-family: "Dancing Script", cursive;
    font-size: clamp(5rem, 10vw, 7rem);
    text-align: center;
    line-height: 0.9;
    color: var(--contrast);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`,j=()=>{const{idAlbum:n}=p(),[e,d]=l.useState(null),[s,u]=l.useState(i.albums[0]);l.useEffect(()=>{const r=i.albums.findIndex(h=>h.id===n);d(r),u(i.albums[r])},[n]);const a=e!==null&&e>0?i.albums[e-1]:null,o=e!==null&&e<i.albums.length-1?i.albums[e+1]:null;return t.jsxs(b,{children:[s&&t.jsx(f,{title:s.title,image:`../${s.path}/lowRes/${s.cover}.webp`}),t.jsxs("section",{className:"infosContainer",children:[a&&t.jsxs(c,{to:`/gallery/${a.id}`,className:"actionBtn prev",title:`Voir ${a.title}`,children:[t.jsx("i",{className:"fa-solid fa-chevron-left"}),a.title]}),o&&t.jsxs(c,{to:`/gallery/${o.id}`,className:"actionBtn next",title:`Voir ${o.title}`,children:[t.jsx("i",{className:"fa-solid fa-chevron-right"}),o.title]})]})]})},b=m.main`
  .infosContainer {
    width: 100%;
    height: clamp(50px, 5vw, 100px);
    max-width: calc(1260px + (2 * 5vw));
    padding-inline: 5vw;
    position: relative;

    .actionBtn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      &.prev {
        left: 5vw;
      }
      &.next {
        right: 5vw;
      }

      i {
        font-size: 1.3rem;
      }

      &:hover {
        color: var(--secondColor);
        transition: color 250ms ease-out;
        i {
          color: var(--secondColor);
          transition: color 250ms ease-out;
        }
      }
    }
  }
`;export{j as default};
