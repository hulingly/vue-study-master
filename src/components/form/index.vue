<template>
    <div>
        <KForm :model="model" :rules="rules" ref="loginForm">
            <KFormItem label="用户名" prop="username">
                <Test>
                    <KInput v-model="model.username"></KInput>
                </Test>
            </KFormItem>
            <KFormItem label="密码" prop="password">
                <KInput v-model="model.password" type="password"></KInput>
            </KFormItem>
            <KFormItem label="是否记住密码">
                <KCheckbox v-model="model.remmember"></KCheckbox>
            </KFormItem>
            <KFormItem>
                <button @click="onLogin">登录</button>
            </KFormItem>
        </KForm>
        {{model}}
    </div>
</template>

<script>
import KInput from "./KInput.vue";
import KFormItem from "./KFormItem.vue";
import KForm from "./KForm.vue";
import KCheckbox from "./KCheckbox.vue";
import Test from "./test.vue";
import Create from "@/utils/create.js";
import Notice from "../Notice/index.vue";
export default {
    components: {
        KInput,
        KFormItem,
        KForm,
        KCheckbox,
        Test
    },
    data() {
        return {
            model: {
                username: "tom",
                password: "",
                remmember: false
            },
            rules: {
                username: [{ required: true, message: "用户名不能为空!" }],
                password: [{ required: true, message: "密码不能为空!" }]
            }
        };
    },
    methods: {
        onLogin() {
            let notice;
            this.$refs.loginForm.validate(isValid => {
                let message = "";
                if (isValid) {
                    message = "登录";
                } else {
                    message = "错误";
                }
                notice = Create(Notice, {
                    title: "温馨提示",
                    message: message,
                    duration: 2000
                });
                notice.show();
            });
        }
    }
};
</script>

<style lang="scss" scoped>
</style>