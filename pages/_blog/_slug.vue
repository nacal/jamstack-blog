<template>
  <section class="p-slug">
    <h1 class="p-slug__title">{{ post.fields.title }}</h1>
    <div class="p-slug__data p-post__data c-flex -jc-sb">
      <p class="p-post__tag">
        <nuxt-link
          :to="{ path: `/${post.fields.tag.fields.tagSlug}` }"
          class="c-tag"
        >
          {{ post.fields.tag.fields.tag }}
        </nuxt-link>
      </p>
      <p
        lang="en"
        class="p-post__date -slug">
        <time :datetime="post.fields.publishedAt">{{
          new Date(post.fields.publishedAt).toLocaleDateString()
        }}</time>
      </p>
    </div>
    <img
      :src="post.fields.headerImage.fields.file.url"
      :alt="post.fields.headerImage.fields.description"
      class="p-slug__image"
    >
    <div class="p-slug__text">
      <div
        class="p-slugFormat"
        v-html="$md.render(post.fields.body)"
      />
      <Share />
    </div>
  </section>
</template>

<script>
import Share from "~/components/Share.vue";
import { createClient } from "~/plugins/contentful.js";
import Prism from "~/plugins/prism";

const client = createClient();
export default {
  transition: "slug",
  components: {
    Share
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.slug": params.slug,
        order: "-sys.createdAt"
      })
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(console.error);
  },
  head() {
    return {
      title: this.post.fields.title + " - NKTech",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.fields.description
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.post.fields.title + " - NKTech"
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content:
            "https://nktech.jp/" +
            this.post.fields.tag.fields.tagSlug +
            "/" +
            this.post.fields.slug
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.post.fields.title + " - NKTech"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.fields.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https:" + this.post.fields.headerImage.fields.file.url
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
  mounted() {
    Prism.highlightAll();
  }
};
</script>
