<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import * as abc from "./abc";
    abc.a();

    export default {
        name: 'app',
        computed : {
        },
        data : function() {
            return {
                selectMsg: '',
                isSelectDlgShow: false,
                browserNotSupport: false
            }
        },
        created : function() {
        },
        beforeDestroy : function() {
        },
        methods: {
        },
        components : {
        }
    }
</script>

<style lang="less">
</style>