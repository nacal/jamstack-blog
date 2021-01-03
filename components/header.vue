<template>
  <header class="l-header">
    <div class="p-header">
      <div class="p-header__container l-container u-flexCentering -fd c-flex -fxd-c">
        <div class="u-flexCentering -lr c-flex -fxd-c">
          <h1 class="p-header__title">
            <span
              class="u-screenReaderText"
              lang="en">NKTech</span>
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
        <a
          href="https://twitter.com/nkthkr_"
          target="_blank">
          <fa
            :icon="faTwitter"
            aria-label="Twitterのアイコン"
            class="p-sns__item -main" />
        </a>
        <a
          href="https://github.com/nkthkr"
          target="_blank"
        ><fa
          :icon="faGithub"
          aria-label="Githubのアイコン"
          class="p-sns__item -main"
        /></a>
      </div>
      <div
        :class="{'is-active': active}"
        class="SearchForm">
        <fa
          :icon="faSearch"
          aria-label="虫眼鏡のアイコン"
          class="SearchForm__icon"
          @click="naviOpen"/>
        <SearchForm/>
      </div>
    </div>
    <!-- /.p-header -->
  </header>
</template>

<script>
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import SearchForm from "~/components/SearchForm.vue";

export default {
  components: {
    SearchForm
  },
  data: function() {
return {
    active: false,
    navi: false,
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
  right: -172px;
  display: flex;
  align-items: center;
  transition: all .5s ease-out;

  &__icon {
    margin: 8px 16px 0 0;
    font-size: 1.25rem;
  }

  &.is-active {
    right: 8px;
  }
}
</style>
