<template>
  <div :id="id">
    <button type="button">{{ name }}</button>
    <select></select>
  </div>
</template>

<script>
export default {
  name: "PickerBtn",
  props: {
    id: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped></style>
