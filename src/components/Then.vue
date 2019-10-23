<template>
    <div v-cloak>
        <p>请介绍一下自己</p>
        <p>{{this.$store.state.checked}}</p>
        <textarea v-model="introduction" cols="30" rows="10"></textarea>
        <br>
        <router-link to="/Next"><button>上一页</button></router-link>
        <button @click="doIn()">下一页</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Then",
        data(){
            return{
                introduction:""
            }
        },
        methods:{
            doIn(){
                this.$store.commit("doIn",this.introduction);
                this.$router.push("/Finally");
            },
            reset(){
                this.introduction="";
            }
        }
    }
</script>

<style scoped>
    button{
        margin-right: 30px;
        margin-top: 30px;
    }
    [v-cloak]{
        display: none;
    }
</style>