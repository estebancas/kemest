const SET_VIEWPORT_DEVICE = 'SET_VIEWPORT_DEVICE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const actions = {
    fetchViewportDevice: ({ commit }) => new Promise(resolve => {
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        let isMobile = false;

        if (innerWidth < innerHeight && innerWidth <= 768) {
            isMobile = true;
        }

        const device = { innerWidth, innerHeight, isMobile }
        commit(SET_VIEWPORT_DEVICE, device)
        resolve(device);
    }),
    showModal: ({ commit }, componentName) => commit(OPEN_MODAL, componentName),
    hideModal: ({ commit }) => commit(CLOSE_MODAL),
}

export const mutations = {
    [SET_VIEWPORT_DEVICE](state, device) {
        state.viewportDevice = device;
    },
    [OPEN_MODAL](state, componentName) {
        state.modalVisible = true;
        state.modalComponent = componentName;
    },
    [CLOSE_MODAL](state) {
        state.modalVisible = false;
        state.modalComponent = null;
    }
}