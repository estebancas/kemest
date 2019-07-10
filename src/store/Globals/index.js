import { actions as globalActions, mutations as globalMutations } from './Globals'

export default {
    namespaced: true,
    state: {
        device: {}
    },
    actions: {
        ...globalActions
    },
    mutations: {
        ...globalMutations
    }
};