import Vue from 'vue';
import Router from 'vue-router';

// Components
import LandingPage from '@/views/Landing';
import About from '@/views/About';

Vue.use(Router);

export const Routes = [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/about',
        component: About
    }
];

export default new Router({
    routes: [
        ...Routes
    ]
});
