import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 340px;
  margin: 18px auto 15px;
  padding: 13px 0;
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.background || '#16417a'};
  color: ${(props) => props.color || '#fff'};
  cursor: pointer;
  transition: background-color 200ms;

  ${(props) =>
    props.btnProvider &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-left: 8px;
        font-size: 1.7rem;
      }
    `}

  &:hover {
    background-color: ${(props) => props.hoverBackground || '#092954'};
    color: ${(props) => props.hoverColor || '#fff'};
  }
`;

export default Button;
