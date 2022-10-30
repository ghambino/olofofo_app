<template>
  <div>
    <div class="container">
      <IntroHeader :headlinerNews="headlinerNews" />
      <div class="divider">
        <p class="whiteback">Breaking News</p>
        <p class="text">Kanye West says he's running for president in 2020</p>
      </div>
      <LatestNewRendering :latestNews="latestNews" />
      <div class="editorials">
        <div class="editorlogo">
          <p>Editor’s Picks</p>
          <img :src="star" alt="editorial star" />
        </div>
        <Editorspick />
        <div class="footdot">
          <span class="rest"></span>
          <span class="middle"></span>
          <span class="rest"></span>
          <span class="rest"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IntroHeader from "../components/IntroHeader.vue";
import LatestNewRendering from "../components/LatestNewRendering.vue";
import Editorspick from "../components/Editorspick.vue";
import star from "/images/star.png";

export default {
  props: ["category"],
  components: {
    IntroHeader,
    LatestNewRendering,
    Editorspick,
  },
  data() {
    return {
      star,
      key: import.meta.env.VITE_API_KEY,
      // category: this.$route.params.category,
      collectedData: [],
    };
  },
  methods: {
    fetchNews(category) {
      const baseUrl = "https://newsapi.org/v2/top-headlines";
      const API_KEY = this.key;

      fetch(`${baseUrl}?category=${category}&country=ng&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          this.collectedData = data.articles
            .filter((unit) => unit.urlToImage !== null && unit.content !== null)
            .map((unit) => {
              return {
                ...unit,
                like: 28,
                share: 72,
              };
            });
        });
    },
  },
  created() {
    this.fetchNews(this.$route.params.category);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchNews(to.params.category);
    next();
  },
  mounted() {
    console.log(this.collectedData);
    console.log(this.headlinerNews);
  },
  watch: {
    collectedData(newValue, oldValue) {
      console.log(newValue);
      console.log(this.headlinerNews);
    },
    category(newValue, oldValue) {
      console.log(newValue);
    },
  },
  computed: {
    headlinerNews() {
      return this.collectedData[0];
    },
    latestNews() {
      return this.collectedData.slice(1, 5);
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 148px;
  margin-right: 148px;
}
.divider {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background-color: #c31815;
  margin: 50px 0;
}
.whiteback {
  background-color: #ffffff;
  padding: 16px 10px;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
}

.text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 15px;
  color: #fff;
}
.editorials {
  margin-top: 60px;
}
.editorlogo {
  display: flex;
  align-items: center;
  gap: 24px;
}
.editorials p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
}
.footdot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 38px;
}
.middle {
  height: 4px;
  width: 24px;
  background-color: red;
}
.rest {
  height: 4px;
  width: 18px;
  background-color: red;
  opacity: 0.2;
}
</style>
