import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AnimeData, AnimePage, SingleAnime } from './styles';

import { deleteSingleAnime, getAnimeById } from '../../actions/animesActions';

const Anime = ({ history }) => {
  const dispatch = useDispatch();
  const { animeId } = useParams();

  const { anime } = useSelector((state) => state.animes);
  const { title, image_url: image, synopsis } = anime;

  useEffect(() => {
    dispatch(getAnimeById(animeId));
  }, [animeId]);

  const handleReturn = () => {
    dispatch(deleteSingleAnime());
    history.push('/animes');
  };

  return (
    <AnimePage>
      <button onClick={handleReturn} type='button'>
        Regresar
      </button>

      <SingleAnime>
        <AnimeData>
          <h1>{title}</h1>
          <img src={image} alt={title} />
          <p>{synopsis}</p>
        </AnimeData>
      </SingleAnime>
    </AnimePage>
  );
};
export default Anime;
