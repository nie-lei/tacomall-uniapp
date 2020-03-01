<<<<<<< HEAD
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect(event) {
            const { index } = event.currentTarget.dataset;
            const item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
            }
        },
        onCancel() {
            this.$emit('cancel');
        },
        onClose() {
            this.$emit('close');
        }
    }
});
=======
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect(event) {
            const { index } = event.currentTarget.dataset;
            const item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
            }
        },
        onCancel() {
            this.$emit('cancel');
        },
        onClose() {
            this.$emit('close');
        }
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
