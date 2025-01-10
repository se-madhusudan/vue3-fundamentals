<template>
  <main>
    <h1>Tech Videos</h1>
    <section class="videoContainer">
      <VideoCard
        v-for="(video, index) in videos"
        :key="index"
        :videoUrl="video.url"
        :title="video.title"
        :likes="video.likes"
        @increment-likes="incrementLikes(index)"
      />
    </section>
  </main>
</template>

<script>
import VideoCard from "../components/VideoCard.vue";

export default {
  name: "Tech",
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/embed/zLK_ipDz6Mk",
          title: "DRM Explained",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/iInUBOVeBCc",
          title: "Nginx Explained",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/WtkKwO1viI8",
          title: "GraphQL Explained",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/WXqOc-oor-E",
          title: "Two weeks what it takes",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/ZlACPo-Gtw4",
          title: "Proxy Interview Busted",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/xo5V9g9joFs",
          title: "Proxy, Load Balancer Explained",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/UMwQjFzTQXw",
          title: "HTTP Explained",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/bxuYDT-BWaI",
          title: "API Explained",
          likes: 0,
        },
        {
          url: "https://www.youtube.com/embed/AOf2gGVSz68",
          title: "API vs SDK Explained",
          likes: 0,
        },
      ],
    };
  },
  methods: {
    incrementLikes(index) {
      this.videos[index].likes++;
    },
  },
};
</script>

<style lang="scss">
main {
  padding: 20px 60px;

  h1 {
    margin: 0;
    padding-bottom: 10px;
  }

  .videoContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
