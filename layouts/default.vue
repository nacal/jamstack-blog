<template>
  <div class="p-body">
    <Header />
    <main class="l-container l-main">
      <SearchForm />
      <nuxt />
    </main>
    <Footer />
    <ReturnTop />
  </div>
</template>

<script>
import SearchForm from "~/components/SearchForm.vue";

export default {
  components: {
    SearchForm
  },
};
</script>
