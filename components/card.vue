<template>
  <article class="p-posts__item p-post">
    <figure class="p-post__figure">
      <nuxt-link :to="{ path: `/${tagSlug}/${slug}` }">
        <img
          class="p-post__image"
          :src="headerImage.fields.file.url"
          :alt="headerImage.fields.description"
        />
      </nuxt-link>
    </figure>
    <div class="p-post__text c-flex -fxd-c -jc-sb">
      <div class="p-post__title p-postTitle">
        <h1 class="p-postTitle__text">
          <nuxt-link
            :to="{ path: `/${tagSlug}/${slug}` }"
            class="p-postTitle__link"
          >
            {{ title }}
          </nuxt-link>
        </h1>
      </div>
      <div class="p-post__data c-flex -jc-sb">
        <p class="p-post__tag">
          <nuxt-link :to="{ path: `/${tagSlug}` }" class="c-tag">
            {{ tag }}
          </nuxt-link>
        </p>
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
  props: ["title", "slug", "headerImage", "publishedAt", "tag", "tagSlug"]
};
</script>
