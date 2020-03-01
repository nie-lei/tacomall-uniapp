<<<<<<< HEAD
import { VantComponent } from '../common/component';
VantComponent({
    props: {
        info: null,
        name: String,
        size: String,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
});
=======
import { VantComponent } from '../common/component';
VantComponent({
    props: {
        info: null,
        name: String,
        size: String,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
