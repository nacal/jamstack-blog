<template>
  <p class="tag">
    <nuxt-link
      :to="{ path: `/${ tagSlug }` }"
      class="tag__link"
    >
      {{ tagName }}
    </nuxt-link>
  </p>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tagName: {
      type: String,
      default: "null",
    },
    tagSlug: {
      type: String,
      default: "null",
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  display: inline;
  padding: .2rem .4rem;
  font-size: .8rem;
  color: $secondary-text-color;
  background-color: $tag-color;

  &:hover {
    background-color: $icon-hover-color;
    transition: .5s all ease-out 0s;
  }

  &__link {
    display: inline;
  }
}
</style>
