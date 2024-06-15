import styled from "styled-components";
import AlbumBanner from "../layouts/AlbumBanner";
import GalleryPhotos from "../layouts/GalleryPhotos";

const Gallery = () => {
  return (
    <GalleryStyled>
      <AlbumBanner
        title="Cérémonie civile"
        image="./photos/Ceremonie-civile/hd/MariageKE_Ceremonie-civile_44.jpg"
      />

      <section className="infosContainer">
        <a href="#" className="actionBtn" title="album précédent">
          <i className="fa-solid fa-chevron-left"></i>
          Wedshoots
        </a>
        <a href="#" className="actionBtn" title="album suivant">
          Cérémonie laïque
          <i className="fa-solid fa-chevron-right"></i>
        </a>
      </section>
      <GalleryPhotos />
    </GalleryStyled>
  );
};

const GalleryStyled = styled.main`
  .infosContainer {
    width: 100%;
    height: clamp(50px, 5vw, 100px);
    max-width: calc(1260px + (2 * 5vw));
    padding-inline: 5vw;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .actionBtn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      i {
        font-size: 1.3rem;
      }

      &:hover {
        color: var(--secondColor);
        transition: color 250ms ease-in-out;
        i {
          color: var(--secondColor);
          transition: color 250ms ease-in-out;
        }
      }
    }
  }
`;

export default Gallery;
