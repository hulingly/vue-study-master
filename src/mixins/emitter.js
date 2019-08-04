export default {
    methods: {
        dispatch(componentName, eventName, data) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name ;

            while (parent && (name !== componentName || !name)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit(eventName, data)
            }
        },
        broadcast() {

        }
    }
}