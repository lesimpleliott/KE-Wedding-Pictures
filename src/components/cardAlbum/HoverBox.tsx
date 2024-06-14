import { NavLink } from "react-router-dom";
import styled from "styled-components";

type HoverBoxProps = {
  imageCount: number;
  downloadLink: string;
};

const HoverBox = ({ imageCount, downloadLink }: HoverBoxProps) => {
  return (
    <HoverBoxstyled className="hoverBox">
      <div className="content">
        <div className="actions">
          <NavLink to="/gallery">
            <i className="fa-solid fa-eye"></i>
          </NavLink>
          <a href={downloadLink} download>
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
        <p className="text">
          <i className="fa-regular fa-image"></i>
          {imageCount} photos
        </p>
      </div>
    </HoverBoxstyled>
  );
};

const HoverBoxstyled = styled.div`
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
          font-size: 3rem;
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
    }
  }
`;

export default HoverBox;
