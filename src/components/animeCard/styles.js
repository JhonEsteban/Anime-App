import styled from 'styled-components';

const AnimeContent = styled.article`
  background-color: #000;
  color: white;
  width: 100%;
  text-align: center;
  max-width: 280px;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  transition: transform ease 300ms;

  &:hover {
    transform: scale(1.1) translateY(5px);
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
