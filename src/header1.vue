<template>
    <div class="he">
        <h1>header</h1>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是header组件"
            }
        }
    }
</script>


<style>
.he
{
    color:gray;
}
</style>