<template>
  <div>
    <header>
      <img :src="logo" alt="olofofo-logo" class="logoImg" />
      <div class="links">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="linkBox"
          @click="$emit('changeActiveTab', category.text)"
        >
          <span :class="{ redDot: activeTab === category.text }"></span>
          <RouterLink :to="`/${category.link}`" class="link">{{
            category.text
          }}</RouterLink>
        </div>
        <img :src="icon.forwardIcon" alt="forward-icon" />
      </div>
      <div class="lastRight">
        <img :src="icon.avatar" alt="current-user" class="icon" />
        <img :src="icon.search" alt="search-button" class="icon" />
        <img :src="icon.hamburger" alt="hamburger-icon" class="icon" />
      </div>
    </header>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import logo from "/images/coloredLogo.png";
import avatar from "/images/avatar.png";
import search from "/images/search.png";
import hamburger from "/images/hamburger.png";
import forwardIcon from "/images/forward.png";
export default {
  props: {
    activeTab: {
      type: String,
    },
  },
  data() {
    return {
      logo,
      icon: {
        avatar,
        search,
        hamburger,
        forwardIcon,
      },
      categories: [
        {
          text: "corona updates",
          link: "health",
        },
        {
          text: "business",
          link: "business",
        },
        {
          text: "politics",
          link: "politics",
        },
        {
          text: "sports",
          link: "sports",
        },
        {
          text: "tech",
          link: "technology",
        },
        {
          text: "entertainment",
          link: "entertainment",
        },
        {
          text: "podcasts",
          link: "podcasts",
        },
      ],
    };
  },
  methods: {},
  emits: ["changeActiveTab"],
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 148px;
  padding-right: 148px;
  height: 80px;
  background-color: #fff;
  /* border: 2px solid red; */
}
.logoImg {
  height: 52px;
  width: 62.79px;
  margin-right: 60px;
}
.links {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 2;
}
.linkBox {
  display: flex;
  align-items: center;
  gap: 12px;
}
.redDot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: red;
}
.link {
  text-decoration: none;
  color: #2a2a2a;
  font-size: 15px;
  font-weight: 600;
  line-height: 21.82px;
  font-family: "Nunito Sans";
  text-transform: capitalize;
}
.lastRight {
  display: flex;
  align-items: center;
  gap: 18px;
  justify-self: flex-end;
}
.icon {
  height: 18px;
  width: 18px;
}
</style>
