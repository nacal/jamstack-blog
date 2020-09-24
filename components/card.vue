<template>
  <article class="card p-posts__item">
    <nuxt-link v-bind:to="{ name: 'blog-slug', params: { slug: slug }}" class="wrapper">
      <img class="card_image" v-bind:src="headerImage.fields.file.url" />
      <h1 class="card_title">{{ title }}</h1>
      <p class="card_date">{{ (new Date(publishedAt)).toLocaleDateString() }}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ["title", "slug", "headerImage", "publishedAt"],
};
</script>

<style scoped>
.card {
  padding: 10px 20px;
  max-width: 100%;
  border: .5px solid rgb(57, 72, 85);
  text-align: center;
}
.wrapper {
  text-decoration: none;
}
.card_title {
  font-size: 1.2rem;
}
.card_date {
  color: rgb(57, 72, 85);
  text-align: right;
  font-size: .7rem;
}
.card_image {
  max-width: 100%;
}

</style>
