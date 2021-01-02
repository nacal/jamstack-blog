<template>
  <div class="p-body">
    <Header />
    <SearchForm class="SearchForm"/>
    <main class="l-container l-main">
      <nuxt />
    </main>
    <Footer />
    <ReturnTop />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.SearchForm {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
