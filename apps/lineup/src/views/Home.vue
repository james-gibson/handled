<template>
  <section class="home ">
    <h1>Line Up</h1>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-card md-with-hover class="card">
          <md-ripple>
            <md-card-header>
              <router-link :to="{ name: 'Add' }"
                ><h2>Add Expense</h2></router-link
              >
            </md-card-header>
            <md-card-body>
              <md-icon class="md-size-5x">attach_money</md-icon>
            </md-card-body>
          </md-ripple>
        </md-card>
      </div>
      <div class="md-layout-item">
        <md-card md-with-hover class="card">
          <md-ripple>
            <md-card-header>
              <router-link :to="{ name: 'Review' }"
                ><h2>See List</h2></router-link
              >
            </md-card-header>
            <md-card-body>
              <md-icon class="md-size-5x">grid_on</md-icon>
            </md-card-body>
          </md-ripple>
        </md-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss">
.home {
  padding-top: 3rem;

  .card {
    text-align: center;
    padding: 1rem;
  }
}
</style>
