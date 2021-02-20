<template>
  <div class="icon">
    <a
      :href="link"
      target="_blank"
      class="icon__item" >
      <fa :icon="fa"/>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    fa: {
      type: Object,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  &__item {
    line-height: 1;
    transition: .5s all ease-out 0s;
  }

  &__message {
    text-align: center;
  }
}

.-share {
  .icon__item {
    font-size: 2rem;
    color: #fff;
  }
}

.-main {
  .icon__item {
    margin-left: .5rem;
    font-size: 1.5rem;

    &:hover {
      color: $icon-hover-color;
      transition: .5s all ease-out 0s;
    }

    @include mq(tab) {
      margin-left: 1rem;
    }
  }
}

</style>
