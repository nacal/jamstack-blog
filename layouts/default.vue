<template>
  <div class="l-body">
    <Header class="l-header"/>
    <main class="l-container l-main">
      <nuxt />
    </main>
    <ReturnTopPage v-if="($route.path != '/')"/>
    <Footer class="l-footer"/>
    <ReturnTop />
  </div>
</template>

<script>
import Header from "@/components/header/index.js";
import Footer from "@/components/footer/index.js";
import ReturnTopPage from "@/components/utility/ReturnTopPage.vue";
import ReturnTop from "@/components/utility/ReturnTop.vue";

export default {
  components: {
    Header,
    Footer,
    ReturnTopPage,
    ReturnTop,
  }
};
</script>

<style lang="scss" scoped>
.l-body {
  background-color: $base-color;
}

.l-header {
  height: 260px;
}

.l-main {
  min-height: calc(100vh - 404px);
  padding: 4rem 0;
}

.l-footer {
  height: 120px;
}

.l-container {
  position: relative;
  width: $content-width;
  max-width: 90%;
  height: 100%;
  margin: 0 auto;

  &.-slim {
    max-width: $slim-content-width;
  }
}
</style>
