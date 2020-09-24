<template>
  <section class="slug">
    <h1 class="slug_title">{{ post.fields.title }}</h1>
    <p class="slug_date">{{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}</p>
    <img class="slug_image" v-bind:src="post.fields.headerImage.fields.file.url" />
    <div v-html="$md.render(post.fields.body)"></div>
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
