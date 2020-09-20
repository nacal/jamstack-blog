<template>
  <article class="card">
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
  margin: 10px 10px;
  padding: 10px 20px;
  width: 300px;
  height: 200px;
  border: .5px solid rgb(57, 72, 85);
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, .2);
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
  max-height: 100px;
}

</style>
