vbase
<template>
  <div>
    <div class="container">
      <img :src="headlinerNews.urlToImage" alt="intro-image" class="introImg" />
      <div class="newsbody">
        <div class="topper">
          <p class="trend">Trending</p>
          <div class="newsIcons">
            <img :src="love" alt="like-key" class="topIcon" />
            <img :src="share" alt="share-key" class="topIcon" />
            <img :src="bookmark" alt="bookmark-key" class="topIcon" />
          </div>
        </div>
        <h2 class="title">{{ headlinerNews.title }}</h2>
        <p class="para">{{ headlinerNews.content }}</p>
        <div class="introFoot">
          <span class="timer">2 hours ago</span>
          <span class="timer author">By Lucy Hiddleston | 4min read</span>
        </div>
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
    headlinerNews: {
      type: Object,
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
.container {
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 76px;
}
.introImg {
  height: 400px;
  width: 50%;
  object-fit: cover;
}
.topper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.trend {
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 600;
  line-height: 29px;
  color: #c31815;
}
.newsIcons {
  display: flex;
  align-items: center;
  gap: 12px;
}
.topIcon {
  height: 16px;
  width: 16px;
}
.title {
  width: 90%;
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #2a2a2a;
  margin-bottom: 20px;
}
.para {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 30px;
  opacity: 0.9;
}
.introFoot {
  display: flex;
  align-items: center;
  gap: 12px;
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
</style>
