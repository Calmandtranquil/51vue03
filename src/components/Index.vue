<template>
    <div v-cloak>
        <label for="boy">男</label><input v-model="put" type="radio" value="男" id="boy" >
        <label for="girl">女</label><input v-model="put" type="radio" value="女" id="girl" >
        <label for="none">保密</label><input v-model="put" type="radio" value="保密" id="none" >
        <br>
        <button @click="Next()">下一页</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                put:"保密"
            }
        },
        methods:{
            Next(){
                this.$store.commit("Next",this.put);
                this.$router.push("/Next");
            },
            reset(){
                this.put='none';
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