import styled from 'styled-components';

import heroImage from '../../assets/images/hero-image.png';

const HeroContainer = styled.section`
  width: 100%;
  min-height: 88vh;
  background-color: #000;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
  margin-top: 80px;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* text-align: left; */
    padding: 20px 45px;
  }
`;

const DesktopImage = styled.div`
  @media screen and (min-width: 720px) {
    width: 100%;
    height: 100vh;
    background-color: red;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${heroImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const HeroContent = styled.div`
  /* position: relative; */
  /* z-index: 100; */
  /* background-color: black; */
`;

const Title = styled.h1`
  letter-spacing: 1px;
  font-size: 2.2rem;
  line-height: 30px;

  @media screen and (min-width: 720px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3.8rem;
    line-height: 45px;
  }
`;

const Button = styled.button`
  margin: auto;
  padding: 11px 45px;
  font-size: 1.8rem;
  background: hsl(248deg 82% 28% / 90%);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }

  &:hover {
    background: hsl(248deg 82% 28% / 60%);
  }
`;
export { HeroContainer, Title, HeroContent, Button, DesktopImage };
