import { useHistory } from 'react-router-dom';

import { AnimeContent, Image, ImageContainer } from './styles';

const CharacterCard = ({ mal_id: id, title, image_url: image }) => {
  const history = useHistory();

  const handleAnime = () => {
    history.push(`/character/${id}`);
  };

  return (
    <AnimeContent onClick={handleAnime}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
    </AnimeContent>
  );
};

export default CharacterCard;
