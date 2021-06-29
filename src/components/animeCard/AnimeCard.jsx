import { useHistory } from 'react-router-dom';

import { AnimeContent, Image, ImageContainer, Title } from './styles';

const AnimeCard = ({ mal_id: id, title, image_url: image }) => {
  const history = useHistory();

  const handleAnime = () => {
    history.push(`/anime/${id}`);
  };

  return (
    <AnimeContent onClick={handleAnime}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Title>{title}</Title>
    </AnimeContent>
  );
};

export default AnimeCard;
