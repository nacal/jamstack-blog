<template>
  <div>
    <article class="p-search">
      <SearchForm />
      <Tags />
    </article>
    <section class="p-posts">
      <Card
        v-for="post in pagePosts"
        v-show="show"
        :key="post.fields.slug"
        :title="post.fields.title"
        :slug="post.fields.slug"
        :header-image="post.fields.headerImage"
        :published-at="post.fields.publishedAt"
        :tag="post.fields.tag.fields.tag"
        :tag-slug="post.fields.tag.fields.tagSlug"
      />
    </section>
    <article class="pagination">
      <v-pagination
        v-model="page"
        :length="length"
        :circle="true"
        color="#00aca3"
        @input = "pageChange"
      />
    </article>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  data () {
    return {
      page: 1,
      pagePosts: [],
      pageSize: 6,
      length:0,
      show: true
    }
  },
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
  },
  mounted: function(){
    this.posts
    this.pagePosts = this.posts.slice(0,this.pageSize)
    this.length = Math.ceil(this.posts.length/this.pageSize);
  },
  methods: {
    pageChange: function(pageNumber){
      this.show = false;
      window.setTimeout(() => {
        this.pagePosts = this.posts.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber))
        this.show = true;
      }, 500);
    },
  },
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

.pagination {
  margin-top: 64px;
}
</style>
