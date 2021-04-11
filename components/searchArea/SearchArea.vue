<template>
  <article class="searchArea">
    <SearchForm />
    <Tags />
  </article>
</template>

<script>
import {SearchForm, Tags} from './index.js'

export default {
  components: {
    SearchForm,
    Tags
  }
}
</script>

<style>
.searchArea {
  margin-bottom: 4rem;
}
</style>
