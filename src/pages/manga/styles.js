import styled from 'styled-components';
import fadeIn from '../../assets/styles/animations';

const MangaPage = styled.section`
  min-height: 88vh;
  margin-top: 100px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SingleManga = styled.article`
  display: grid;
  row-gap: 10px;

  @media screen and (min-width: 720px) {
    grid-template-columns: 40% 1fr;
    row-gap: 40px;
  }

  @media screen and (min-width: 920px) {
    grid-template-columns: 25% 1fr;
    width: 87%;
    margin: auto;
  }
`;

const SingleAnimeHeading = styled.div`
  ${fadeIn({ time: '2s' })}
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 13px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  background: #208397;
  color: white;
`;

const Image = styled.img`
  max-height: 350px;
  margin: 50px 0 0;
  border-radius: 4px;

  @media screen and (min-width: 720px) {
    justify-self: start;
    align-self: center;
  }
`;

const Details = styled.div`
  font-size: 1.8rem;
  ${fadeIn({ time: '2s' })}

  @media screen and (min-width: 720px) {
    justify-self: start;
    align-self: center;
  }
`;

const MangaData = styled.div`
  font-size: 1.8rem;
  line-height: 30px;
  word-wrap: break-word;
  grid-column: 1 / -1;
  ${fadeIn({ time: '2s' })}
`;

export {
  MangaPage,
  SingleManga,
  SingleAnimeHeading,
  Button,
  Image,
  Details,
  MangaData,
};
