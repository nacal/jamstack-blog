<template>
  <article class="searchForm">
    <v-form
      @submit.prevent="submit"
    >
      <v-text-field
        ref="searchForm"
        v-model="query"
        hide-details
        placeholder="記事を検索"
        dense
      />
    </v-form>
  </article>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    // 検索キーワードが有効な場合にtrueを返す
    validQuery() {
      return !!this.query && // 入力必須
        !/^\s+$/.test(this.query) && // 空白のみ禁止
        this.$route.query.q !== this.query // 値の変化
    }
  },
  methods: {
    submit() {
      if (this.validQuery) {
        this.$router.push({ path: '/search', query: { q: this.query } })
        this.query = ''
        this.$refs.searchForm.blur()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.searchForm {
  max-width: 400px;
  margin: 0 auto 80px;
}
</style>
