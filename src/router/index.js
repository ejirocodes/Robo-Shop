import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '../home/HomePage.vue';
import Robotbuilder from '../build/RobotBuilder.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Homepage,
    },
    {
        path: '/build',
        name: 'Build',
        component: Robotbuilder,
    }
    ]
})