<template>
    <div>
        details
        <p>id: {{$route.params.id}}</p>
        <p>id: {{id}}</p>
        <!-- <p>matched:{{$route.matched}}</p> -->
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ""
        }
    },
    watch: {
        $route() {
            console.log(this.$route);
        }
    },
    mounted () {
        // console.log($route.matched);
    },
};
</script>

<style lang="scss" scoped>
</style>