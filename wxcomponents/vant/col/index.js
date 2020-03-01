<<<<<<< HEAD
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter(gutter) {
            const padding = `${gutter / 2}px`;
            const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';
            if (style !== this.data.style) {
                this.set({ style });
            }
        }
    }
});
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter(gutter) {
            const padding = `${gutter / 2}px`;
            const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';
            if (style !== this.data.style) {
                this.set({ style });
            }
        }
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
