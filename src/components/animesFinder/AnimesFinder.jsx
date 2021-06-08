const AnimesFinder = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch}>
      <p>
        <input
          type='search'
          name='searchAnime'
          placeholder='Busque su anime favorito'
        />
      </p>

      <button type='submit'>Buscar</button>
    </form>
  );
};
export default AnimesFinder;
