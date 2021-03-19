<template>
  <header>
    <div class="header">
      <Title class="header__title u-flexCentering -fd"/>
      <Links class="header__links" />
      <div
        :class="{'is-active': active}"
        class="SearchForm">
        <fa
          :icon="faSearch"
          aria-label="検索フォームの表示、非常時を切り替える"
          role="button"
          class="SearchForm__icon"
          @click="naviOpen"/>
        <SearchForm
          :class="{'is-active': active}"
          class="SearchForm__form"/>
      </div>
      <!-- /.SearchForm -->
    </div>
    <!-- /.header -->
  </header>
</template>

<script>
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title.vue";
import Links from "./Links.vue";

export default {
  components: {
    Title,
    Links,
  },
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
.header {
  position: relative;
  height: 100%;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - calc(30vw / 5.37)), 70vw 100%, 0 100%);
  background-color: $main-color;

  &__title {
    height: 100%;

    @include mq(tab) {
      align-items: flex-start;
    }
  }

  &__links {
    position: absolute;
    top: 1rem;
    left: .5rem;

    @include mq(tab) {
      left: 0;
    }
  }
}

.SearchForm {
  position: absolute;
  top: 8px;
  right: -174px;
  display: flex;
  align-items: center;
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
