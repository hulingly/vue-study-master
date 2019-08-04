<template>
    <div>
        <!-- 自定义组件要实现v-model 必须实现:value, @input -->
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
import emitter from '@/mixins/emitter'
    export default {
        inheritAttrs: false, // 避免顶层容器继承属性
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        mixins: [emitter],
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
                // 值改变  通知formitem校验
                this.dispatch("KFormItem","validate"); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>