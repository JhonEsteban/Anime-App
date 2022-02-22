import styled from 'styled-components';

const HomePage = styled.section`
  margin-top: 20px;
  margin-bottom: 100px;
`;

const HomeSection = styled.section`
  margin-bottom: 20px;

  @media screen and (min-width: 720px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 920px) {
    margin-bottom: 60px;
  }
`;

const HomeSectionTitle = styled.h2`
  margin-bottom: 0;
  padding: 0 20px;
  font-size: 2.8rem;
  font-family: RobotoRegular, Arial, Helvetica;

  @media screen and (min-width: 720px) {
    padding: 0 45px;
  }

  @media screen and (min-width: 920px) {
    width: 85%;
    margin: auto;
  }
`;

const HomeSectionContent = styled.div`
  height: 450px;
  padding: 0 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  gap: 40px;

  @media screen and (min-width: 720px) {
    padding: 0 45px;
  }

  @media screen and (min-width: 920px) {
    width: 85%;
    margin: auto;
  }
`;

export { HomePage, HomeSection, HomeSectionTitle, HomeSectionContent };
