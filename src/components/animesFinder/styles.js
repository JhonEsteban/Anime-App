import styled from 'styled-components';

const FormSearch = styled.form`
  /* border: 1px solid red; */
  /* padding-left: 10px;
  padding-right: 10px; */
  /* margin: 30px auto; */
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
