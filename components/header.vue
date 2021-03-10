<template>
  <header>
    <div class="p-header">
      <div class="p-header__container u-flexCentering -fd c-flex -fxd-c">
        <div class="u-flexCentering -lr c-flex -fxd-c">
          <h1 class="p-header__title">
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
          <h2 class="p-header__copy">アウトプットをコツコツ積み上げるTechブログ</h2>
        </div>
      </div>
      <!-- /.l-container -->
      <div class="p-header__sns p-sns c-flex">
        <Icon
          v-for="(icon, index) in icons"
          :key="index"
          :fa="icon.fa"
          :class="'-main'"
          :link="icon.link"
          :aria-label="icon.label" />
        <nuxt-link
          to="/contact"
        >
          <fa
            :icon="faEnvelope"
            aria-label="お問い合わせのアイコン"
            class="p-sns__item -main"/>
        </nuxt-link>
      </div>
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
    <!-- /.p-header -->
  </header>
</template>

<script>
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default {
  data: function() {
    return {
      active: false,
      navi: false,
      icons: [
        {
          fa: faTwitter,
          link: "https://twitter.com/nkthkr_",
          label: "Twitterのアイコン"
        },
        {
          fa: faGithub,
          link: "https://github.com/nkthkr",
          label: "GitHubのアイコン"
        },
      ]
    };
  },
  computed: {
    faTwitter() {
      return faTwitter;
    },
    faGithub() {
      return faGithub;
    },
    faSearch() {
      return faSearch;
    },
    faEnvelope() {
      return faEnvelope;
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
