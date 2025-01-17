<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div
        class="accordion-header"
        :class="{ active: activeIndex === index }"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <span>{{ activeIndex === index ? "-" : "+" }}</span>
      </div>

      <div class="accordion-content" v-show="activeIndex === index">
        <slot :item="item" :index="index" class="content"></slot>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Accordion",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 2,
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>
  
  <style scoped>
.accordion {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}

.accordion-header {
  background: #f9f9f9;
  padding: 16px;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}

.accordion-header:hover,
.accordion-header.active {
  background: #adadad;
}

.accordion-content {
  padding: 10px;
  background: #fff;
  
}

/* Apply flex styles to slot content (e.g., videoCard) */
.accordion-content::v-deep .videoCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>  