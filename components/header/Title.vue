<template>
  <div class="title c-flex -fxd-c">
    <h1 class="title__logo">
      <nuxt-link
        to="/"
        class="c-logo c-logo--primary">
        <img
          src="@/assets/images/common/logo-primary.png"
          srcset="
                  @/assets/images/common/logo-primary.png    1x,
                  @/assets/images/common/logo-primary@2x.png 2x
                "
          alt="NKTech"
        >
      </nuxt-link>
    </h1>
    <h2 class="title__copy">アウトプットをコツコツ積み上げるTechブログ</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title {
  &__logo {
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
}
</style>
