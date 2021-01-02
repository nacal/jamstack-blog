<template>
  <div class="p-category">
    <div class="u-flexCentering -lr">
      <h2 class="p-category__title c-flex -fxd-c">
        <span
          lang="en"
          class="u-uppercase -en">
          Category
        </span>
        <span class="u-uppercase -ja">
          技術書
        </span>
      </h2>
    </div>
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
import Card from "~/components/Card.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  transition: "fade",
  components: {
    Card
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishedAt",
        "fields.tag.sys.id": "4CBqPUDWvk1rMj1ePMDYU",
})
      .then(entries => {
        return {
          posts: entries.items,
        };
      })
      .catch(console.error);
  },
};
</script>
