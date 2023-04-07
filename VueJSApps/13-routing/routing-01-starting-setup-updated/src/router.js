import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'teams-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // for more reusable component - TeamMembers
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('Users Before Enter');
        console.log(to, from);
        next();
        /* if (from.path == '/teams/t1') {
          next('/teams')
        }else{
          next(); 
        } */
      },
    },
    { name: 'not-found', path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    //console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (_A, _B, next) {
  console.log('Global beforeEach');
  /* console.log(to, from); */
  /* console.log(to.params.teamId); */
  next();

  /* next(true);*/ /* also confirm it!!! */
  /* if (to.meta.needAuth) {
    next();
  } else {
    console.log('Meta need Authentication!');
    next();
  } */

  /* next(false); */
  /* if (to.name === 'teams-members') {
      next();
    } else {
      next({ name: 'teams-members', params: { teamId: 't2' } });
    } */
});

router.afterEach(function (to, from) {
  //sending analytics data to server
  console.log('Global afterEach');
  console.log(to, from);
  // no needed next becouse is after !
});

export default router;
