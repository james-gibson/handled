<template>
  <div class="add-purchase">
    <h1>Line Up</h1>
    <form class="add">
      <h2>Add Purchase</h2>
      <md-field>
        <label>Name</label>
        <md-input v-model="form.name" md-counter="25"></md-input>
      </md-field>
      <md-field>
        <label>Estimated Cost</label>
        <span class="md-prefix">$</span>
        <md-input v-model="form.cost" type="number"></md-input>
      </md-field>
      <md-datepicker v-model="form.date">
        <label>Select date to complete by</label>
      </md-datepicker>
      <md-button class="md-raised md-primary" @click="onSubmit"
        >Start Scoring</md-button
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPurchase",
  data: () => {
    return {
      form: {
        name: "",
        cost: "",
        date: new Date()
      }
    };
  },
  methods: {
    onSubmit() {
      // TODO mutation
      this.$router.push("/add/eval-values");
    }
  }
};
</script>

<style lang="scss" scoped>
.add-purchase {
  form.add {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
