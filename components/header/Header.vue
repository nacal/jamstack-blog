<template>
  <header>
    <div class="header">
      <SiteTitle class="header__title u-flexCentering -fd"/>
      <Links class="header__links" />
      <Search class="header__search c-flex -ai-c" />
    </div>
  </header>
</template>

<script>
import {SiteTitle, Links, Search} from "./index.js";

export default {
  components: {
    SiteTitle,
    Links,
    Search,
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

  &__search {
    position: absolute;
    top: 8px;
    right: -174px;
  }
}
</style>
