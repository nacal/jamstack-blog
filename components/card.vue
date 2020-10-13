<template>
  <article class="p-posts__item p-post">
    <figure class="p-post__figure">
      <nuxt-link v-bind:to="{ name: 'blog-slug', params: { slug: slug } }">
        <img class="p-post__image" v-bind:src="headerImage.fields.file.url" />
      </nuxt-link>
    </figure>
    <div class="p-post__text c-flex -fxd-c -jc-sb">
      <div class="p-post__title p-postTitle">
        <h1 class="p-postTitle__text">
          <nuxt-link
            v-bind:to="{ name: 'blog-slug', params: { slug: slug } }"
            class="p-postTitle__link"
            >{{ title }}
          </nuxt-link>
        </h1>
      </div>
      <div class="p-post__data c-flex -jc-sb">
        <p class="p-post__tag">{{ tag }}</p>
        <p lang="en" class="p-post__date">
          <time :datetime="publishedAt">{{
            new Date(publishedAt).toLocaleDateString()
          }}</time>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["title", "slug", "headerImage", "publishedAt", "tag"],
};
</script>
