import { actions as globalActions, mutations as globalMutations } from './Globals'

export default {
    namespaced: true,
    state: {
        device: {},
        modalVisible: false,
        modalComponent: 'none',
    },
    actions: {
        ...globalActions
    },
    mutations: {
        ...globalMutations
    },
    getters: {
        modalComponent: state => state.modalComponent,
        modalVisible: state => state.modalVisible,
    }
};