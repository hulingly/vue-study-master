<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this // 传递form实例给后代
            }
        },
        props: {
            model: {
                type: Object,
                required: true,
                default: function() {
                    return {}
                }
            },
            rules: {
                type: Object,
                default: function() {
                    return {}
                }
            },
        },
        methods: {
            validate(cb) {
                const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate());

                Promise.all(tasks)
                .then(() => {
                    cb(true);
                })
                .catch(() => {
                    cb(false);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>