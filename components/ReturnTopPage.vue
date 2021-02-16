<template>
  <article class="returnTopPage">
    <nuxt-link
      to="/"
      class="_link">トップページへ</nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.returnTopPage {
  margin-top: 72px;
  text-align: center;

  & ._link {
    position: relative;
    display: inline-block;
    transition: .3s;

    &::after {
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 2px;
      content: '';
      background-color: $main-color;
      transition: .3s;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
