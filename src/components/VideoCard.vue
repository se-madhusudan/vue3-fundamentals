<template>
  <section class="videoCard">
    <div class="videoCard__iframe-container">
      <iframe 
        :src="videoUrl"
        class="videoCard__iframe"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="videoCard__info">
      <h3 class="videoCard__title">{{ title }}</h3>
      <div class="videoCard__likes">
        <span class="videoCard__like-icon" @click="incrementLikes">👍</span>
        <span class="videoCard__like-count">{{ likes }} Likes</span>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: "VideoCard",
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  methods: {
    incrementLikes() {
      this.$emit('increment-likes');
    }
  }
};
</script>
  
<style lang="scss" scoped>
.videoCard {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 360px;

  &__iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
  }

  &__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }

  &__info {
    margin-top: 12px;
  }

  &__title {
    margin: 0;
    font-size: 1.2em;
  }

  &__likes {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  &__like-icon {
    font-size: 1.5em;
    margin-right: 8px;
    cursor: pointer;
  }

  &__like-count {
    font-size: 1em;
    color: #666;
  }
}
</style>
