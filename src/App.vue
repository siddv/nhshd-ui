<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io">
        <img src="./assets/NHS.jpg">
      </a>
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/register">Register</router-link>
        <router-link class="navbar-item" to="/login">Login</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #005EB8;
$primary-invert: findColorInvert($primary);

@import "~bulma";
@import "~buefy/src/scss/buefy";

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
