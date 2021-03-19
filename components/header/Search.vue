<template>
  <div
    :class="{'is-active': active}"
    class="search">
    <fa
      :icon="faSearch"
      aria-label="検索フォームの表示、非常時を切り替える"
      role="button"
      class="search__icon"
      @click="naviOpen"/>
    <SearchForm
      :class="{'is-active': active}"
      class="search__form"/>
  </div>
</template>

<script>
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default {
  data: function() {
    return {
      active: false,
      navi: false,
    };
  },
  computed: {
    faSearch() {
      return faSearch;
    },
  },
  methods: {
    naviOpen: function() {
      this.active = !this.active;
    }
  },
}
</script>

<style lang="scss" scoped>
.search {
  transition: all .25s ease-out;

  &__icon {
    margin: 8px 16px 0 0;
    font-size: 1.5rem;
  }

  &__form {
    opacity: 0;
    transition: all .25s ease-out;

    &.is-active {
      opacity: 1;
    }
  }

  &.is-active {
    right: 8px;
  }
}
</style>
