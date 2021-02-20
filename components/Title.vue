<template>
  <div class="u-flexCentering -lr">
    <h2 class="p-category__title c-flex -fxd-c">
      <span
        lang="en"
        class="u-uppercase -en">
        {{ subTitle }}
      </span>
      <span class="u-uppercase -ja">
        {{ title }}
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'subTitle']
}
</script>
