<template>
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
</template>

<script>
import Card from "~/components/Card.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  components: {
    Card,
  },
  data() {
    return {
      query: ''
    }
  },
  watch: {
    '$route.query.q': {
      handler(newVal) {
        this.query = newVal
      },
      immediate: true
    }
  },
  transition: "fade",
  async asyncData({ env, params, query }) {
    let data = query.q
    console.log(data)
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishedAt",
        'query': data
      })
      .then(entries => {
        return {
          posts: entries.items
        };
      })
      .catch(console.error);
  },
};
</script>
