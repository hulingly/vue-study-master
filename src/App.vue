<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/About">About</router-link>
        <router-view></router-view>
        <HelloWorld msg="Welcome to Your Vue.js App" ref="hw" @foo="onFoo">
            <template v-slot:default>默认插槽</template>
            <template v-slot:content="{bla}">{{bla}}</template>
        </HelloWorld>
        <Form-Test></Form-Test>
        <Tree-Test></Tree-Test>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FormTest from "./components/form/index.vue";
import TreeTest from "./components/tree/index.vue";
import router from "./router";
export default {
    name: "app",
    router,
    provide() {
        return {
            aa: "a", //传递静态值
            bb: this.b, // 传递动态值
            cc: this.c, // 传递引用值
            setcc1: this.setcc
        };
    },
    data() {
        return {
            bla: "blabla",
            b: "b",
            c: {
                d: "d"
            }
        };
    },
    components: {
        HelloWorld,
        FormTest,
        TreeTest
    },
    mounted() {
        this.$children[0].foo = "dong";
    },
    methods: {
        onFoo() {
            // this.aaa = "ccc"
        },
        setcc(value) {
            this.c.d = value;
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>