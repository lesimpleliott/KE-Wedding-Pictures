import styled from "styled-components";

type CallToActionProps = {
  dwlLink: string;
  text: string;
  icon: string;
};

const CallToAction = ({ dwlLink, text, icon }: CallToActionProps) => {
  return (
    <CallToActionStyled href={dwlLink} download>
      <div className="wrapper">
        <div className="text">{text}</div>
        <div className="sign">
          <i className={icon}></i>
        </div>
      </div>
    </CallToActionStyled>
  );
};

const CallToActionStyled = styled.a`
  .text,
  .sign i {
    color: white;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 40px;
    background-color: var(--mainColor);

    .sign {
      width: 40px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }

    .text {
      padding: 0;
      max-width: 0px;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.9rem;
    }

    &:hover {
      .text {
        padding: 0 10px 0 20px;
        max-width: 1000px;
        transition: max-width 400ms ease-in-out, padding 200ms ease-in-out;
      }
    }
  }
`;

export default CallToAction;
