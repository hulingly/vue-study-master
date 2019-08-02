<template>
  <div id="app">
      <HelloWorld 
      msg="Welcome to Your Vue.js App"
      ref="hw"
      @foo="onFoo">
        <template v-slot:default>默认插槽</template>
        <template v-slot:content="{bla}">{{bla}}</template>
      </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  provide() {
    return {
      aa: 'a', //传递静态值
      bb: this.b, // 传递动态值
      cc: this.c, // 传递引用值
      setaa: (value) => {
        // 这里的this指向app组件因此无法修改aa的值, 不能用箭头函数的方式
        console.log(this);
        this.a = value;  
      },
      setaa1: function(value) {
        // 当aa是静态值时, 此种方式能修改aa的值 
        // 但vue提醒void mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "aa"
        // 这里的this指向HelloWorld组件
        this.aa = value
      },
      setbb: (value) => {
        this.b = value;  
      },
      setbb1: function(value) {
        this.bb = value
      },
      setcc: (value) => {
        console.log(this)
        this.cc.d = value;  
      },
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
    HelloWorld
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
