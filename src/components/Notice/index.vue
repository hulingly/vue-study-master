<template>
    <div v-if="isShow">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        props: {
            title: {
                type: String,
                default: ""
            },
            message: {
                type: String,
                default: ""
            },
            duration: {
                type: Number
            }
        },
        methods: {
            show() {
                this.isShow = true;
                setTimeout(() => {
                    this.hide();
                }, this.duration)
            },
            hide() {
                this.isShow = false;
                this.remove();
            }
        }
    }
  
</script>

<style lang="scss" scoped>

</style>