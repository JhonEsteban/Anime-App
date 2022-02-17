import styled from 'styled-components';

const LoginContainer = styled.section`
  min-height: 100vh;
  background-color: #000;
`;

const LoginForm = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 320px;
  max-height: 460px;
  text-align: center;
  margin: auto;
  padding: 0 15px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Input = styled.input`
  display: block;
  outline: none;
  width: 100%;
  max-width: 340px;
  margin: 15px auto 5px;
  padding: 13px 10px;
  border: none;
  border-radius: 3px;
  font-size: 1.3rem;
`;

export { LoginContainer, LoginForm, Input };
