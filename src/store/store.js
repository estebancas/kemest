import Vue from 'vue';
import Vuex from 'vuex';
import Globals from './Globals/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Globals,
    }
});