<template>
  <section class="p-slug">
    <h1 class="p-slug__title">{{ post.fields.title }}</h1>
    <div class="p-slug__data p-post__data c-flex -jc-sb">
      <p class="p-post__tag">{{ post.fields.tag.fields.tag }}</p>
      <p lang="en" class="p-post__date -slug">
        <time :datetime="post.fields.publishedAt">{{
          new Date(post.fields.publishedAt).toLocaleDateString()
        }}</time>
      </p>
    </div>
    <img
      class="p-slug__image"
      v-bind:src="post.fields.headerImage.fields.file.url"
    />
    <div
      v-html="$md.render(post.fields.body)"
      class="p-slug__text p-slugFormat"
    ></div>
  </section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.slug": params.slug,
        order: "-sys.createdAt",
      })
      .then((entries) => {
        return {
          post: entries.items[0],
        };
      })
      .catch(console.error);
  },
};
</script>

<style scoped>
.slug {
  margin: 0 auto;
  max-width: 800px;
}
.slug_title {
  font-weight: bolder;
  font-size: 2rem;
}
.slug_date {
  color: rgb(57, 72, 85);
  text-align: right;
  font-size: 1rem;
}

</style>
