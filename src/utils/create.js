import Vue from 'vue';

export default function create(Component, props) {

    // 1.创建vue实例
    const vm = new Vue({
        render: function(h){
            // render函数给我们提供一个h方法, 帮我们渲染VNode
            return h(Component, {props});
        }
    }).$mount();

    // 2.通过$children获取该组件实例
    const comp = vm.$children[0];

    // 3.将组件dom追加至body
    document.body.appendChild(vm.$el);

    // 清理函数
    comp.remove = function() {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    // 返回组件实例
    return comp;
}