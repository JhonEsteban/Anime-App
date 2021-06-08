import AnimeCard from '../../components/animeCard/AnimeCard';
import AnimesFinder from '../../components/animesFinder/AnimesFinder';

const SearchAnime = () => (
  <section>
    <h1>Search Anime Page</h1>

    <div>
      <div>
        <AnimesFinder />
      </div>

      <div>
        <AnimeCard />
      </div>
    </div>
  </section>
);

export default SearchAnime;
