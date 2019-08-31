<template>
    <div id="intro_guide">Guide Page</div>
</template>

<script>
    import { snakeCase, toUpper } from 'lodash-es';

    const snakeCaseStr = snakeCase('sddMMM');
    console.log(snakeCaseStr);
    const toUpperStr = toUpper(snakeCaseStr);
    console.log(toUpperStr);

    export default {
        data : function() {
            return {
            }
        },
        computed : {

        },
        created : function() {
        },
        mounted : function() {
        },
        beforeDestroy : function() {
        },
        methods : {
        },
        components : {
        }
    }
</script>

<style lang="less">
</style>