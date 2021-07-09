import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: hsl(248deg 82% 28% / 90%);
  color: white;
  padding: 10px 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 720px) {
    padding: 0 45px;
  }

  @media screen and (min-width: 920px) {
    width: 85%;
    margin: auto;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: 60px;
  border-radius: 50%;
`;

const Options = styled.div`
  /* border: 1px solid red; */
`;

const Button = styled.button`
  background: #ccc;
  color: #000;
  margin: 0 5px;
  padding: 13px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  background: red;
  color: white;

  &:hover {
  }
`;

const ButtonLogOut = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 13px 10px;
  color: red;
  border: 1px solid red;
  background: #fff;

  &:hover {
    background: red;
    color: white;
  }
`;

export { HeaderContainer, Logo, Options, Button, ButtonLogOut, Wrapper };
