<template>
    <div>
        <label v-if="label">
            {{label}}
        </label>
        <slot></slot>

        <p v-if="errMsg">
            {{errMsg}}
        </p>
    </div>
</template>

<script>
import Schema from 'async-validator';
    export default {
        name: "KFormItem",
        data() {
            return {
                errMsg: ""
            }
        },
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: ""
            },
            prop: {
                type: String,
                default: ""
            }
        },
        mounted () {
            // 监听校验事件
            this.$on("validate", () => {
                this.validate();
            });
        },
        methods: {
            validate() {
                // 执行表单校验
                // 1.获取校验规则
                const rules = this.form.rules[this.prop];
                
                // 2.获取数据
                const value = this.form.model[this.prop];
                // 3.执行校验
                const desc = {
                    [this.prop]: rules
                }
                const schema = new Schema(desc);

                return schema.validate({
                    [this.prop]: value,
                },errors => {
                    if (errors) {
                        this.errMsg = errors[0].message;
                    } else {
                        this.errMsg = ""
                    }
                })

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>