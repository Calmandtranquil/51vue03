<template>
    <div v-cloak>
        <p>请选择你的兴趣爱好</p>
        <input type="checkbox" v-model="like" value="优势路" id="advantage"><label for="advantage">优势路</label>
        <input type="checkbox" v-model="like" value="中路" id="middle"><label for="middle">中路</label>
        <input type="checkbox" v-model="like" value="劣势路" id="disadvantage"><label for="disadvantage">劣势路</label>
        <input type="checkbox" v-model="like" value="纯辅" id="full-auxiliary"><label for="full-auxiliary">纯辅</label>
        <input type="checkbox" v-model="like" value="半辅" id="half-auxiliary"><label for="half-auxiliary">半辅</label>
        <br>
        <router-link to="/"><button>上一页</button></router-link>
        <button @click="checkLike()">下一页</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Next",
        data(){
            return{
                like:[]
            }
        },
        methods:{
            checkLike(){
                this.$store.commit("checkLike",this.like);
                this.$router.push("/Then");
            },
            reset(){
                this.like=[];
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