const utlis = {
    noop() { },
    isFunction(fn) {
        return typeof fn === 'function'
    }
};

if (window.SFMICROFRONT) {
    window.SFMICROFRONT.use(function () {
        this.utlis = utlis
    })
}

export default utlis