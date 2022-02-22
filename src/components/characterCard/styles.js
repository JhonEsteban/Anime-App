import styled from 'styled-components';

const AnimeContent = styled.article`
  min-width: 280px;
  margin: 0;
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
  height: 370px;
`;

export { AnimeContent, ImageContainer, Image };
