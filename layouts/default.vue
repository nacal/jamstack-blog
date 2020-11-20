<template>
  <div class="p-body">
    <header class="l-header">
      <div class="p-header">
        <div class="l-container u-flexCentering -fd c-flex -fxd-c">
          <h1 class="p-header__title">
            <span class="u-screenReaderText" lang="en">NKTech</span>
            <nuxt-link to="/" class="c-logo c-logo--primary">
              <img
                src="../assets/images/common/logo-primary.png"
                srcset="
                  ../assets/images/common/logo-primary.png    1x,
                  ../assets/images/common/logo-primary@2x.png 2x
                "
                alt="NKTech"
              />
            </nuxt-link>
          </h1>
          <h2 class="p-header__copy">
            アウトプットをコツコツ積み上げるTechブログ
          </h2>
        </div>
        <!-- /.l-container -->
        <div class="p-header__sns p-sns c-flex">
          <a href="https://twitter.com/nkthkr_" target="_blank">
            <fa :icon="faTwitter" class="p-sns__item -main" />
          </a>
          <a href="https://github.com/nkthkr" 　target="_blank"
            ><fa :icon="faGithub" class="p-sns__item -main"
          /></a>
        </div>
      </div>
      <!-- /.p-header -->
    </header>
    <main class="l-container l-main">
      <nuxt />
    </main>
    <footer class="l-footer">
      <div class="p-footer">
        <article class="p-footer__copyright c-copyright u-flexCentering -fd">
          <small lang="en">&copy; 2020 Hikaru Nakata.</small>
        </article>
      </div>
    </footer>
    <ReturnTop />
  </div>
</template>

<script>
import ReturnTop from "~/components/ReturnTop.vue";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
  components: {
    ReturnTop,
  },
  computed: {
    faTwitter() {
      return faTwitter;
    },
    faGithub() {
      return faGithub;
    },
  },
};
</script>

<style>
.slug-enter-active,
.slug-leave-active {
  transition: all .5s ease-out;
}

.slug-enter,
.slug-leave-to {
  opacity: 0;
}

.slug-enter {
  transform: translateY(15px);
}
</style>
