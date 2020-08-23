<template>
  <div class="eval-values">
    <ul>
      <li v-for="value in values" :key="value.id">{{ value }}</li>
    </ul>
  </div>
</template>

<script>
import { values } from "../store/framework/values";
export default {
  name: "EvalValues",
  data() {
    return { values };
  }
};
</script>

<style lang="sass" scoped></style>
