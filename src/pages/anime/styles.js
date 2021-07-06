import styled from 'styled-components';

const AnimePage = styled.section`
  min-height: 88vh;
  margin-top: 100px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SingleAnime = styled.article`
  display: grid;
  row-gap: 10px;

  @media screen and (min-width: 720px) {
    grid-template-columns: 40% 1fr;
    row-gap: 40px;
  }

  @media screen and (min-width: 920px) {
    width: 70%;
    margin: auto;
  }
`;

const Image = styled.img`
  max-height: 350px;
  margin: 30px 0;

  @media screen and (min-width: 720px) {
    justify-self: start;
    align-self: center;
  }
`;

const Details = styled.div`
  font-size: 1.8rem;

  @media screen and (min-width: 720px) {
    justify-self: start;
    align-self: center;
  }
`;

const AnimeData = styled.div`
  font-size: 1.8rem;
  line-height: 30px;
  word-wrap: break-word;
  grid-column: 1 / -1;
`;

const Trailer = styled.div`
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  grid-column: 1 / -1;

  > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
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

export { AnimePage, SingleAnime, Details, AnimeData, Image, Trailer, Button };
