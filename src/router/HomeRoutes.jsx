import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/home/Home';
import FavoriteAnimes from '../pages/favoriteAnimes/FavoriteAnimes';
import SearchAnime from '../pages/searchAnime/SearchAnime';
import Anime from '../pages/anime/Anime';
import Manga from '../pages/manga/Manga';
import Character from '../pages/character/Character';

const HomeRoutes = () => (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route exact path='/favoriteAnimes' component={FavoriteAnimes} />
    <Route exact path='/searchAnime' component={SearchAnime} />
    <Route exact path='/anime/:animeId' component={Anime} />
    <Route exact path='/manga/:mangaId' component={Manga} />
    <Route exact path='/character/:characterId' component={Character} />
    <Redirect to='/home' />
  </Switch>
);

export default HomeRoutes;
