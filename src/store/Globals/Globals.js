const SET_VIEWPORT_DEVICE = 'SET_VIEWPORT_DEVICE';

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
    })
}

export const mutations = {
    [SET_VIEWPORT_DEVICE](state, device) {
        state.viewportDevice = device;
    }
}