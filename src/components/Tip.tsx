import styled from "styled-components";

type KeyboardProps = {
  keys: { icon?: string; text?: string }[];
  description: string;
};

const Tip = ({ keys, description }: KeyboardProps) => {
  return (
    <TipStyled>
      <div className="keyboard">
        {keys.map((key, index) => (
          <span key={index} className="key">
            {key.icon ? <i className={key.icon}></i> : key.text}
          </span>
        ))}
      </div>
      <p className="description">{description}</p>
    </TipStyled>
  );
};

const TipStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  .keyboard {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .key {
      border: solid var(--mainColor) 1px;
      padding: 10px;
      border-radius: 10px;
      min-width: 50px;
      max-height: 50px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      i {
        font-size: 1.5rem;
      }
    }
  }

  .description {
    width: 60%;
    padding: 10px;
    font-size: 0.9rem;
    line-height: 1.2;
  }
`;

export default Tip;
