<template>
  <div class="foot">
    <div class="logo-brace">
      <img :src="whiteLogo" alt="logo" class="whiteLogo" />
      <p class="footer-text">copyright @ 2020 | NBC NEWS</p>
    </div>
    <ul class="center">
      <li>Privacy Policy</li>
      <li>Do not sell my personal info</li>
      <li>Terms of Service</li>
      <li>nbcnews.com Site Map</li>
    </ul>
    <div class="third">
      <ul class="lower-nav">
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>Coupons</li>
      </ul>
      <div class="icons">
        <img v-for="icon in icons" :src="icon" alt="icon" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import facebook from "/images/facebook.png";
import feeds from "/images/feeds.png";
import twitter from "/images/twitter.png";
import pinterest from "/images/pinterest.png";
import whiteLogo from "/images/whiteLogo.png";
export default {
  data() {
    return {
      icons: [feeds, twitter, pinterest, facebook],
      whiteLogo,
    };
  },
};
</script>

<style scoped>
.foot {
  background-color: #0e1e32;
  height: 250px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 80px;
  padding-left: 196px;
  padding-right: 196px;
  margin-top: 20px;
}
.logo-brace {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}
.footer-text {
  opacity: 0.3;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.center li,
.lower-nav li {
  font-family: "Poppins";
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 31.5px;
  letter-spacing: 2%;
  list-style-type: none;
}
.third {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-end;
}
.lower-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}
.icon {
  height: 24px;
  width: 24px;
}
.icons {
  display: flex;
  align-items: center;
  gap: 32px;
}
</style>
