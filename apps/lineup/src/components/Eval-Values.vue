<template>
  <div class="eval-values">
    Values
    <picker-btn
      v-for="value in values"
      :key="value.id"
      :id="value.id"
      :name="value.name"
    />
  </div>
</template>

<script>
import { values } from "../store/framework/values";
import PickerBtn from "./PickerBtn.vue";
export default {
  name: "EvalValues",
  data() {
    return { values };
  },
  components: { PickerBtn },
};
</script>

<style lang="sass" scoped></style>
