<template>
  <div class="p-body">
    <Header />
    <main class="l-container l-main">
      <nuxt />
    </main>
    <Footer />
    <ReturnTop />
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import ReturnTop from "~/components/ReturnTop.vue";


export default {
  components: {
    Header,
    Footer,
    ReturnTop,
  },
};
</script>
