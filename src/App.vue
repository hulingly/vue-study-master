<template>
  <div id="app">
      <HelloWorld 
      msg="Welcome to Your Vue.js App"
      ref="hw"
      @foo="onFoo">
        <!-- <template v-slot:default>默认插槽</template>
        <template v-slot:content="{bla}">{{bla}}</template> -->
      </HelloWorld>
      <Form-Test></Form-Test>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormTest from './components/form/index.vue'

export default {
  name: 'app',
  provide() {
    return {
      aa: 'a', //传递静态值
      bb: this.b, // 传递动态值
      cc: this.c, // 传递引用值
      setcc1: this.setcc
    }
  },
  data() {
    return {
      bla: "blabla",
      b: "b",
      c: {
        d: "d"
      }
    }
  },
  components: {
    HelloWorld,
    FormTest
  },
  mounted() {
    this.$children[0].foo = 'dong'
  },
  methods: {
    onFoo() {
      // this.aaa = "ccc"
    },
    setcc(value) {
      this.c.d = value
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
