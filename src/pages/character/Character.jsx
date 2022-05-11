import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCharacterById } from '../../redux/characters/middlewares';
import { removeSingleCharacterAction } from '../../redux/characters/actions';

import {
  CharacterPage,
  SingleCharacter,
  Button,
  Image,
  Details,
  SingleCharacterHeading,
  CharacterData,
} from './styles';

const Character = ({ history }) => {
  const dispatch = useDispatch();
  const { characterId } = useParams();

  const { character } = useSelector((state) => state.characters);
  const { name, image_url: image, voice_actors: voices, about } = character;

  useEffect(() => {
    dispatch(getCharacterById(characterId));
  }, [characterId]);

  const handleReturn = () => {
    dispatch(removeSingleCharacterAction());
    history.goBack();
  };

  return (
    <CharacterPage>
      <SingleCharacter>
        <SingleCharacterHeading>
          <Button onClick={handleReturn} type='button'>
            Regresar
          </Button>

          <Image src={image} alt={name} />
        </SingleCharacterHeading>

        <Details>
          <h1>{name}</h1>

          <h3>Actores de doblaje</h3>

          <div>
            {voices?.length === 0 ? (
              <span>No disponibles</span>
            ) : (
              voices?.map((voice) => (
                <span key={voice.mal_id}>{voice.name}</span>
              ))
            )}
          </div>
        </Details>

        <CharacterData>
          <h3>Sobre el personaje:</h3>
          <p>{about}</p>
        </CharacterData>
      </SingleCharacter>
    </CharacterPage>
  );
};

export default Character;
