module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/_global.scss";`
            }
        }
    },
    devServer: {
        host: '0.0.0.0'
    }
};