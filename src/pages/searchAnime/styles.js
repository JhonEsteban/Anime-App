import styled from 'styled-components';

const SearchAnimeP = styled.section`
  min-height: 88vh;
  margin-top: 125px;
  padding: 0 20px;
`;

const Container = styled.div`
  display: grid;

  @media screen and (min-width: 720px) {
    width: 88%;
    margin: auto;
    grid-template-columns: 1fr 2fr;
  }
`;

const Title = styled.h1`
  margin-top: 20vh;
  text-align: center;
`;

const AnimesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonReturn = styled.button`
  font-family: RobotoRegular, Arial, Helvetica;
  margin: 0 5px;
  padding: 13px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  background: #208397;
  margin: 6px 0;
  color: white;
`;

export { SearchAnimeP, Container, Title, AnimesContainer, ButtonReturn };
