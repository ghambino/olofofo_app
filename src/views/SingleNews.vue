<template>
  <div>
    <div class="container">
      <div class="blue-background"></div>
      <div class="mainContent">
        <h2 class="header">{{ title }}</h2>
        <img :src="displayedImg" alt="header-image" class="img" />
        <div class="flexedContent">
          <div class="left">
            <div class="introFoot">
              <span class="timer">2 hours ago</span>
              <span class="timer author">By Lucy Hiddleston | 4min read</span>
            </div>
            <div class="bodyText">
              <p v-for="(unit, index) in splittingFirstText" :key="index">
                {{ unit }}
              </p>
            </div>
            <h2 class="redLiner">
              Solemn crowds watch as Lewis, who died earlier this month at the
              age of 80, is borne by caisson over Edmund Pettus Bridge
            </h2>
            <div class="middleImg">
              <img :src="clusterImg" alt="" style="width: 100%" />
              <p>
                The casket of late U.S. Rep. John Lewis, a pioneer of the civil
                rights movement who died July 17, is carried outside the Brown
                Chapel A.M.E. Church, in Selma, Ala., on July 26, 2020.
                <span style="color: red"
                  >Christopher Aluka Berry / Reuters</span
                >
              </p>
            </div>
            <div class="bodyText">
              <p v-for="(unit, index) in splittingSecondText" :key="index">
                {{ unit }}
              </p>
            </div>
            <div class="middleImg">
              <img :src="horseImg" alt="" style="width: 100%" />
              <p>
                The casket of Rep. John Lewis moves over the Edmund Pettus
                Bridge by horse drawn carriage during a memorial service for
                Lewis in Selma, Ala., on July 26, 2020.
                <span style="color: red">John Bazemore / AP</span>
              </p>
            </div>
            <div class="bodyText">
              <p v-for="(unit, index) in splittingThirdText" :key="index">
                {{ unit }}
              </p>
            </div>
            <div class="signNewsletter">
              <h2>Sign up for The NBC News Newsletter</h2>
              <p class="lit">By Caroline Casey</p>
              <p>
                A weekly, ad-free newsletter that helps 786,000+ readers stay in
                the know, be productive, and think more critically about the
                world. Take a look
              </p>
              <button>
                <img :src="emailImg" alt="" />
                <span> Get this Newsletter </span>
              </button>
            </div>
            <div class="hotlinks">
              <span>NBCBLK</span>
              <span>Trending</span>
              <span>Lewis</span>
              <span>Freebie</span>
            </div>
            <div class="comments">
              <div class="leftcomment">
                <span class="holder">
                  <img :src="love" alt="" style="height: 22px; width: 22px" />
                  <span class="val">28</span>
                </span>
                <span class="holder">
                  <img
                    :src="commentImg"
                    alt=""
                    style="height: 22px; width: 22px"
                  />
                  <span class="val">21 responses</span>
                </span>
              </div>
              <div class="rightcomment">
                <span class="holder">
                  <img :src="share" alt="" style="height: 12px; width: 12px" />
                  <span class="val">21</span>
                </span>
                <img :src="bookmark" alt="" style="height: 12px; width: 12px" />
                <img :src="threedot" alt="" />
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>
    <div>
      <Editorspick />
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { JSDOM } from "jsdom";
// import { Readability } from "@mozilla/readability";
import displayedImg from "/images/displayImg.png";
import clusterImg from "/images/clusterImg.png";
import Editorspick from "../components/editorspick.vue";
import horseImg from "/images/horseImg.png";
import emailImg from "/images/email.png";
import love from "/images/like.png";
import share from "/images/share.png";
import bookmark from "/images/bookmark.png";
import commentImg from "/images/comment.png";
import threedot from "/images/threedot.png";
import {
  firstText,
  secondText,
  thirdText,
} from "../utilities/renderedTextHelper";
export default {
  props: ["title"],
  components: {
    Editorspick,
  },
  data() {
    return {
      commentImg,
      threedot,
      love,
      share,
      bookmark,
      emailImg,
      firstText,
      secondText,
      thirdText,
      horseImg,
      displayedImg,
      clusterImg,
      key: import.meta.env.VITE_API_KEY,
      returnedData: [],
    };
  },
  methods: {
    // fetchSingleNews(title) {
    //   const baseUrl = "https://newsapi.org/v2/everything";
    //   const API_KEY = this.key;
    //   let url = `${baseUrl}?q=${title}&sortedBy=publishedAt&apikey=${API_KEY}`;
    //   axios.get(url).then(function (r1) {
    //     // At this point we will have some search results from the API. Take the first search result...
    //     let firstResult = r1.data.articles[0];
    //     // ...and download the HTML for it, again with axios
    //     axios.get(firstResult.url).then(function (r2) {
    //       // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    //       let dom = new JSDOM(r2.data, {
    //         url: firstResult.url,
    //       });
    //       // now pass the DOM document into readability to parse
    //       let article = new Readability(dom.window.document).parse();
    //       // Done! The article content is in the textContent property
    //       console.log(article.textContent);
    //     });
    //   });
    // },
  },
  computed: {
    splittingFirstText() {
      return this.firstText.split(";");
    },
    splittingSecondText() {
      return this.secondText.split(";");
    },
    splittingThirdText() {
      return this.thirdText.split(";");
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  background-color: #eef0f2;
  min-height: 550vh;
}
.blue-background {
  height: 410px;
  width: 100%;
  background-color: #0e1e32;
}
.mainContent {
  position: absolute;
  top: 60px;
  left: 210px;
  right: 210px;
  /* border: 3px solid white; */
}
.header {
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 55px;
  color: #ffffff;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: center;
}
.img {
  width: 100%;
  margin-bottom: 40px;
}
.flexedContent {
  width: 100%;
  display: flex;
  gap: 45px;
}
.left {
  flex: 3;
}
.right {
  flex: 1;
}
.bodyText p {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #2a2a2a;
  margin-bottom: 16px;
}
.redLiner {
  padding: 25px 0;
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #2a2a2a;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
  margin: 40px 0;
}
.middleImg {
  width: 85%;
  margin: 0 auto 40px auto;
  /* border: 2px solid green; */
}
.middleImg p {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;
  border-left: 1px solid red;
  padding-left: 20px;
}
.signNewsletter {
  /* background-color: white; */
  padding: 38px 35px;
  border-top: 2px solid #2a2a2a;
  background: #ffffff;
  box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
  border-radius: 3px;
}
.signNewsletter h1 {
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 10px;
}
.lit {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 165%;
  color: #2a2a2a;
  opacity: 0.7;
  margin-bottom: 13px;
}
.signNewsletter p {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #2a2a2a;
}
.signNewsletter button {
  background-color: #c31815;
  margin-top: 25px;
  border: none;
  color: white;
  padding: 13px 16px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.hotlinks {
  margin: 50px 0;
  display: flex;
  align-items: center;
  gap: 20px;
}
.hotlinks span {
  padding: 8px 21px;
  background: #f6dddc;
  border-radius: 15px;
  color: #c31815;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1.62px;
  text-transform: uppercase;
}
.comments {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid white;
}
.val {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 165%;
}
.holder {
  display: flex;
  align-items: center;
  gap: 8px;
}
.leftcomment {
  display: flex;
  align-items: center;
  gap: 16px;
}
.rightcomment {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
