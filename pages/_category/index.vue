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
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  transition: "fade",
  data() {
    return {
      category: '',
      path: '',
      id: ''
    }
  },
  async asyncData({ env, params, route, category, path, id, error}) {
    switch (route.path) {
      case '/accessibility':
        id = "5crTZ3kyo0jy0MKJ5ou2Dj",
        category = 'アクセシビリティ',
        path ='accessibility'
        break
      case '/css':
        id = "6rl6BrfLzmPe7QeIf01VWR",
        category = 'CSS',
        path ='css'
        break
      case '/develop':
        id = "29aaVZBrUu3EjY9sRbX7ud",
        category = 'ブログ開発日記',
        path ='develop'
        break
      case '/techbook':
        id = "4CBqPUDWvk1rMj1ePMDYU",
        category = '技術書',
        path ='techbook'
        break
      case '/others':
        id = "6GhOaTj8tHlWawxiiDpoDU",
        category = 'その他',
        path ='others'
        break
      default:
        return error({ errorCode: 404 })
    }
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

  head() {
    return {
      title: this.category + " - NKTech",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "ブログカテゴリー「" + this.category + "」の一覧ページです。"
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.category + " - NKTech"
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content:
            "https://nktech.jp/" + this.path
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.category + " - NKTech"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:  "ブログカテゴリー「" + this.category + "」の一覧ページです。"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://nktech.jp/cardImage.jpg"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        { hid: "twitter:site", name: "twitter:site", content: "@nkthkr_" }
      ]
    };
  },
};
</script>
