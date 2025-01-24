<template>
  <button @click="count++">{{ text }}</button>
  <span> Clicked: {{ count }} times.</span>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isUnmounted: false,
    };
  },
  props: {
    text: String,
    counts: Number
  },
  emits: ['send-count'],

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
    this.isUnmounted = true;
    console.log('after unmount - isUnmounted:', this.isUnmounted);
    this.count = this.counts;
    console.log('updated count: ', this.count);
    alert("mounted ✅: counter"); //component ui will be visible only after mounting is completed
  },
  beforeUpdate() {
    alert("updating ⌚: counter"); //component ui ready for update posting reactive data change
  },
  updated() {
    alert("updated ✅: counter"); //component  ui is updated with new data
  },
  beforeUnmount() {
    this.$emit('send-count', this.count);
    alert("removing ⌚: counter"); //component ui will be visible
  },
  unmounted() {
    this.isUnmounted = true;
    console.log('after unmount - isUnmounted:', this.isUnmounted);
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