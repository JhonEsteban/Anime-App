import urlBase from '../urlBase';

import { getAnimes } from '../../animes/middlewares';
import { getMangas } from '../../mangas/middlewares';

const resources = ['top/anime', 'top/manga', 'top/characters'];
const urls = resources.map((resource) => `${urlBase}/${resource}`);

const loadAllData = () => {
  return async (dispatch) => {
    const fetchData = (url) => fetch(url).then((response) => response.json());

    Promise.all(urls.map(fetchData)).then(([animes, mangas]) => {
      dispatch(getAnimes(animes.top));
      dispatch(getMangas(mangas.top));
    });
  };
};

export default loadAllData;
