import styled from 'styled-components';

const FormSearch = styled.form`
  text-align: center;

  @media screen and (min-width: 720px) {
    text-align: initial;
  }
`;

const InputSearch = styled.input`
  outline: none;
  width: 100%;
  max-width: 340px;
  margin: 20px auto;
  padding: 13px 10px;
  border: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1.3rem;
`;

const ButtonSearch = styled.button`
  width: 100%;
  max-width: 340px;
  margin: 0 auto 30px;
  padding: 13px 0;
  text-transform: capitalize;
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 5px;
  background-color: hsl(248deg 82% 28% / 90%);
  color: #fff;
  cursor: pointer;
`;

export { FormSearch, InputSearch, ButtonSearch };
