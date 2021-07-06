import styled from 'styled-components';

const SearchAnimeP = styled.section`
  min-height: 88vh;
  margin-top: 100px;
`;

const Container = styled.div`
  display: grid;

  @media screen and (min-width: 720px) {
    width: 80%;
    grid-template-columns: 1fr 1fr;
    margin: 30px auto;
  }
`;

const Title = styled.h1`
  margin-top: 20vh;
  text-align: center;
`;

export { SearchAnimeP, Container, Title };
