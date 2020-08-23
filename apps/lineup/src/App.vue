<template>
  <div id="app">
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "./index.scss";

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default-dark",
  (
    primary: md-get-palette-color(green, A200),
    // The primary color of your application
      accent: md-get-palette-color(teal, A700) // The accent or secondary color
  )
);

@import "~vue-material/dist/theme/all";

#app {
  .md-button {
    margin-left: 0;
  }
}
</style>
