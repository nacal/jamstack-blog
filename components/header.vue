<template>
  <header>
    <div class="header">
      <div class="header__container u-flexCentering -fd -fxd-c">
        <h1 class="header__title">
          <nuxt-link
            to="/"
            class="c-logo c-logo--primary">
            <img
              src="../assets/images/common/logo-primary.png"
              srcset="
                    ../assets/images/common/logo-primary.png    1x,
                    ../assets/images/common/logo-primary@2x.png 2x
                  "
              alt="NKTech"
            >
          </nuxt-link>
        </h1>
        <h2 class="header__copy">アウトプットをコツコツ積み上げるTechブログ</h2>
      </div>
      <Links class="header__sns" />
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
    </div>
    <!-- /.header -->
  </header>
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
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 100%;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - calc(30vw / 5.37)), 70vw 100%, 0 100%);
  background-color: $main-color;

  &__container {
    height: 100%;

    @include mq(tab) {
      align-items: flex-start;
    }
  }

  &__title {
    width: 200px;
    max-width: 75%;
    margin-bottom: .5rem;
    line-height: 4rem;
    text-align: center;
  }

  &__copy {
    font-size: .8rem;
    font-weight: bold;

    @include mq(tab) {
      font-size: 1rem;
    }
  }

  &__sns {
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
