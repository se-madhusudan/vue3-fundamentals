<template>
  <button @click="count++">{{ text }}</button>
  <span> Clicked: {{ count }} times.</span>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  props: ["text"],

  //lifecycle hooks -
  beforeCreate() {
    alert("creating ⌚: counter"); //component initialization starts
  },
  created() {
    alert("created ✅: counter"); //component initialization done
  },
  beforeMount() {
    alert("mounting ⌚: counter"); //component is mounting starts
  },
  mounted() {
    alert("mounted ✅: counter"); //component ui will be visible only after mounting is completed
  },
  beforeUpdate() {
    alert("updating ⌚: counter");
  },
  updated() {
    alert("updated ✅: counter");
  },
  beforeUnmount() {
    alert("removing ⌚: counter"); //component ui will be visible
  },
  unmounted() {
    alert("removed ✅: counter"); //component ui will be removed
  },
};
</script>

<style lang="scss" scoped>
  button {
    background-color: rgb(161, 138, 7);
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: azure;
  }
  button:hover {
    background-color: rgb(223, 77, 77);
    cursor: pointer;
  }
</style>