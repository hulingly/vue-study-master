<template>
    <li>
        <div @click="toggle">
            {{model.title}}
            <span v-if="isFolder">{{open ? "-" : "+"}}</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <Item class="item" v-for="model in model.children" :model="model" :key="model.title"></Item>
        </ul>
    </li>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            open: false
        };
    },
    props: {
        model: {
            type: Object
        }
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length;
        }
    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
