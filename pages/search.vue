<template>
  <div>
    <article class="p-search">
      <SearchForm />
      <Tags />
      <p class="p-search__title">「{{ query }}」　検索結果 : {{ posts.length }}件</p>
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
