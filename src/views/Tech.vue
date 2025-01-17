<template>
  <main>
    <h1>Videos</h1>
    <section class="accordion-container">
      <Accordion :items="accordions">
        <template v-slot:default="{ item, index }">
          <div v-if="item.videos">
            <div v-for="(video, videoIndex) in item.videos" :key="videoIndex">
              <VideoCard
                :videoUrl="video.url"
                :title="video.title"
                :likes="video.likes"
                @increment-likes="incrementLikes(index, videoIndex)"
              />
            </div>
          </div>
          <div v-else>
            <!-- If no videos, display text (default content type) -->
            <p>{{ item.content }}</p>
          </div>
        </template>
      </Accordion>
    </section>
  </main>
</template>

<script>
import Accordion from "../components/Accordian.vue";
import VideoCard from "../components/VideoCard.vue";

export default {
  name: "Tech",
  components: {
    Accordion,
    VideoCard,
  },
  data() {
    return {
      accordions: [
        {
          title: "Tech Videos",
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
        },
        {
          title: "Interview Videos",
          videos: [
            {
              url: "https://www.youtube.com/embed/ZlACPo-Gtw4",
              title: "Proxy Interview Busted",
              likes: 0,
            },
            {
              url: "https://www.youtube.com/embed/0AJp1F6PIjc",
              title: "Candidate Caught cheating in interview",
              likes: 0,
            },
            {
              url: "https://www.youtube.com/embed/SOvUZksa-v8",
              title: "Viral Videos of Man's interview",
              likes: 0,
            },
          ],
        },
        {
          title: "Challenges Videos",
          videos: [
            {
              url: "https://www.youtube.com/embed/-wi_p9ui9F0",
              title: "AIIMS DELHI PULSE 23 ",
              likes: 0,
            },
          ],
        },
      ],
    };
  },
  methods: {
    incrementLikes(accordionIndex, videoIndex) {
      this.accordions[accordionIndex].videos[videoIndex].likes++;
    },
  },
};
</script>

<style scoped lang="scss">
main {
  padding: 20px 40px;

  h1 {
    margin-bottom: 16px;
    font-size: 2em;
    font-weight: bold;
  }

  .accordion-container {
    margin-top: 20px;
  }
}
</style>