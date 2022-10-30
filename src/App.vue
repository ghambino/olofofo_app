<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    NavbarVue: Navbar,
    AppFooter,
  },
  data() {
    return {
      activeTab: "corona updates",
    };
  },
  methods: {
    changeTab: function (value) {
      this.activeTab = value;
    },
  },
};
</script>

<template>
  <div>
    <NavbarVue
      v-on:changeActiveTab="changeTab($event)"
      :activeTab="activeTab"
    />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style></style>
