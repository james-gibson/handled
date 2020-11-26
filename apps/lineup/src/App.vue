<template>
  <div id="app">
    <router-link :to="{ name: 'Home' }"><h1>Lineup</h1></router-link>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "./index.scss";

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@import "~vue-material/dist/theme/all";

#app {
  padding: 2rem;
  .md-button {
    margin-left: 0;
  }
}
</style>
