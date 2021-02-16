<template>
  <article class="success">
    <h1
      class="success__heading"
      lang="en">Thank You.</h1>
    <p class="success__message">お問い合わせを受け付けました。</p>
    <ReturnTopPage />
  </article>
</template>

<script>
export default {
  transition: 'fade'
}
</script>

<style lang="scss" scoped>
.success {
  width: 100%;
  text-align: center;

  &__heading {
    font-size: 3rem;
  }
}
</style>
