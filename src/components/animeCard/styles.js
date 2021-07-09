import styled from 'styled-components';

const AnimeContent = styled.article`
  width: 100%;
  max-width: 280px;
  margin: 0 auto 20px;
  color: white;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: transform ease 300ms;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.figure`
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  max-height: 395px;
`;

export { AnimeContent, ImageContainer, Image };
