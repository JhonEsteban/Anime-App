import { useHistory } from 'react-router-dom';

import { AnimeContent, Image, ImageContainer } from './styles';

const MangaCard = ({ mal_id: id, title, image_url: image }) => {
  const history = useHistory();

  const handleAnime = () => {
    history.push(`/manga/${id}`);
  };

  return (
    <AnimeContent onClick={handleAnime}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
    </AnimeContent>
  );
};

export default MangaCard;
