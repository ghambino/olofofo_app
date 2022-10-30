<template>
  <div class="editor">
    <div v-for="(article, index) in articles" :key="index" class="article">
      <img :src="article.imageSrc" alt="editorial pictures" class="img" />
      <div class="text">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import editorial1 from "/images/editorial1.png";
import editorial2 from "/images/editorial2.png";
export default {
  data() {
    return {
      articles: [
        {
          imageSrc: editorial1,
          title:
            "Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?",
          description:
            "The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus – and so is immune.",
        },
        {
          imageSrc: editorial2,
          title:
            "Making a mark in Asia: East Bengal’s 2003 Asean Cup win – a defining moment for Indian club football",
          description:
            "Beating some of the finest teams from South Asia, East Bengal became the first Indian club to win an officially recognised Asian football tournament.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.editor {
  display: flex;
  width: 100%;
  gap: 28px;
}
.article {
  flex: 1;
  display: flex;
}
.text h2 {
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
}
.text p {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
}
.img {
  width: 272px;
  margin-right: 16px;
}
</style>
