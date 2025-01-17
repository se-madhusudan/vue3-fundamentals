<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <!-- Accordion Header -->
      <div
        class="accordion-header"
        :class="{ active: activeIndex === index }"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <span>{{ activeIndex === index ? "-" : "+" }}</span>
      </div>
      <!-- Accordion Content -->
      <div class="accordion-content" v-show="activeIndex === index">
        <VideoCard
          v-for="(video, videoIndex) in item.videos"
          :key="videoIndex"
          :videoUrl="video.url"
          :title="video.title"
          :likes="video.likes"
          @increment-likes="incrementLikes(index, videoIndex)"
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
import VideoCard from "./VideoCard.vue";

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
  components: {
    VideoCard,
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    incrementLikes(accordionIndex, videoIndex) {
      this.$emit("increment-likes", accordionIndex, videoIndex);
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
  