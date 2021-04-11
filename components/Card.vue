<template>
  <transition name="pagination">
    <article class="p-posts__item p-post">
      <figure class="p-post__figure">
        <nuxt-link :to="{ path: `/${tagSlug}/${slug}` }">
          <img
            :src="headerImage.fields.file.url"
            :alt="headerImage.fields.description"
            class="p-post__image"
          >
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
          <Tag
            :tag-name="tag"
            :tag-slug="tagSlug"
          />
          <p
            lang="en"
            class="p-post__date">
            <time :datetime="publishedAt">{{
              new Date(publishedAt).toLocaleDateString()
            }}</time>
          </p>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
import {Tag} from "@/components/utility/index.js";

export default {
  components: {
    Tag
  },
  props: ["title", "slug", "headerImage", "publishedAt", "tag", "tagSlug"]
};
</script>

<style>
.pagination-enter-active,
.pagination-leave-active {
  transition: all .5s ease-out;
}

.pagination-enter,
.pagination-leave-to {
  opacity: 0;
}
</style>
