<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <h1>问卷调查表填写</h1>
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: lemonchiffon;
  width: 40%;
  margin: 0px auto;


}

#nav {
  padding: 30px;
}
  h1{
    color: #42b983;
  }
</style>
