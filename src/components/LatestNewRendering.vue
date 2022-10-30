<template>
  <div class="news-section">
    <div class="left">
      <div class="whiteHead">
        <div class="tabs">
          <span
            v-for="(tab, index) in tabs"
            :key="index"
            @click="changeSection(tab)"
            :class="{ redUnderline: tab === currentSection }"
            class="tab"
            >{{ tab }}</span
          >
        </div>
        <img :src="sidebarIcon" alt="sidebar-icon" class="headImg" />
      </div>
      <div class="latest">
        <IndividualNews :extendingProp="latestNews" />
      </div>
      <div class="newsFoot">
        <button>view more</button>
      </div>
    </div>
    <div class="right">
      <div class="up">
        <p>Live</p>
        <img :src="liveSignal" alt="live" />
      </div>
      <img :src="bearedman" alt="bearedman" class="bearedImg" />
      <h2 class="title">Beloved Arizona coach loses battle with coronavirus</h2>
      <h2 class="location">Location News</h2>
      <form action="" class="form">
        <div class="formInner">
          <label for="location">Get Location specific News</label>
          <input type="text" id="location" placeholder="Enter Your Location" />
        </div>
        <button>submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import IndividualNews from "./IndividualNews.vue";
import sidebarIcon from "/images/sidebarIcon.png";
import bearedman from "/images/bearedman.png";
import liveSignal from "/images/live.png";
export default {
  components: {
    IndividualNews,
  },
  props: {
    latestNews: {
      type: Array,
    },
  },
  data() {
    return {
      bearedman,
      liveSignal,
      sidebarIcon,
      currentSection: "latest stories",
      tabs: ["latest stories", "think", "health"],
    };
  },
  methods: {
    changeSection(value) {
      this.currentSection = value;
    },
  },
};
</script>

<style scoped>
.news-section {
  width: 100%;
  display: flex;
  gap: 32px;
}
.left {
  flex: 2.5;
}
.right {
  flex: 1;
}
.whiteHead {
  height: 54px;
  background-color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.tabs {
  display: flex;
  align-items: center;
  gap: 40px;
}
.tab {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  display: inline-block;
  padding: 5px;
  text-transform: capitalize;
}
.redUnderline {
  border-bottom: 3px solid red;
}
.latest {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.up {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}
.up p {
  color: red;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
}
.bearedImg {
  width: 100%;
  /* height: 218px; */
}
.title {
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 41px;
}
.location {
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 15px;
}
form {
  background-color: white;
  width: 100%;
  padding: 30px 20px;
}
.formInner {
  margin-bottom: 20px;
}
.formInner label {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 16px;
  display: inline-block;
}
.formInner input {
  width: 100%;
  height: 40px;
}
button {
  padding: 12px 20px;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}
.newsFoot {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
}
.newsFoot button {
  padding: 22px 64px;
  background-color: transparent;
  color: red;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid red;
  border-radius: 3px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
