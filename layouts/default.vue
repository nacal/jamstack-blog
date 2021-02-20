<template>
  <div class="l-body">
    <Header class="l-header"/>
    <main class="l-container l-main">
      <nuxt />
    </main>
    <Footer class="l-footer"/>
    <ReturnTop />
  </div>
</template>

<script>
export default {
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
  min-height: calc(100vh - 380px);
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
