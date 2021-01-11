<template>
  <div>
    <article class="p-search">
      <SearchForm />
      <Tags />
    </article>
    <section class="p-posts">
      <Card
        v-for="post in posts"
        :key="post.fields.slug"
        :title="post.fields.title"
        :slug="post.fields.slug"
        :header-image="post.fields.headerImage"
        :published-at="post.fields.publishedAt"
        :tag="post.fields.tag.fields.tag"
        :tag-slug="post.fields.tag.fields.tagSlug"
      />
    </section>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  transition: "fade",
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishedAt",
      })
      .then(entries => {
        return {
          posts: entries.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter {
  transform: translateY(15px);
}
</style>
