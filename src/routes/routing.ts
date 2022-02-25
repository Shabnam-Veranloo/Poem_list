import Home from '../pages/home'
import Favorite from '../pages/favorite'
import DetailPage from '../pages/detailPage'



const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/favorite',
    component: Favorite,
  },
  {
    path: '/detail',
    component: DetailPage,
  },

];

export default routes;

