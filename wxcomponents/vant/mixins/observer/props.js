<<<<<<< HEAD
export function observeProps(props) {
    if (!props) {
        return;
    }
    Object.keys(props).forEach(key => {
        let prop = props[key];
        if (prop === null || !('type' in prop)) {
            prop = { type: prop };
        }
        let { observer } = prop;
        prop.observer = function (...args) {
            if (observer) {
                if (typeof observer === 'string') {
                    observer = this[observer];
                }
                observer.apply(this, args);
            }
            this.set();
        };
        props[key] = prop;
    });
}
=======
export function observeProps(props) {
    if (!props) {
        return;
    }
    Object.keys(props).forEach(key => {
        let prop = props[key];
        if (prop === null || !('type' in prop)) {
            prop = { type: prop };
        }
        let { observer } = prop;
        prop.observer = function (...args) {
            if (observer) {
                if (typeof observer === 'string') {
                    observer = this[observer];
                }
                observer.apply(this, args);
            }
            this.set();
        };
        props[key] = prop;
    });
}
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
