<template>
  <div class="p-body">
    <Header class="header"/>
    <main class="container main">
      <nuxt />
    </main>
    <Footer class="footer"/>
    <ReturnTop />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.header {
  height: 260px;
}

.main {
  min-height: calc(100vh - 380px);
  padding: 4rem 0;
}

.footer {
  height: 120px;
}

.container {
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
