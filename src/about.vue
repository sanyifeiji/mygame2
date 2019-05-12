<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
        <router-link to="/App"   ><input type="button" value="返回主页"></router-link>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是about组件'
            }
        }
    }
</script>