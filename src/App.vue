<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Información</router-link> |
      <router-link to="/camera">Cámara</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(93,57,210);
  background: linear-gradient(180deg, rgba(93,57,210,0.896796218487395) 40%, rgba(24,0,54,0.6755077030812324) 95%);
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center; 

}

#nav {
  padding: 30px;
  color: white;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f0f0f0;
    }
  }
}
</style>
