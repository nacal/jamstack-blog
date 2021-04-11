<template>
  <ul class="tags u-flexCentering -lr">
    <li class="tags__item">
      <Tag
        tag-name="ブログ開発日記"
        tag-slug="develop"
      />
    </li>
    <li class="tags__item">
      <Tag
        tag-name="アクセシビリティ"
        tag-slug="accessibility"
      />
    </li>
    <li class="tags__item">
      <Tag
        tag-name="CSS"
        tag-slug="css"
      />
    </li>
    <li class="tags__item">
      <Tag
        tag-name="技術全般"
        tag-slug="tech"
      />
    </li>
    <li class="tags__item">
      <Tag
        tag-name="その他"
        tag-slug="others"
      />
    </li>
  </ul>
</template>

<script>
import {Tag} from "@/components/utility/index.js";

export default {
  components: {
    Tag
  }
}
</script>


<style lang="scss" scoped>
.tags {
  flex-wrap: wrap;

  &__item {
    margin-top: 1rem;
    word-break: keep-all;

    & + & {
      margin-left: 1rem;
    }
  }
}
</style>
