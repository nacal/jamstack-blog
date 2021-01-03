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
          {{ category }}
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
  data() {
    return {
      category: ''
    }
  },
  async asyncData({ env, params, route, category}) {
    let id;
    if(route.path === '/accessibility'){id = "5crTZ3kyo0jy0MKJ5ou2Dj", category = 'アクセシビリティ'}
    else if(route.path === '/css'){id = "6rl6BrfLzmPe7QeIf01VWR", category = 'CSS'}
    else if(route.path === '/develop'){id = "29aaVZBrUu3EjY9sRbX7ud", category = 'ブログ開発日記'}
    else if(route.path === '/techbook'){id = "4CBqPUDWvk1rMj1ePMDYU", category = '技術書'}
    else if(route.path === '/others'){id = "6GhOaTj8tHlWawxiiDpoDU", category = 'その他'}
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishedAt",
        "fields.tag.sys.id": id
      })
      .then(entries => {
        return {
          posts: entries.items,
          category
        };
      })
      .catch(console.error);
  },
};
</script>
