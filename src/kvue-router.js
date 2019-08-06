let Vue;

class VueRouter {
    constructor(options) {
        this.$options = options;

        // 创建一个对象  存储路由path和route的映射关系
        this.routeMap = {}

        // 将来当前路径current需要响应式
        // 利用vue响应式可以做到这一点
        this.app = new Vue({
            data: {
                current: "/"
            }
        })
    }

    init() {
        // 绑定浏览器事件
        this.bindEvents();
        // 解析路由配置
        this.createRouteMap(this.$options);
        // 创建router-link 与router-view组件
        this.initComponent();
    }

    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this));
    }
    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/'
    }
    initComponent() {
        Vue.component("router-link", {
            props: {
                to: String
            },
            render(h) {
                return h('a', {attrs: {href: "#" + this.to}}, this.$slots.default)
            }
        });
        Vue.component("router-view", {
            // 这里使用箭头函数保留this指向--VueRouter实例
            render:(h) => {
                const comp = this.routeMap[this.app.current].component;
                return h(comp)
            }
        });
    }
    createRouteMap(options) {
        options.routes.forEach(item => {
            // ['/home']: {path: '/home', component: Home}
            this.routeMap[item.path] = item;
        });
    }
    
}

VueRouter.install = function(_Vue) {
    // 实现install方法, 外面可以利用Vue.use(VueRouter)的方式注册插件,
    // 调用VueRouter的install方法时会将Vue传入
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            // this是组件实例
            // 将来会在外面组件初始化的时候被调用
            // 但是这里只希望跟组件初始化的时候执行一次
            if (this.$options.router) {
                // 将$router扩展到Vue的原形上
                // Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    })
}

export default VueRouter