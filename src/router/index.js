import Vue from 'vue';
import Router from 'vue-router';

// Components
import LandingPage from '@/components/landing/landingPage';
import About from '@/components/about/about';

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
