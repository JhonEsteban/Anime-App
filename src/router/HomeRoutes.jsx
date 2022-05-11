import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Anime from '../pages/Anime';
import Manga from '../pages/Manga';
import Character from '../pages/Character';
import Favorites from '../pages/Favorites';
import SearchAnime from '../pages/SearchAnime';

const HomeRoutes = () => (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route exact path='/anime/:animeId' component={Anime} />
    <Route exact path='/manga/:mangaId' component={Manga} />
    <Route exact path='/character/:characterId' component={Character} />
    <Route exact path='/favorites' component={Favorites} />
    <Route exact path='/searchAnime' component={SearchAnime} />
    <Redirect to='/home' />
  </Switch>
);

export default HomeRoutes;
