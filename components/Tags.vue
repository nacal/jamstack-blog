<template>
  <ul class="tags u-flexCentering -lr">
    <li class="tags__item p-tag">
      <nuxt-link
        :to="{ path: `/develop` }"
        class="c-tag">
        ブログ開発日記
      </nuxt-link>
    </li>
    <li class="tags__item p-tag">
      <nuxt-link
        :to="{ path: `/develop` }"
        class="c-tag">
        アクセシビリティ
      </nuxt-link>
    </li>
    <li class="tags__item p-tag">
      <nuxt-link
        :to="{ path: `/others` }"
        class="c-tag">
        その他
      </nuxt-link>
    </li>
    <!-- <li></li> -->
  </ul>
</template>

<style lang="scss" scoped>
.tags {
  &__item + &__item {
    margin-left: 1rem;
  }
}
</style>
