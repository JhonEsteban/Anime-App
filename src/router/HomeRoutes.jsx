import { Redirect, Route, Switch } from 'react-router';

import Layout from '../components/layout/Layout';

import Animes from '../pages/animes/Animes';
import FavoriteAnimes from '../pages/favoriteAnimes/FavoriteAnimes';
import SearchAnime from '../pages/searchAnime/SearchAnime';
import Anime from '../pages/anime/Anime';

const HomeRoutes = () => (
  <Layout>
    <Switch>
      <Route exact path='/animes' component={Animes} />
      <Route exact path='/favoriteAnimes' component={FavoriteAnimes} />
      <Route exact path='/searchAnime' component={SearchAnime} />
      <Route exact path='/anime/:animeId' component={Anime} />
      <Redirect to='/animes' />
    </Switch>
  </Layout>
);

export default HomeRoutes;
