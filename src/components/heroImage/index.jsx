import { useHistory } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

import { Button, HeroContainer, HeroContent, Title } from './styles';

const HeroImage = () => {
  const history = useHistory();

  const handleSearchAnime = () => {
    history.push('/searchAnime');
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Title>Información y trailers sobre tus animes favoritos</Title>
        <Button onClick={handleSearchAnime} type='button'>
          <span>Buscar</span>
          <FaSearch />
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroImage;
