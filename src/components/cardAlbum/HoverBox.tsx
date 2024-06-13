import styled from "styled-components";

const HoverBox = ({ imageCount }: { imageCount: number }) => {
  return (
    <HoverBoxstyled className="hoverBox">
      <div className="content">
        <div className="actions">
          <button>
            <i className="fa-solid fa-eye"></i>
          </button>
          <button>
            <i className="fa-solid fa-download"></i>
          </button>
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

      button {
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
