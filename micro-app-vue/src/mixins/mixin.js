export const toggle = {
    data() {
        return {
            "show": false
        }
    },
    methods: {
        changeState() {
            this.show = !this.show;
        }
    },
    created() {
        console.log('created', 'mixins');
    },
    mounted() {
        console.log('mounted', 'mixins');
    }
};