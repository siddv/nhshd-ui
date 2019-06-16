<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
      <a class="navbar-item" href="https://www.nhs.uk/" target="_blank">
        <img src="./assets/NHS.jpg">
      </a>
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/register">Register</router-link>
        <router-link class="navbar-item" to="/login">Login</router-link>

      </div>
    </nav>
    <div class="section">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openNotification() {
      this.$toast.open({
        duration: 5000,
        message: `New message from Dr Physio`,
        position: 'is-bottom',
        type: 'is-success'
      })
    }
  },
  mounted() {
    document.addEventListener('keypress', (event) => {
      console.log('event', event.keyCode)
      if(event.keyCode == 122) { //'z'
        this.openNotification();
      }
    })
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #005EB8;
$primary-invert: findColorInvert($primary);

@import "~bulma";
@import "~buefy/src/scss/buefy";

.navbar {
  background: $primary;
}

.navbar-item {
  color: $white;
}

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
