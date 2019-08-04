<template>
  <div class="hello" @click="$parent.$emit('hhh')">
    <h1 @click="$emit('foo', $event)">{{ msg }}</h1>
    <p>aa的值: {{aa}}</p>
    <p>bb的值: {{bb}}</p>
    <p>cc.d的值: {{cc.d}}</p>
    <br>
    <slot></slot>
    <br>
    <slot name="content" bla="bla~~~"></slot>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject:['aa', 'bb', 'cc', 'setcc1'],
  props: {
    msg: String
  },
  data() {
    return {
      foo: 'bar'
    }
  },
  mounted() {
    this.setcc1('dd1');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
