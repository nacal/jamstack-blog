<template>
  <article class="p-posts__item p-post">
    <nuxt-link
      v-bind:to="{ name: 'blog-slug', params: { slug: slug } }"
      class="wrapper"
    >
      <figure class="p-post__figure">
        <img class="p-post__image" v-bind:src="headerImage.fields.file.url" />
      </figure>
      <div class="p-post__text c-flex -fxd-c -jc-sb">
        <h1 class="p-post__title">{{ title }}</h1>
        <div class="p-post__data c-flex -jc-sb">
          <p class="p-post__tag">{{ tag }}</p>
          <p class="p-post__date">
            {{ new Date(publishedAt).toLocaleDateString() }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ["title", "slug", "headerImage", "publishedAt", "tag"],
};
</script>
