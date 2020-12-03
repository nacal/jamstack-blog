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
            class="p-sns__item -main" />
        </a>
        <a
          href="https://github.com/nkthkr"
          target="_blank"
        ><fa
          :icon="faGithub"
          class="p-sns__item -main"
        /></a>
      </div>
    </div>
    <!-- /.p-header -->
  </header>
</template>

<script>
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
  computed: {
    faTwitter() {
      return faTwitter;
    },
    faGithub() {
      return faGithub;
    },
  },
}
</script>
