<<<<<<< HEAD
import { VantComponent } from '../common/component';
VantComponent({
    props: {
        show: Boolean,
        mask: Boolean,
        customStyle: String,
        duration: {
            type: [Number, Object],
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        // for prevent touchmove
        noop() { }
    }
});
=======
import { VantComponent } from '../common/component';
VantComponent({
    props: {
        show: Boolean,
        mask: Boolean,
        customStyle: String,
        duration: {
            type: [Number, Object],
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        // for prevent touchmove
        noop() { }
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
