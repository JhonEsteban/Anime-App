import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  AnimeData,
  AnimePage,
  SingleAnime,
  Image,
  Trailer,
  Button,
  Details,
} from './styles';

import { deleteSingleAnime, getAnimeById } from '../../actions/animesActions';

const Anime = ({ history }) => {
  const dispatch = useDispatch();
  const { animeId } = useParams();

  const { anime } = useSelector((state) => state.animes);
  const {
    title,
    image_url: image,
    synopsis,
    trailer_url: trailer,
    title_english: titleEnglish,
    episodes,
    score,
    duration,
  } = anime;

  useEffect(() => {
    dispatch(getAnimeById(animeId));
  }, [animeId]);

  const handleReturn = () => {
    dispatch(deleteSingleAnime());
    history.push('/animes');
  };

  return (
    <AnimePage>
      <Button onClick={handleReturn} type='button'>
        Regresar
      </Button>

      <SingleAnime>
        <Image src={image} alt={title} />

        <Details>
          <h1>{title}</h1>
          <h4>{titleEnglish}</h4>

          <p>
            <strong>Episodios: </strong>
            <span>{episodes}</span>
          </p>

          <p>
            <strong>Puntaje: </strong>
            <span>{score}</span>
          </p>

          <p>
            <strong>Duración: </strong>
            <span>{duration}</span>
          </p>
        </Details>

        <AnimeData>
          <h3>Sinopsis:</h3>
          <p>{synopsis}</p>
        </AnimeData>

        <Trailer>
          <iframe
            width='560'
            height='315'
            src={trailer}
            title='YouTube video player'
            allow='accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            frameBorder='0'
          ></iframe>
        </Trailer>
      </SingleAnime>
    </AnimePage>
  );
};
export default Anime;
