<template>
  <div v-for="(unit, index) in extendingProp" :key="index" class="card">
    <img :src="unit.urlToImage" alt="header-image" class="img" />
    <div class="content">
      <h2 class="title">{{ unit.title }}</h2>
      <p class="para">{{ unit.description }}</p>
      <div class="introFoot">
        <span class="timer">2 hours ago</span>
        <span class="timer author">By Lucy Hiddleston | 4min read</span>
      </div>
    </div>

    <div class="lowerIcon">
      <div class="iconSpace">
        <img :src="love" alt="like-key" class="topIcon" />
        <span class="spanText">{{ unit.like }}</span>
      </div>
      <div class="iconSpace">
        <img :src="share" alt="share-key" class="topIcon" />
        <span class="spanText">{{ unit.share }}</span>
      </div>
      <div class="iconSpace">
        <img :src="bookmark" alt="bookmark-key" class="topIcon" />
        <span class="spanText"></span>
      </div>
    </div>
  </div>
</template>

<script>
import love from "/images/like.png";
import share from "/images/share.png";
import bookmark from "/images/bookmark.png";
export default {
  props: {
    extendingProp: {
      type: Array,
    },
  },
  data() {
    return {
      love,
      share,
      bookmark,
    };
  },
};
</script>

<style scoped>
.card {
  background: #ffffff;
  box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
  border-radius: 3px;
}
.content {
  padding: 10px 25px;
  border-bottom: 1px solid rgba(42, 42, 42, 0.24);
}
.title {
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 17px;
}
.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 30px;
}
.img {
  height: 210px;
  width: 100%;
}
.introFoot {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}
.timer {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
}
.author {
  opacity: 0.7;
}

.lowerIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0px;
}
.topIcon {
  height: 16px;
  width: 16px;
}
.iconSpace {
  display: flex;
  align-items: center;
  gap: 8px;
}
.spanText {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
}
</style>
