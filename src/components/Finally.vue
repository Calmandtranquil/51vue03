<template>
    <div v-cloak>
        <p>您的性别是:{{this.$store.state.put}}</p>
        <p>您的爱好是:{{this.$store.state.like[0]}}</p>
        <p>个人简介:{{this.$store.state.introduction}}</p>
    </div>
</template>

<script>
    // export default {
    //     name: "Finally"
    // }
</script>

<style scoped>
    [v-cloak]{
        display: none;
    }
</style>