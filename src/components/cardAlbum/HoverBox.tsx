import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AlbumType } from "../../types/albumType";

const HoverBox = ({ album }: { album: AlbumType }) => {
  return (
    <HoverBoxstyled className="hoverBox">
      <div className="content">
        <div className="actions">
          <NavLink
            to={`/gallery/${album.id}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <i className="fa-solid fa-eye"></i>
          </NavLink>
          <a
            href={album.downloadLink}
            download
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
        <p className="text">
          <i className="fa-regular fa-image"></i>
          {album.images.length} photos
        </p>
      </div>
    </HoverBoxstyled>
  );
};

const HoverBoxstyled = styled.div`
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
`;

export default HoverBox;
