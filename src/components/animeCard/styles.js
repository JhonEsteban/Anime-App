import styled from 'styled-components';

const AnimeContent = styled.article`
  background-color: #000;
  color: white;
  width: 100%;
  text-align: center;
  max-width: 270px;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageContainer = styled.figure`
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  max-height: 350px;
`;

const Title = styled.h3`
  color: white;
  margin: 0;
  padding: 10px 5px;
`;

export { AnimeContent, ImageContainer, Image, Title };
