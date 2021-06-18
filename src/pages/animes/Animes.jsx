import { useSelector } from 'react-redux';

import AnimeCard from '../../components/animeCard/AnimeCard';

const Animes = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <section>
      <h1>Animes Page</h1>
      <hr />
      <p>Welcome {name}</p>

      <div>
        <AnimeCard />
      </div>
    </section>
  );
};

export default Animes;
