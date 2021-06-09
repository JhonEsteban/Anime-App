import styled from 'styled-components';

const LoginContainer = styled.section`
  min-height: 100vh;
  background-color: #000;
  padding: 15px;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 320px;
  margin: auto;
  padding: 80px 0;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  outline: none;
  width: 100%;
  max-width: 340px;
  margin: 20px auto;
  padding: 13px 10px;
  border: none;
  border-radius: 3px;
  font-size: 1.3rem;
`;

const ButtonSubmit = styled.button`
  display: block;
  width: 100%;
  max-width: 340px;
  margin: 20px auto;
  padding: 13px 0;
  text-transform: uppercase;
  font-size: 1.8rem;
  border: none;
  border-radius: 5px;
  background-color: #16417a;
  color: white;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: #092954;
  }
`;

export { LoginContainer, LoginForm, Input, ButtonSubmit };
