import { loadMicroApp } from "qiankun";

const SFMICROFRONT = {
    use(fn) {
        if (typeof fn === 'function') {
            fn.call(this)
        } else {
            if (process.env.NODE_ENV !== 'production')
                throw new Error('插件必须是方法')
        }
        return this;
    },
    core: {
        loadMicroApp
    }
}

const inCommonJsEnv = typeof exports === 'object' && typeof module === 'object';
const inAmdEnv = typeof define === 'function' && define.amd;
if (!inCommonJsEnv && !inAmdEnv) window.SFMICROFRONT = SFMICROFRONT;

export default SFMICROFRONT;