<template>
  <p class="p-tag">
    <nuxt-link
      :to="{ path: `/${ tagSlug }` }"
      class="c-tag"
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
