<template>
    <div>
        <h1>end</h1>
        <p>{{ $store.state.count}}</p>
        <p>{{aboutMsg}}</p>
        <router-link to="/App"   ><input type="button" value="返回主页"></router-link>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是end组件'
            }
        }
    }
</script>