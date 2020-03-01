<<<<<<< HEAD
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
        setGutter() {
            const { gutter } = this.data;
            const margin = `-${Number(gutter) / 2}px`;
            const style = gutter
                ? `margin-right: ${margin}; margin-left: ${margin};`
                : '';
            this.set({ style });
            this.getRelationNodes('../col/index').forEach(col => {
                col.setGutter(this.data.gutter);
            });
        }
    }
});
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
        setGutter() {
            const { gutter } = this.data;
            const margin = `-${Number(gutter) / 2}px`;
            const style = gutter
                ? `margin-right: ${margin}; margin-left: ${margin};`
                : '';
            this.set({ style });
            this.getRelationNodes('../col/index').forEach(col => {
                col.setGutter(this.data.gutter);
            });
        }
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
